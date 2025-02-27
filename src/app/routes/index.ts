import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { ServiceRoute } from "../modules/Service/service.route";
import { CourseRoute } from "../modules/Course/course.route";
import { SoftwareRoutes } from "../modules/Software/software.route";
import { CurriculumRoutes } from "../modules/CourseCurriculum/courseCurriculum.route";
import { ScheduleRoutes } from "../modules/Schedule/schedule.route";
import { BatchRoutes } from "../modules/Batch/batch.route";

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
    path: "/software",
    route: SoftwareRoutes,
  },
  {
    path: "/curriculum",
    route: CurriculumRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },
  {
    path: "/batch",
    route: BatchRoutes,
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
