import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, lang } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: lang === 'ar' ? 'جميع الحقول الأساسية مطلوبة' : 'All required fields must be filled' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is missing' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: 'UNIQUE Agency <onboarding@resend.dev>',
      to: ['godyslem139@gmail.com'],
      subject: `New Message from Website: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; direction: rtl; padding: 20px; background: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #2563eb;">New Message via UNIQUE Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'Inquiry'}</p>
          <hr style="border: 0; border-top: 1px solid #ccc;" />
          <p><strong>Message:</strong></p>
          <p style="background: #fff; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}