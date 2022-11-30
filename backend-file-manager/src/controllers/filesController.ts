import isDir from "../utils/isDir";
import filesService from "../service/filesService";
import FileDto from "../dtos/fileDto";
import fs from "fs";

class FilesController {

    async createFolder(req, res, next) {
        try {
            const {title, type, path} = req.body
            const file = new FileDto({title, type, path})
            let fullPath = process.env.BASE_FILE + path
            const data = await filesService.createFile(fullPath, title, file)
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getFiles(req, res, next) {
        try {
            let path = '';
            if ('path' in req.query) {
                path = req.query.path;
            }
            let fullPath = process.env.BASE_FILE + path + '/'
            if (!isDir(fullPath)) {
                return res.status(400).json('error')
            }
            const data = await filesService.getFiles(path, fullPath)
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async readFile(req, res, next) {
        try {
            console.log('')
        } catch (e) {
            console.log(e)
        }
    }

    async updateFile(req, res, next) {
        try {
            console.log('')
        } catch (e) {
            console.log(e)
        }
    }

    async deleteFile(req, res, next) {
        try {
            const {title, path} = req.query
            let fullPath = process.env.BASE_FILE + path
            if (!fs.existsSync(fullPath + '/' + title)) {
                return res.status(400).json({message: "file doesn't exist"})
            }
            await filesService.deleteFile(fullPath + '/' + title)
            return res.json({message: 'success'})
        } catch (e) {
            console.log(e)
        }
    }

    async downloadFile(req, res, next) {
        try {
            const {title, path} = req.query
            let fullPath = process.env.BASE_FILE + path
            if (!fs.existsSync(fullPath + '/' + title)) {
                return res.status(400).json({message: "Download error"})
            }
            return res.download(fullPath + '/' + title)
        } catch (e) {
            console.log(e)
        }
    }

    async uploadFile(req, res, next) {
        try {
            const {path} = req.query
            let fullPath = process.env.BASE_FILE + path
            const file = req.files.file
            if (fs.existsSync(fullPath + '/' + file.name)) {
                return res.status(400).json({message: "file exist"})
            }
            file.mv(fullPath + '/' + file.name)
            return res.json('success')
        } catch (e) {
            console.log(e)
        }
    }

}

const filesController = new FilesController()

export default filesController