import Router from "express";
import fileRoutes from "./filesRoutes";

const router = Router();

router.use('/files', fileRoutes)

export default router