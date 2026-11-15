import { type SchemaTypeDefinition } from 'sanity'

// 1. تعريف عناصر المحرر المتقدمة (النصوص + الجداول + الأكواد البرمجية داخل المقال)
const richTextElements = [
  { type: 'block' },
  {
    type: 'object',
    name: 'codeBlock',
    title: '💻 كود برمجي للعرض (Code Block)',
    fields: [
      {
        name: 'language',
        title: 'لغة الكود (Language)',
        type: 'string',
        options: {
          list: [
            { title: 'CSS', value: 'css' },
            { title: 'HTML', value: 'html' },
            { title: 'JavaScript / TypeScript', value: 'javascript' },
            { title: 'JSON', value: 'json' },
          ]
        },
        initialValue: 'css'
      },
      {
        name: 'code',
        title: 'اكتب أو الصق الكود هنا',
        type: 'text',
        rows: 8
      }
    ],
    preview: {
      select: { title: 'language', subtitle: 'code' },
      prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
        return {
          title: `💻 Code (${title?.toUpperCase() || 'CODE'})`,
          subtitle: subtitle || ''
        }
      }
    }
  },
  {
    type: 'object',
    name: 'customTable',
    title: '📊 جدول (Table)',
    fields: [
      {
        name: 'headers',
        title: 'عناوين الأعمدة (Table Headers)',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'أضف عناوين الأعمدة بالترتيب (اضغط Add item لكل عمود)'
      },
      {
        name: 'rows',
        title: 'صفوف الجدول (Table Rows)',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'row',
            title: 'صف (Row)',
            fields: [
              {
                name: 'cells',
                title: 'خلايا الصف (Cells)',
                type: 'array',
                of: [{ type: 'string' }],
                description: 'أضف محتوى كل خلية بنفس ترتيب الأعمدة'
              }
            ],
            preview: {
              select: { cells: 'cells' },
              prepare({ cells }: { cells?: string[] }) {
                return {
                  title: cells && cells.length > 0 ? cells.join(' | ') : 'صف فارغ'
                }
              }
            }
          }
        ]
      }
    ],
    preview: {
      select: { headers: 'headers' },
      prepare({ headers }: { headers?: string[] }) {
        return {
          title: '📊 جدول بيانات (Table)',
          subtitle: headers && headers.length > 0 ? headers.join(' | ') : 'بدون عناوين'
        }
      }
    }
  }
];

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
      ...(isArray ? { of: richTextElements } : {})
    },
    {
      name: 'en',
      title: 'English (EN)',
      type: isArray ? 'array' : 'string',
      ...(isArray ? { of: richTextElements } : {})
    }
  ]
});

// دالة مشتركة لأزرار الـ CTA والروابط للغتين
const createCtaFields = () => ([
  createMultiLangField('ctaText', 'نص زر الانتقال (CTA Text)'),
  createMultiLangField('ctaUrl', 'رابط زر الانتقال (URL)')
]);

// سكيما الصفحات المرنة (Page Builder الشاملة بكل الأقسام)
export const flexiblePage: SchemaTypeDefinition = {
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
        // 1. سكشن كود HTML كامل أو مخصص (عربي وإنجليزي)
        {
          type: 'object',
          name: 'rawHtmlSection',
          title: '💻 Custom HTML Section (بناء الصفحة أو القسم بكود HTML حر للغتين)',
          fields: [
            {
              name: 'sectionNote',
              title: 'اسم توضيحي للقسم (لك أنت في لوحة التحكم فقط)',
              type: 'string',
              initialValue: 'كود HTML مخصص'
            },
            {
              name: 'htmlAr',
              title: 'كود HTML للنسخة العربية (AR)',
              type: 'text',
              rows: 15,
              description: 'ضع كود HTML الكامل هنا (يدعم الجداول، التنسيقات، وأوسمة <style>) ليظهر في الصفحة العربية.'
            },
            {
              name: 'htmlEn',
              title: 'كود HTML للنسخة الإنجليزية (EN)',
              type: 'text',
              rows: 15,
              description: 'ضع كود HTML للنسخة الإنجليزية هنا ليظهر في رابط /en/.'
            }
          ],
          preview: {
            select: { title: 'sectionNote' },
            prepare({ title }: { title?: string }) {
              return {
                title: `💻 ${title || 'Custom HTML Section'}`,
                subtitle: 'كود HTML مباشر (عربي / إنجليزي)'
              }
            }
          }
        },

        // 2. سكشن الهيرو
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

        // 3. سكشن قسمين (Split Section)
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

        // 4. سكشن السلايدر المتحرك (Moving Slider / Marquee)
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

        // 5. سكشن شبكة الكروت (Grid Cards)
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
                    createMultiLangField('badgeText', 'نص الشارة المميزة على الكارت'),
                    {
                      name: 'badgeEmoji',
                      title: 'اختر أيقونة للشارة',
                      type: 'string',
                      options: {
                        list: [
                          { title: '🔥 الأكثر طلباً', value: '🔥' },
                          { title: '🏆 مستوى احترافي', value: '🏆' },
                          { title: '⭐ خدمة VIP', value: '⭐' },
                          { title: '🚀 سريع ومميز', value: '🚀' }
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

        // 6. سكشن جدول مقارنة مستقل (Table Section)
        {
          type: 'object',
          name: 'tableSection',
          title: '📊 Table Section (قسم جدول بيانات أو مقارنة)',
          fields: [
            createMultiLangField('sectionTitle', 'عنوان الجدول (اختياري)'),
            {
              name: 'headersAr',
              title: 'عناوين الأعمدة (عربي)',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'headersEn',
              title: 'عناوين الأعمدة (English)',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'rows',
              title: 'صفوف الجدول',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'tableRow',
                  title: 'صف',
                  fields: [
                    {
                      name: 'cellsAr',
                      title: 'خلايا الصف (عربي)',
                      type: 'array',
                      of: [{ type: 'string' }]
                    },
                    {
                      name: 'cellsEn',
                      title: 'خلايا الصف (English)',
                      type: 'array',
                      of: [{ type: 'string' }]
                    }
                  ],
                  preview: {
                    select: { cells: 'cellsAr' },
                    prepare({ cells }: { cells?: string[] }) {
                      return {
                        title: cells && cells.length > 0 ? cells.join(' | ') : 'صف فارغ'
                      }
                    }
                  }
                }
              ]
            }
          ]
        },

        // 7. سكشن الروابط الداخلية
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