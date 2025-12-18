import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// GET: optional filter by pageKey
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageKey = searchParams.get("pageKey");

  const courses = await prisma.course.findMany({
    where: pageKey ? { pageKey } : undefined,
    orderBy: { createdAt: "desc" },
  });

  const parsedCourses = courses.map(c => ({
    ...c,
    features: JSON.parse(c.features),
  }));

  return NextResponse.json(parsedCourses);
}

// POST: create new course
export async function POST(req: Request) {
  const body = await req.json();

  const course = await prisma.course.create({
    data: {
      pageKey: body.pageKey,
      title: body.title,
      category: body.category,
      age: body.age,
      description: body.description,
      themeKey: body.themeKey,
      popular: body.popular || false,
      features: JSON.stringify(body.features || []),
    },
  });

  return NextResponse.json(course, { status: 201 });
}
