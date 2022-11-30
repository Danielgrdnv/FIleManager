import {createEffect, createEvent, createStore, sample} from "effector";
import {ICreateFileApi, IDeleteFileApi, IDownloadFileApi, IGetFilesApi, IUploadFileApi} from "../api/fileApiTypes";
import {createFileApi, deleteFileApi, downloadFileApi, getFilesApi, uploadFileApi} from "../api/fileApi";
import {createMutation} from "shared/lib/utils/createMutation";
import {IFile, IFilesState} from "../flieTypes";
import {useStore} from "effector-react";

export const getFilesFx = createEffect(async (data: IGetFilesApi) => {
    const req = await getFilesApi(data)
    return req.data
});

export const createFileFx = createEffect(async (data: ICreateFileApi) => {
    const req = await createFileApi(data)
    return req.data
});

export const downloadFileFx = createEffect(async (data: IDownloadFileApi) => {
    const req = await downloadFileApi(data)
    return req.data
});

export const uploadFileFx = createEffect(async (data: IUploadFileApi) => {
    const req = await uploadFileApi(data)
    return req.data
});
export const deleteFileFx = createEffect(async (data: IDeleteFileApi) => {
    const req = await deleteFileApi(data)
    return req.data
});


export const changeAddPathEvent = createEvent<string>()
export const changeBackPathEvent = createEvent()
export const createFolderEvent = createEvent()
export const downloadFileEvent = createEvent<string>()
export const deleteFileEvent = createEvent<string>()
export const uploadFileEvent = createEvent<FormData>()

const initStore: IFilesState = {
    path: '',
    files: [],
    result: true
}

const $pathStack = createStore<string[]>([])
    .on(changeAddPathEvent, (state, payload) => [...state, payload])
    .on(changeBackPathEvent, (state) => state.slice(0, -1))

sample({
    clock: uploadFileEvent,
    source: $pathStack,
    fn: (path, file): IUploadFileApi => {
        return {
            body: file,
            params: {
                path: path.join('/'),
            }
        }
    },
    target: uploadFileFx
})

sample({
    clock: downloadFileEvent,
    source: $pathStack,
    fn: (path, title) => {
        return {
            path: path.join('/'),
            title: title
        }
    },
    target: downloadFileFx
})

sample({
    clock: deleteFileEvent,
    source: $pathStack,
    fn: (path, title) => {
        return {
            path: path.join('/'),
            title: title
        }
    },
    target: deleteFileFx
})

sample({
    clock: $pathStack,
    fn: (mas) => {
        return {path: mas.join('/')}
    },
    target: getFilesFx
})

sample({
    clock: $pathStack,
    fn: (mas) => {
        return {path: mas.join('/')}
    },
    target: getFilesFx
})

$pathStack.watch(pld => console.log(pld))

const $files = createStore(initStore)
    .on(getFilesFx.doneData, (state, payload) => payload)

export const getFilesMutation = () => createMutation<IGetFilesApi, IFilesState>(getFilesFx);
export const createFileMutation = () => createMutation<ICreateFileApi, IFile>(createFileFx);

export const filesStore = () => useStore($files)
export const currentPathStore = () => useStore($pathStack)
