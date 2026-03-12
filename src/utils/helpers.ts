export const generateProjectImages = (folderName: string, imageCount: number): string[] => {
  return Array.from({ length: imageCount }, (_, i) => `/projects/${folderName}/image${i + 1}.png`)
}