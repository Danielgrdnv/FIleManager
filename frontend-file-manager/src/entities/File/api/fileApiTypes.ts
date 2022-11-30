export interface IGetFilesApi {
    path?: string
}

export interface IDownloadFileApi extends IFileParams {
}

export interface ICreateFileApi extends IFileParams {
    type: string
}

export interface IUpdateFileApi {

}

export interface IDeleteFileApi extends IFileParams {

}

export interface IUploadFileApi {
    body: FormData
    params: {
        path?: string
    }
}

interface IFileParams {
    path?: string
    title: string
}
