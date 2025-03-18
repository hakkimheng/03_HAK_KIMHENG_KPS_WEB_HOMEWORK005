// app/actions.js
'use server';
import { redirect } from 'next/navigation';

export async function handleCategorySelection(formData) {
  const selectedCategory = formData.get('category');
  console.log('User selected:', selectedCategory);
  // Redirect to the same page with the category as a query param
  redirect(`/?category=${encodeURIComponent(selectedCategory)}`);
}