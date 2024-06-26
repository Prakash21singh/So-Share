import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  getUsersData,
  getAllUsers,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const routeConfig = function (app) {
  app.get("/api/v1/user/data", verifyJwt, getUsersData);
  app.get("/api/v1/user/getusers", verifyJwt, getAllUsers);
  app.post(
    "/api/v1/user/signup",
    upload.fields([
      {
        name: "avatar",
        maxCount: 1,
      },
      {
        name: "coverImg",
        maxCount: 1,
      },
    ]),
    registerUser
  );
  app.post("/api/v1/user/login", loginUser);
  app.post("/api/v1/user/logout", verifyJwt, logoutUser);
  app.post("/api/v1/user/refresh-token", refreshAccessToken);
};

export { routeConfig as User };
