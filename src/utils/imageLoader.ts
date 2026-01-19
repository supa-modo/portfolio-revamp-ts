/**
 * Helper function to get image paths dynamically using Vite's asset handling
 * This prevents all images from being bundled into JavaScript at once
 * Images are loaded as separate assets only when needed
 */
export const getImagePath = (path: string): string => {
  // Use Vite's import.meta.url to resolve asset paths dynamically
  // This creates a URL that Vite can process without bundling into JS
  try {
    return new URL(`../assets/images/${path}`, import.meta.url).href;
  } catch {
    // Fallback for build-time resolution
    return `/src/assets/images/${path}`;
  }
};

/**
 * Get multiple image paths for a project
 */
export const getImagePaths = (paths: string[]): string[] => {
  return paths.map((path) => getImagePath(path));
};

/**
 * Lazy load an image - returns a promise that resolves when image is loaded
 * Works with both static imports (URLs) and dynamic paths
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // If image is already loaded in browser cache, resolve immediately
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => {
      // If preload fails, still resolve to prevent blocking
      // The image will load when actually displayed
      resolve();
    };
    img.src = src;
  });
};
