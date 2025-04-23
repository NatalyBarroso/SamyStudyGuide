/**
 * loadModule
 *
 * This asynchronous function dynamically loads a set of educational units for a specific module.
 * It uses dynamic `import()` to access the appropriate file based on subject, grade, and moduleId.
 *
 * @param subject - The subject name (e.g., "spanish", "math").
 * @param grade - The educational level (e.g., "primaria", "secundaria").
 * @param moduleId - The module ID to be loaded (e.g., "1", "2", "3"...).
 * @returns A promise that resolves to an array of `Unit[]`. If an error occurs, it returns an empty array.
 */

import type { Unit } from "@/core/domain/entities/Unit"

export const loadModule = async (
  subject: string,
  grade: string,
  moduleId: string
): Promise<Unit[]> => {
  try {

    // Dynamically import the module file based on the constructed path
    const data = await import(
      `@/infrastructure/db/${subject}/${grade}/units/module${moduleId}`
    );

    // Return the exported module content (an array of units)
    return data[`module${moduleId}`] as Unit[];
  } catch (error) {

    // If an error occurs during loading, log it and return an empty array
    console.error("Error loading module:", error);
    return [];
  }
};