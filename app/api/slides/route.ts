import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { slideSchema } from '@/lib/validations';

export async function GET() {
  const slides = await prisma.slide.findMany({
    orderBy: { order: 'asc' },
  });
  return NextResponse.json(slides);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = slideSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const slide = await prisma.slide.create({ data: parsed.data });
  return NextResponse.json(slide, { status: 201 });
}
