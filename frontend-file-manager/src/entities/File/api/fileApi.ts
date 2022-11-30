import type {AxiosPromise} from "axios";
import {apiInstance} from "shared/api/api";
import {ICreateFileApi, IDeleteFileApi, IDownloadFileApi, IGetFilesApi, IUploadFileApi} from "./fileApiTypes";
import {IFile, IFilesState} from "../flieTypes";

const baseURL = '/files'

export const createFileApi = (body: ICreateFileApi): AxiosPromise<IFile> => {
    return apiInstance.post(`${baseURL}`, body);
};

export const getFilesApi = (params: IGetFilesApi): AxiosPromise<IFilesState> => {
    return apiInstance.get(`${baseURL}`, {params});
};

export const downloadFileApi = (params: IDownloadFileApi): AxiosPromise<IFile> => {
    const response = apiInstance.get(`${baseURL}/download`,
        {params, responseType: 'blob'});
    response.then(pld => {
        console.log(pld)
        const href = URL.createObjectURL(pld.data);
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', params.title);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    })
    return response
};

export const uploadFileApi = (obj: IUploadFileApi): AxiosPromise<IFilesState> => {
    return apiInstance.post(`${baseURL}/upload`, obj.body, {
        params: obj.params,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
};

export const deleteFileApi = (params: IDeleteFileApi): AxiosPromise<IFilesState> => {
    return apiInstance.delete(`${baseURL}`, {params});
};
