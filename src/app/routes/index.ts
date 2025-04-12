import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { ServiceRoute } from "../modules/Service/service.route";
import { CourseRoute } from "../modules/Course/course.route";
import { SoftwareRoutes } from "../modules/Software/software.route";
import { CurriculumRoutes } from "../modules/CourseCurriculum/courseCurriculum.route";
import { ScheduleRoutes } from "../modules/Schedule/schedule.route";
import { BatchRoutes } from "../modules/Batch/batch.route";
import { AssignStudentRoute } from "../modules/AssignStudent/assignStudent.route";
import { blogRoutes } from "../modules/Blog/blog.route";
import { PromocodeRoute } from "../modules/PromoCode/promocode.route";
import { instructorRoutes } from "../modules/UInstructor/instructor.route";
import { AuthInstructorRoutes } from "../modules/AuthInstructor/authInstructor.route";
import { ForgetPasswordInstructorRoute } from "../modules/ForgetPasswordInstructor/forgetPasswordInstructor.route";
import { ForgetPasswordRoute } from "../modules/ForgetPassword/forgetPassword.route";
import { PeopleRoute } from "../modules/OurPeople/OurPeople.route";

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
    path: "/assign",
    route: AssignStudentRoute,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
  {
    path: "/promo",
    route: PromocodeRoute,
  },
  {
    path: "/people",
    route: PeopleRoute,
  },
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/i-auth",
    route: instructorRoutes,
  },
  {
    path: "/login",
    route: AuthRoutes,
  },
  {
    path: "/i-login",
    route: AuthInstructorRoutes,
  },
  {
    path: "/forget-password",
    route: ForgetPasswordRoute,
  },
  {
    path: "/forget-password-ins",
    route: ForgetPasswordInstructorRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
