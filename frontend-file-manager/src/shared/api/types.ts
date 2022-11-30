export type Method = 'get' | 'delete' | 'post' | 'put';
export type ResponseType =
    | 'text'
    | 'json'
    | 'formData'
    | 'blob'
    | 'arrayBuffer';

export interface HttpRequestOptions extends Omit<RequestInit, 'body'> {
    url: string;
    method: Method;
    data?: any;
    responseType?: ResponseType;
}



export interface IRequestData<T = any> {
    data: T
    // toast?: TypeToast
}

export interface IRequestIdData<T = any> {
    id: number
    data: T
    // toast?: TypeToast
}

export interface IRequestId {
    id: number
    // toast?: TypeToast
}

export interface IRequestFormData extends IRequestData<{
    image: FormData
}> {
}
