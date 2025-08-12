import express from "express";
const router = express.Router();

import {
  adminGetAllUser,
  adminUpdateRole,
  getUserFromToken,
  recoverPassword,
  resetPassword,
  sendVerificationToken,
  signin,
  signup,
  updatePassword,
  updateProfile,
  verifyAccount,
} from "../controllers/auth.controller.js";
import {
  findAdminById,
  findUserById,
  isAdmin,
  isAuthenticate,
  isAuthenticateAdmin,
  isSignin,
} from "../middlewares/auth.middleware.js";

router.param("userId", findUserById);
router.param("adminId", findAdminById);

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/user/verifyaccount", verifyAccount);
router.post(
  "/user/resend/verificationmail/:userId",
  isSignin,
  isAuthenticate,
  sendVerificationToken
);
router.get("/getuserfromtoken", isSignin, getUserFromToken);
router.post("/recover/password", recoverPassword);
router.post("/resetPassword/password", resetPassword);

router.put("/user/update/:userId", isSignin, isAuthenticate, updateProfile);
router.put(
  "/user/update/password/:userId",
  isSignin,
  isAuthenticate,
  updatePassword
);

// Admin route
router.get(
  "/admin/dashboard/:adminId/users",
  isSignin,
  isAuthenticateAdmin,
  isAdmin,
  adminGetAllUser
);

router.put(
  "/admin/dashboard/:adminId/users/:userId/update/role",
  isSignin,
  isAuthenticateAdmin,
  isAdmin,
  adminUpdateRole
);

export default router;
