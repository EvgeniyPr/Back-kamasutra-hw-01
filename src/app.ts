import express from "express";
import cors from "cors";
import path from "path";
import favicon from "serve-favicon";
import { SETTINGS } from "./settings/settings";
import { videoRouter } from "./routers/videoRouter";
import { db } from "./db/db";
import { HTTP_STATUSES } from "./settings/HTTP_STATUSES/HTTP_STATUSES";
import { blogsRouter } from "./routers/blogsRouter";
import { postsRouter } from "./routers/postsRouter";
import { blogCollection, connectToDb, postCollection } from "./db/mongo-db";
import { getUrl } from "./utils/getTestUrl";

export const app = express();

app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(SETTINGS.PASS.VIDEO, videoRouter);
app.use(SETTINGS.PASS.BLOGS, blogsRouter);
app.use(SETTINGS.PASS.POSTS, postsRouter);

app.delete("/testing/all-data", async (req, res) => {
  blogCollection.deleteMany({});
  postCollection.deleteMany({});
  // db.videos = [];

  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
});
