import express from "express";
import {
  createCourseContent,
  deleteCourseContent,
  updateCourseContent,
  getAllCourseContent,
  getCourseContent,
  getSectionById,
  createSection,
  deleteSection,
  updateSection,
  getSection,
  getTopic,
  getTopicById,
  deleteTopic,
  updateTopic,
  addTopic,
  getLessonById,
  getAllLessons,
  deleteLesson,
  updateLesson,
} from "./Controllers/addCourseContentController.js";

const router = express.Router();

/**
 * CourseContentRoutes - for all the routes to do with course content
 *
 * NB. most of the get by id function might get changed to post request
 *  since one will be taking the id from the frontend and sending it back
 *  here.
 *
 */

//course content routes
router.post("/addCourseContent", createCourseContent);
router.delete("/deleteCourseContent", deleteCourseContent);
router.patch("/updateCourseContent", updateCourseContent);
router.get("/getAllCourseContent", getAllCourseContent);
router.get("/getCourseContent", getCourseContent);
router.get("/getSectionById", getSectionById);
router.post("/addSection", createSection);
router.delete("/deleteSection", deleteSection);
router.patch("/updateSection", updateSection);
router.post("/getSection", getSection);
router.get("/getTopic", getTopic);
router.get("/getTopicById", getTopicById);
router.delete("/deleteTopic", deleteTopic);
router.patch("/updateTopic", updateTopic);
router.post("/addTopic", addTopic);
router.get("/getLessonById", getLessonById);
router.get("/getAllLessons", getAllLessons);
router.delete("/deleteLesson", deleteLesson);
router.patch("/updateLesson", updateLesson);

export default router;
