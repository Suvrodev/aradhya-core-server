import express, { NextFunction, Request, Response } from "express";
import { PeopleController } from "./OurPeople.controller";

const router = express.Router();

router.post("/", PeopleController.addOurPeople);
router.get("/", PeopleController.getAllOurPeople);
router.get("/:peopleId", PeopleController.getSpecificOurPeople);
router.delete("/:peopleId", PeopleController.deleteOurPeople);
router.patch("/:peopleId", PeopleController.updateOurPeople);

export const PeopleRoute = router;
