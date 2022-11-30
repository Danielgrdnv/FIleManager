import {useCallback} from "react";
import {toast} from "react-toastify";
import {t} from "i18next";

export const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => toast.success(t('common.text_copied')))
}