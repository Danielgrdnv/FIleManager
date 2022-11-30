export const convertToFormData = (e?: any): FormData | undefined => {
    if (!e.target.files) {
        return;
    }
    const file = e.target.files[0]
    const name = e.target.files[0].name
    const formData = new FormData();
    formData.append(name, file)
    return formData
}