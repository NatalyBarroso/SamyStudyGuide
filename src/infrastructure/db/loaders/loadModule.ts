import type { Unit } from "@/core/domain/entities/Unit"

export const loadModule = async (
  subject: string,
  grade: string,
  moduleId: string
): Promise<Unit[]> => {
  try {
    // Extrae solo el número de archivo correspondiente, por ejemplo: "1.3" => "3"
    // const moduleNumber  = parseInt(moduleId.split('.')[1]);
    const data = await import(
      `@/infrastructure/db/${subject}/${grade}/units/module${moduleId}`
    );
    return data[`module${moduleId}`] as Unit[];
  } catch (error) {
    console.error("Error loading module:", error);
    return [];
  }
};