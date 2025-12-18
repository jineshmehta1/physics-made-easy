import { NextResponse } from "next/server";
import { prisma } from "@/lib/data"; 

// GET: Fetch images (Filtered by ?pageKey=...)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageKey = searchParams.get("pageKey");

  try {
    const items = await prisma.galleryItem.findMany({
      where: pageKey ? { pageKey } : {}, // 👈 Filter by pageKey if provided
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}

// POST: Create new image (Saves pageKey)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.pageKey) {
      return NextResponse.json({ error: "pageKey is required" }, { status: 400 });
    }

    const newItem = await prisma.galleryItem.create({
      data: {
        pageKey: body.pageKey, // 👈 Save the key
        category: body.category,
        type: body.type,
        src: body.src,
        title: body.title,
        location: body.location
      }
    });
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Gallery Create Error:", error);
    return NextResponse.json({ error: "Failed to create item" }, { status: 500 });
  }
}