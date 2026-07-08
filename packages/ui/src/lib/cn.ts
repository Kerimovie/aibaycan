import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Şərti class-ları birləşdirir + Tailwind konfliktlərini həll edir */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
