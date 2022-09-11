import controller from "../controllers/books";
import validate from "../controllers/books/books.validate";
import express from "express";
const router = express.Router();
import trimRequest from "trim-request";

/*
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  "/",
  trimRequest.all,
  controller.getItems
);

/*
 * Create new item route
 */
router.post(
  "/",
  trimRequest.all,
  validate.createItem,
  controller.createItem
);

/*
 * Get item route
 */
router.get(
  "/:id",
  trimRequest.all,
  validate.getItem,
  controller.getItem
);

/*
 * Update item route
 */
router.patch(
  "/:id",
  trimRequest.all,
  validate.updateItem,
  controller.updateItem
);

/*
 * Delete item route
 */
router.delete(
  "/:id",
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
);

module.exports = router;
