import { InputVideoModel } from "../../models/videos-models/InputVideoModel";
import { APIErrorResult } from "../../models/videos-models/video-error-models/ErrorCreateVideoType";
import { Resolutions } from "../settings/resolutions";
import { resolutionIsNotValid } from "./resolutionIsNotValid";
import { stringIsNotValid } from "./stringIsNotValid";

export const inputValidation = (video: InputVideoModel) => {
  const errors: APIErrorResult = { errorsMessages: [] };
  if (stringIsNotValid(40, video.title)) {
    errors.errorsMessages.push({
      message: "Error!!!",
      field: "Not valid title",
    });
    return errors;
  }
  if (stringIsNotValid(20, video.author)) {
    errors.errorsMessages.push({
      message: "Error!!!",
      field: "Not valid author",
    });
    return errors;
  }
  if (resolutionIsNotValid(video.availableResolutions, Resolutions)) {
    errors.errorsMessages.push({
      message: "Error!!!",
      field: "Not valid resolution",
    });
    return errors;
  }
  return errors;
};
