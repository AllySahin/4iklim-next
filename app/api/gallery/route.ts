import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { gallerySchema } from '@/lib/validations';

export async function GET() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { order: 'asc' },
  });
  return NextResponse.json(images);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = gallerySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const image = await prisma.galleryImage.create({ data: parsed.data });
  return NextResponse.json(image, { status: 201 });
}
