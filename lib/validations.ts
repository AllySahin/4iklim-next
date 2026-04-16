import { z } from 'zod';

export const slideSchema = z.object({
  image: z.string().min(1, 'Görsel gerekli'),
  title: z.string().min(1, 'Başlık gerekli'),
  subtitle: z.string().min(1, 'Alt başlık gerekli'),
  description: z.string().min(1, 'Açıklama gerekli'),
  ctaText: z.string().min(1, 'Buton metni gerekli'),
  ctaLink: z.string().min(1, 'Buton linki gerekli'),
  order: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
});

export const projectSchema = z.object({
  slug: z.string().min(1, 'Slug gerekli'),
  image: z.string().min(1, 'Görsel gerekli'),
  category: z.string().min(1, 'Kategori gerekli'),
  categoryColor: z.string().min(1, 'Kategori rengi gerekli'),
  title: z.string().min(1, 'Başlık gerekli'),
  status: z.string().min(1, 'Durum gerekli'),
  location: z.string().min(1, 'Konum gerekli'),
  target: z.string().min(1, 'Hedef gerekli'),
  reached: z.string().default(''),
  percent: z.number().int().min(0).max(100).default(0),
  description: z.string().min(1, 'Açıklama gerekli'),
  isActive: z.boolean().default(true),
});

export const gallerySchema = z.object({
  src: z.string().min(1, 'Görsel gerekli'),
  category: z.string().min(1, 'Kategori gerekli'),
  title: z.string().min(1, 'Başlık gerekli'),
  location: z.string().min(1, 'Konum gerekli'),
  span: z.string().default(''),
  order: z.number().int().min(0).default(0),
});

export const volunteerSchema = z.object({
  fullName: z.string().min(1, 'Ad soyad gerekli'),
  phone: z.string().min(1, 'Telefon gerekli'),
  email: z.string().email('Geçerli e-posta giriniz'),
  ageGroup: z.string().default(''),
  area: z.string().min(1, 'Gönüllü alanı gerekli'),
  availability: z.string().default(''),
  travel: z.string().default(''),
  note: z.string().default(''),
  kvkkConsent: z.boolean().refine((v) => v === true, 'KVKK onayı gerekli'),
});
