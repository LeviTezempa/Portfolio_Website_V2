import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/api/users").post(userCtrl.create);
router
  .route("/api/users/:userId")
  .get(authMiddleware, userCtrl.read)
  .put(authMiddleware, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authMiddleware, authCtrl.hasAuthorization, userCtrl.remove);
router.route("/api/users").get(userCtrl.list);
router.param("userId", userCtrl.userByID);
export default router;
