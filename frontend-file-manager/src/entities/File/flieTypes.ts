export interface IFilesState {
    path: string;
    result: boolean;
    files: IFile[];
}

export interface IFile {
    title: string
    type: string
    size: number
    childCount: number | null
}