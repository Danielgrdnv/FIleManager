import {IFileDto} from "./fileDto";

export interface IFilesDto {
    path: string;
    files: IFileDto[];
}

export default class FilesDto implements IFilesDto {
    path: string;
    files: IFileDto[];

    constructor(model: IFilesDto) {
        this.path = model.path;
        this.files = model.files
    }
}