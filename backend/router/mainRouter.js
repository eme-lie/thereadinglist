import {
  createReadingListItem,
  getReadingListItems,
  updateReadingListItem,
  deleteReadingListItem,
  getReadingListItem,
} from "../controller/mainController.js";

import { Router } from "express";

const router = Router();

router.post("/", createReadingListItem);

router.get("/", getReadingListItems);

router.get("/:id", getReadingListItem);

router.delete("/:id", deleteReadingListItem);

router.patch("/:id", updateReadingListItem);

export default router;
