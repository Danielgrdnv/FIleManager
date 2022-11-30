export interface IFile {
    title: string
    type: string
    size?: number
    path?: string
    parent?: IFile
    child?: IFile[]
}

export default class File implements IFile {
    title: string
    type: string
    size: number
    path: string
    parent: IFile
    child: IFile[]
}