import express from "express";
import { OrderRoutes } from "../modules/order/order.route";
import { BookRoutes } from "../modules/book/book.route";
import { userRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { aboutRoutes } from "../modules/About/about.route";
import { ServiceRoute } from "../modules/Service/service.route";
import { CourseRoute } from "../modules/Course/course.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/service",
    route: ServiceRoute,
  },
  {
    path: "/course",
    route: CourseRoute,
  },
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/login",
    route: AuthRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
