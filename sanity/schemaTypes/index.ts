import { type SchemaTypeDefinition } from 'sanity'

// دالة مساعدة لإنشاء حقول اللغات (عربي وإنجليزي)
const createMultiLangField = (name: string, title: string, isArray: boolean = false) => ({
  name,
  title,
  type: 'object',
  fields: [
    {
      name: 'ar',
      title: 'العربية (AR)',
      type: isArray ? 'array' : 'string',
      ...(isArray ? { of: [{ type: 'block' }] } : {})
    },
    {
      name: 'en',
      title: 'English (EN)',
      type: isArray ? 'array' : 'string',
      ...(isArray ? { of: [{ type: 'block' }] } : {})
    }
  ]
});

// دالة مشتركة لأزرار الـ CTA والروابط للغتين
const createCtaFields = () => ([
  createMultiLangField('ctaText', 'نص زر الانتقال (CTA Text)'),
  createMultiLangField('ctaUrl', 'رابط زر الانتقال (URL)')
]);

// 1. سكيما الصفحات المرنة (Page Builder الشاملة بكل الأقسام)
const flexiblePage = {
  name: 'flexiblePage',
  title: 'Flexible Pages (الصفحات المرنة)',
  type: 'document',
  fields: [
    createMultiLangField('pageTitle', 'اسم الصفحة (Page Title)'),
    {
      name: 'slug',
      title: 'رابط الصفحة (Slug)',
      type: 'slug',
      options: { 
        source: (doc: any) => doc.pageTitle?.en || doc.pageTitle?.ar || 'page', 
        maxLength: 96 
      }
    },
    {
      name: 'sections',
      title: 'أقسام الصفحة (Page Builder Sections)',
      type: 'array',
      of: [
        // 1. سكشن الهيرو
        {
          type: 'object',
          name: 'heroSection',
          title: 'Hero Section (الهيرو)',
          fields: [
            createMultiLangField('badge', 'الشارة العليا (Badge)'),
            createMultiLangField('title', 'العنوان الرئيسي'),
            createMultiLangField('subtitle', 'الوصف أو العنوان الفرعي', true),
            { name: 'bgImage', title: 'صورة الخلفية', type: 'image', options: { hotspot: true } },
            { name: 'bgVideoUrl', title: 'رابط فيديو خارجي للخلفية', type: 'url' },
            { name: 'bgVideoFile', title: 'أو رفع فيديو للخلفية من الجهاز', type: 'file', options: { accept: 'video/*' } },
            ...createCtaFields()
          ]
        },

        // 2. سكشن قسمين (Split Section)
        {
          type: 'object',
          name: 'splitSection',
          title: 'Split Section (قسم من جزأين: صورة/فيديو + نص وزر)',
          fields: [
            {
              name: 'layoutDirection',
              title: 'اتجاه العرض',
              type: 'string',
              options: {
                list: [
                  { title: 'صورة يمين / نص يسار', value: 'imageRight' },
                  { title: 'صورة يسار / نص يمين', value: 'imageLeft' }
                ],
                layout: 'radio'
              },
              initialValue: 'imageRight'
            },
            {
              name: 'mediaType',
              title: 'نوع الوسائط',
              type: 'string',
              options: {
                list: [
                  { title: 'صورة', value: 'image' },
                  { title: 'فيديو مرفوع', value: 'videoFile' },
                  { title: 'رابط فيديو خارجي', value: 'videoUrl' }
                ],
                layout: 'radio'
              },
              initialValue: 'image'
            },
            {
              name: 'image',
              title: 'الصورة',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }: { parent?: any }) => parent?.mediaType !== 'image'
            },
            {
              name: 'videoFile',
              title: 'ملف الفيديو المرفوع',
              type: 'file',
              options: { accept: 'video/*' },
              hidden: ({ parent }: { parent?: any }) => parent?.mediaType !== 'videoFile'
            },
            {
              name: 'videoUrl',
              title: 'رابط الفيديو الخارجي',
              type: 'url',
              hidden: ({ parent }: { parent?: any }) => parent?.mediaType !== 'videoUrl'
            },
            createMultiLangField('title', 'العنوان'),
            createMultiLangField('description', 'الوصف', true),
            ...createCtaFields()
          ]
        },

        // 3. سكشن السلايدر المتحرك (Moving Slider / Marquee)
        {
          type: 'object',
          name: 'sliderSection',
          title: 'Moving Slider / Marquee (السلايدر المتحرك)',
          fields: [
            createMultiLangField('sectionTitle', 'عنوان السكشن'),
            {
              name: 'slides',
              title: 'الشرائح',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'image', title: 'صورة الشريحة', type: 'image' },
                    createMultiLangField('caption', 'عنوان فرعي'),
                    createMultiLangField('slideUrl', 'رابط الشريحة')
                  ]
                }
              ]
            }
          ]
        },

        // 4. سكشن شبكة الكروت (Grid Cards)
        {
          type: 'object',
          name: 'gridCardsSection',
          title: 'Grid Cards Section (شبكة الكروت والخدمات)',
          fields: [
            createMultiLangField('sectionTitle', 'عنوان السكشن'),
            {
              name: 'cards',
              title: 'الكروت أو الخدمات',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'كارت / خدمة',
                  fields: [
                    createMultiLangField('cardTitle', 'عنوان الكارت / الخدمة'),
                    createMultiLangField('cardDesc', 'وصف الكارت', true),
                    { name: 'cardImage', title: 'صورة الكارت', type: 'image', options: { hotspot: true } },
                    { name: 'priceText', title: 'نص السعر على الكارت', type: 'string' },
                    createMultiLangField('locationText', 'نص الموقع على الخريطة'),
                    { name: 'locationMapUrl', title: 'رابط خريطة الموقع', type: 'url' },
                    createMultiLangField('badgeText', 'نص الشارة المميزة على الكارت'),
                    {
                      name: 'badgeEmoji',
                      title: 'اختر أيقونة للشارة',
                      type: 'string',
                      options: {
                        list: [
                          { title: '🔥 الأكثر طلباً', value: '🔥' },
                          { title: '👨‍👩‍👧‍👦 مناسب للعائلات', value: '👨‍👩‍👧‍👦' },
                          { title: '👶 مناسب للمبتدئين', value: '👶' },
                          { title: '🏆 مستوى محترف', value: '🏆' },
                          { title: '🤿 معدات غوص', value: '🤿' },
                          { title: '🚤 رحلة بحرية', value: '🚤' },
                          { title: '🐬 مشاهدة دلافين', value: '🐬' },
                          { title: '⭐ خدمة VIP', value: '⭐' },
                          { title: '🍽️ بوفيه مفتوح', value: '🍽️' },
                          { title: '🚐 انتقالات مجانية', value: '🚐' }
                        ],
                        layout: 'dropdown'
                      }
                    },
                    { name: 'servicePrice', title: 'سعر الخدمة - رقمي', type: 'number' },
                    { name: 'serviceSlug', title: 'معرف الخدمة في الرابط', type: 'string' },
                    createMultiLangField('cardCtaText', 'نص زر الكارت'),
                    createMultiLangField('cardCtaUrl', 'رابط زر الكارت')
                  ]
                }
              ]
            }
          ]
        },

        // 5. سكشن نموذج الحجز والاستعلام
        {
          type: 'object',
          name: 'bookingFormSection',
          title: 'Booking Inquiry Form (نموذج الحجز والاستعلام)',
          fields: [
            createMultiLangField('formTitle', 'عنوان نموذج الحجز'),
            { name: 'defaultAdultPrice', title: 'سعر البالغ الافتراضي (€)', type: 'number', initialValue: 150 },
            { name: 'defaultChildPrice', title: 'سعر الطفل الافتراضي (€)', type: 'number', initialValue: 150 }
          ]
        },

        // 6. سكشن الروابط الداخلية
        {
          type: 'object',
          name: 'internalLinksSection',
          title: 'Related Services / Internal Links (الروابط الداخلية)',
          fields: [
            createMultiLangField('sectionTitle', 'عنوان السكشن'),
            {
              name: 'pages',
              title: 'اختر الصفحات المرتبطة',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'flexiblePage' }] }]
            }
          ]
        }
      ]
    },
    // إعدادات الـ SEO
    {
      name: 'seo',
      title: 'SEO Settings (إعدادات محركات البحث)',
      type: 'object',
      fields: [
        createMultiLangField('metaTitle', 'عنوان الصفحة لمحركات البحث (Meta Title)'),
        createMultiLangField('metaDescription', 'وصف الصفحة لمحركات البحث (Meta Description)')
      ]
    }
  ],
  preview: {
    select: {
      title: 'pageTitle.en',
      subtitle: 'slug.current'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title || 'Untitled Page',
        subtitle: selection.subtitle ? `/${selection.subtitle}` : ''
      };
    }
  }
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [flexiblePage],
}