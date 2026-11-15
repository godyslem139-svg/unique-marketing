// app/api/youtube/route.ts
import { NextResponse } from "next/server";

export const revalidate = 3600; // تحديث الفيديوهات تلقائياً كل ساعة

export async function GET() {
  const handleUrl = "https://www.youtube.com/@unique_ws";

  try {
    // 1. جلب صفحة القناة لاستخراج الـ Channel ID تلقائياً
    const pageRes = await fetch(handleUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept-Language": "ar,en;q=0.9",
      },
      next: { revalidate: 3600 },
    });

    const html = await pageRes.text();
    const channelIdMatch =
      html.match(/"channelId":"(UC[a-zA-Z0-9_-]{22})"/) ||
      html.match(/<meta itemprop="identifier" content="(UC[a-zA-Z0-9_-]{22})">/);

    if (!channelIdMatch) {
      return NextResponse.json({ videos: [], error: "Channel ID not found" });
    }

    const channelId = channelIdMatch[1];

    // 2. جلب الفيديوهات من خلاصة RSS الرسمية ليوتيوب
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const rssRes = await fetch(rssUrl, { next: { revalidate: 3600 } });
    const xml = await rssRes.text();

    // 3. تحليل ملف الـ XML واستخراج بيانات كل فيديو
    const entries = xml.split("<entry>").slice(1);
    const videos = entries.map((entry) => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || "";
      const rawTitle = entry.match(/<title>(.*?)<\/title>/)?.[1] || "";
      const title = rawTitle
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1] || "";
      const views = entry.match(/views="(\d+)"/)?.[1] || "0";

      return {
        id: videoId,
        title,
        published,
        views,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    });

    return NextResponse.json({ channelId, videos });
  } catch (error) {
    return NextResponse.json(
      { videos: [], error: "Failed to fetch YouTube videos" },
      { status: 500 }
    );
  }
}