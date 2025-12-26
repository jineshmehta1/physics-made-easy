import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// GET all courses (or filter by category if you want)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const courses = await prisma.course.findMany({
    where: category ? { category } : undefined,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(courses);
}

// POST create course
export async function POST(req: Request) {
  const body = await req.json();

  const course = await prisma.course.create({
    data: {
      title: body.title,
      category: body.category,
      level: body.level,
      price: body.price,
      image: body.image,
      description: body.description,
      features: body.features ?? [],
      slug: body.slug,
      popular: body.popular ?? false,
    },
  });

  return NextResponse.json(course, { status: 201 });
}
