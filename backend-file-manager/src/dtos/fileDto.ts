export interface IFileDto {
    title: string
    type: string
    size?: number
    path?: string
    parent?: IFileDto | null
    child?: number
    childCount?: number
}

export default class FileDto implements IFileDto {
    title: string
    type: string
    size?: number
    path?: string
    parent?: IFileDto
    child?: number
    childCount?: number

    constructor(model: IFileDto) {
        this.title = model.title;
        this.type = model.type;
        this.size = model.size
        this.path = model.path
        this.parent = model.parent
        this.child = model.child
        this.childCount = model.childCount
    }
}