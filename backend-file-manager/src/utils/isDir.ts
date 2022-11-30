import fs from "fs";

const isDir = (path: string): boolean => {
    return fs.lstatSync(path).isDirectory() && fs.existsSync(path)
}

export default isDir