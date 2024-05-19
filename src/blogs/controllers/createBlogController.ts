import { Response } from "express";
import { RequestWithBody } from "../../models/RequestsModels";
import { HTTP_STATUSES } from "../../settings/HTTP_STATUSES/HTTP_STATUSES";
import { BlogInputModel } from "../models/BlogInputModel";
import { BlogOutputModel } from "../models/BlogOutputModel";
import { blogsRepository } from "../blogRepository";

export const createBlogController = async (
  req: RequestWithBody<BlogInputModel>,
  res: Response<BlogOutputModel>
) => {
  const newBlog = await blogsRepository.createBlog(req.body);
  res.status(HTTP_STATUSES.OK_200).json(newBlog);
};
