import Router from "express"
import filesController from "../controllers/filesController";

const fileRoutes = Router();

fileRoutes.post('/', filesController.createFolder)
fileRoutes.get('/', filesController.getFiles)

fileRoutes.get('/download', filesController.downloadFile)
fileRoutes.post('/upload', filesController.uploadFile)
//fileRoutes.patch('/:path', filesController.updateFile)
fileRoutes.delete('/', filesController.deleteFile)

export default fileRoutes