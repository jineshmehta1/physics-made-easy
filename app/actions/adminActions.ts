'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

// Best practice: Use a global singleton for Prisma in dev to avoid connection limit errors
const globalForPrisma = global as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/* ==========================================================================
   COURSES
   ========================================================================== */

export async function addCourse(formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const level = formData.get('level') as string
  const price = formData.get('price') as string
  const image = formData.get('image') as string 
  const description = formData.get('description') as string
  const features = (formData.get('features') as string).split(',').map(f => f.trim())
  const slug = title.toLowerCase().replace(/ /g, '-')

  await prisma.course.create({
    data: { title, category, level, price, image, description, features, slug }
  })
  
  revalidatePath('/courses')
}

// ✅ NEW: Edit Course Function
export async function editCourse(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const level = formData.get('level') as string
  const price = formData.get('price') as string
  const description = formData.get('description') as string
  const features = (formData.get('features') as string).split(',').map(f => f.trim())
  
  // Only update image if a new one is provided
  const image = formData.get('image') as string
  const dataToUpdate: any = { title, category, level, price, description, features }
  if (image) dataToUpdate.image = image

  await prisma.course.update({
    where: { id },
    data: dataToUpdate
  })

  revalidatePath('/courses')
}

export async function getCourses() {
  return await prisma.course.findMany({ orderBy: { id: 'desc' } })
}

export async function deleteCourse(id: number) {
  await prisma.course.delete({ where: { id } })
  revalidatePath('/courses')
}

/* ==========================================================================
   GALLERY
   ========================================================================== */

export async function addGalleryImage(formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const src = formData.get('src') as string
  const description = formData.get('description') as string

  await prisma.galleryImage.create({
    data: { title, category, src, description }
  })

  revalidatePath('/gallery')
}

// ✅ NEW: Edit Gallery Function
export async function editGalleryImage(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  
  const src = formData.get('src') as string
  const dataToUpdate: any = { title, category, description }
  if (src) dataToUpdate.src = src

  await prisma.galleryImage.update({
    where: { id },
    data: dataToUpdate
  })

  revalidatePath('/gallery')
}

export async function getGalleryImages() {
  return await prisma.galleryImage.findMany({ orderBy: { id: 'desc' } })
}

export async function deleteGalleryImage(id: number) {
  await prisma.galleryImage.delete({ where: { id } })
  revalidatePath('/gallery')
}

/* ==========================================================================
   BLOGS
   ========================================================================== */

export async function addBlogPost(formData: FormData) {
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const image = formData.get('image') as string
  const category = formData.get('category') as string
  const readTime = formData.get('readTime') as string
  const content = formData.get('content') as string
  const slug = title.toLowerCase().replace(/ /g, '-')

  await prisma.blogPost.create({
    data: { title, excerpt, content, category, readTime, image, slug }
  })
  
  revalidatePath('/blog')
}

// ✅ NEW: Edit Blog Function
export async function editBlogPost(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const category = formData.get('category') as string
  const readTime = formData.get('readTime') as string
  const content = formData.get('content') as string
  
  const image = formData.get('image') as string
  const dataToUpdate: any = { title, excerpt, category, readTime, content }
  if (image) dataToUpdate.image = image

  await prisma.blogPost.update({
    where: { id },
    data: dataToUpdate
  })

  revalidatePath('/blog')
}

export async function getBlogPosts() {
  return await prisma.blogPost.findMany({ orderBy: { date: 'desc' } })
}

export async function deleteBlogPost(id: number) {
  await prisma.blogPost.delete({ where: { id } })
  revalidatePath('/blog')
}

// ... existing imports
// Add 'revalidatePath' if not already imported

// --- ENQUIRIES ---

// 1. Submit Enquiry (Public Action)
export async function submitEnquiry(formData: FormData) {
  const parentName = formData.get('parentName') as string;
  const studentName = formData.get('studentName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  await prisma.enquiry.create({
    data: {
      parentName,
      studentName,
      email,
      phone,
      subject,
      message,
      status: "New"
    }
  });

  // Revalidate admin page so the new query shows up immediately
  revalidatePath('/admin/enquiries');
}

// 2. Get Enquiries (Admin)
export async function getEnquiries() {
  return await prisma.enquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

// 3. Update Status/Notes (Admin)
export async function updateEnquiry(id: number, formData: FormData) {
  const status = formData.get('status') as string;
  const notes = formData.get('notes') as string;

  await prisma.enquiry.update({
    where: { id },
    data: { status, notes }
  });

  revalidatePath('/admin/enquiries');
}

// 4. Delete Enquiry (Admin)
export async function deleteEnquiry(id: number) {
  await prisma.enquiry.delete({ where: { id } });
  revalidatePath('/admin/enquiries');
}


// --- STUDY MATERIALS ---

export async function addStudyMaterial(formData: FormData) {
  const title = formData.get('title') as string;
  const type = formData.get('type') as string;
  const category = formData.get('category') as string;
  const link = formData.get('link') as string;

  await prisma.studyMaterial.create({
    data: { title, type, category, link }
  });
  
  revalidatePath('/study-materials');
  revalidatePath('/admin/materials');
}

export async function getStudyMaterials() {
  return await prisma.studyMaterial.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function deleteStudyMaterial(id: number) {
  await prisma.studyMaterial.delete({ where: { id } });
  revalidatePath('/study-materials');
  revalidatePath('/admin/materials');
}