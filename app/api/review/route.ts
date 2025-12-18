import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// GET: Fetch reviews (Filtered by ?pageKey=...)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageKey = searchParams.get("pageKey");

  try {
    const reviews = await prisma.review.findMany({
      where: pageKey ? { pageKey } : {}, // 👈 Filter logic added here
      orderBy: { createdAt: 'desc' } 
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching reviews" }, { status: 500 });
  }
}

// POST: Create a new review (Saves pageKey)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate pageKey exists
    if (!body.pageKey) {
      return NextResponse.json({ error: "pageKey is required" }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: {
        pageKey: body.pageKey, // 👈 Save the key
        name: body.name,
        role: body.role,
        content: body.content,
        rating: Number(body.rating),
        date: new Date().toISOString().split('T')[0], // e.g. "2024-05-12"
      }
    });
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating review" }, { status: 500 });
  }
}