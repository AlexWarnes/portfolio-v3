export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  repoURL: string;
  prodURL: string;
  tags: string[];
  thumbnailURL: string;
  thumbnailSizes: {
    mobileWidth: number;
    mobileHeight: number;
    desktopWidth: number;
    desktopHeight: number;
  };
}
