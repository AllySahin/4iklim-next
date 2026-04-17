import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { volunteerSchema } from '@/lib/validations';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const volunteers = await prisma.volunteer.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(volunteers);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = volunteerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const volunteer = await prisma.volunteer.create({ data: parsed.data });
  return NextResponse.json(volunteer, { status: 201 });
}
