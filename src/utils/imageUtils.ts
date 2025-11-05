// Helper function to get project images with fallbacks
export const getProjectImage = (project: any, isDetailView: boolean = false) => {
  // For detail view, prefer detailImage, fallback to image
  if (isDetailView) {
    return project.detailImage || project.image || getImageFallback(project.id, true);
  }
  
  // For grid view, use regular image
  return project.image || getImageFallback(project.id, false);
};

// Check if project uses Lottie animation for detail view
export const isProjectLottie = (project: any, isDetailView: boolean = false) => {
  if (isDetailView && project.isLottie && project.detailImage?.endsWith('.json')) {
    return true;
  }
  return false;
};

// Fallback images based on project ID
const getImageFallback = (projectId: number, isRectangle: boolean = false) => {
  const prefix = isRectangle ? '/alt_' : '/';
  const suffix = isRectangle ? '-rectangle.png' : '.png';
  
  const fallbackMap = {
    1: `${prefix}seat${suffix}`,
    2: `${prefix}globe${suffix}`,
    3: `${prefix}meet${suffix}`,
    4: `${prefix}hand_gesture${suffix}`,
    5: `${prefix}crop${suffix}`,
    6: `${prefix}plant${suffix}`,
  };
  
  return fallbackMap[projectId as keyof typeof fallbackMap] || `${prefix}crop${suffix}`;
};