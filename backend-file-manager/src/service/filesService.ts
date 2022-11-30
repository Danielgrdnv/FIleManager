import * as fs from "fs";
import FileDto, {IFileDto} from "../dtos/fileDto";
import FilesDto from "../dtos/filesDto";
import ApiError from "../exceptions/ApiError";

class FilesService {

    async createFile(path: string, title: string, file: IFileDto) {

        const filePath = path + '/' + title;
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath)
            return file
        } else {
            throw new ApiError(400, 'file exist')
        }
    }

    async getFiles(path: string, fullPath: string) {

        let files = fs.readdirSync(fullPath).map((item, index) => {
            const isDir = fs.lstatSync(fullPath + item).isDirectory();
            let count: number | undefined = undefined
            let size: number | undefined = undefined
            if (!isDir) {
                size = fs.statSync(fullPath + item).size;
            } else {
                let childFiles = fs.readdirSync(fullPath + '/' + item)
                count = childFiles.length
            }
            return new FileDto({
                title: item,
                type: isDir ? 'dir' : 'other',
                size: size,
                parent: null,
                path: '',
                childCount: count ?? null,
            })
        })
        return new FilesDto({
            files: files,
            path: path
        })
    }

    async deleteFile(path: string) {

        if (fs.lstatSync(path).isDirectory()) {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }

}

export default new FilesService()