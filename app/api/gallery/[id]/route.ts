import { NextResponse } from "next/server";
import { prisma } from "@/lib/data";

// PUT: Update gallery image
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const id = Number(params.id);

    const updatedItem = await prisma.galleryImage.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        src: body.src,
      },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}

// DELETE: Remove gallery image
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    await prisma.galleryImage.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
