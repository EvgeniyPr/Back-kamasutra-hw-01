export type OutputVideoType = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: null | number;
  createdAt: string;
  publicationDate: string;
  availableResolutions: string[];
};
