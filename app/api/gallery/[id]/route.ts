import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// PUT: Update an image details
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const id = Number(params.id);

    const updatedItem = await prisma.galleryItem.update({
      where: { id },
      data: {
        pageKey: body.pageKey, // Allow updating the page/category
        category: body.category,
        type: body.type,
        src: body.src,
        title: body.title,
        location: body.location
      },
    });
    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update item" }, { status: 500 });
  }
}

// DELETE: Remove an image
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    
    await prisma.galleryItem.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
  }
}