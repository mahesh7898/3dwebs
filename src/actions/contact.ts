"use server";
import fs from "fs/promises";
import path from "path";

export async function submitContact(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const line = `Date: ${new Date().toISOString()}\nName: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nProject Type: ${data.type}\nBudget: ${data.budget}\nDetails: ${data.details}\n----------------------------------------\n\n`;
    
    // Store in notepad folder at the root of the project
    const dir = path.join(process.cwd(), "notepad_folder");
    await fs.mkdir(dir, { recursive: true });
    
    const filePath = path.join(dir, "leads.txt");
    await fs.appendFile(filePath, line);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to save lead:", error);
    return { success: false, error: "Failed to save data" };
  }
}
