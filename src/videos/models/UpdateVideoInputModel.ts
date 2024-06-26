export type UpdateVideoInputModel = {
  title: string;
  author: string;
  minAgeRestriction?: null | number;
  canBeDownloaded?: boolean;
  publicationDate?: string;
  availableResolutions?: string[];
};
