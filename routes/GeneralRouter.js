import express from "express";
import GeneralController from "../controllers/GeneralController.js";
import upload from "../lib/multer.js";
const GeneralRouter = express.Router();

GeneralRouter.use((req, res, next) => {
  next();
});

//GET
GeneralRouter.get("/search", GeneralController.searchItems);

GeneralRouter.get("/payTokens", GeneralController.getAllPayTokens);
GeneralRouter.get("/payToken", GeneralController.getPayTokenInfo);

//POST
GeneralRouter.post(
  "/uploadImg",
  upload.single("image"),
  GeneralController.uploadImg
);

GeneralRouter.post("/uploadJson", GeneralController.uploadJSONMetadata);

GeneralRouter.post("/updateEvents", GeneralController.updateEventsInfo);

export default GeneralRouter;
