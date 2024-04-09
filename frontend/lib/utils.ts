import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleImageInputChange = async (
  event: React.ChangeEvent<HTMLInputElement>
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const file = event.target.files![0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
};

