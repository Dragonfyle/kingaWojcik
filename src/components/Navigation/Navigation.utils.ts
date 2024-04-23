import { CONFIG } from "$constants/config";

function copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
}

function showCopiedPopup(isModalVisible: boolean, setModalStateFn: React.Dispatch<React.SetStateAction<boolean>>) {
    if (isModalVisible) return;

    setModalStateFn(true);
    setTimeout(() => setModalStateFn(false), CONFIG.COPIED_TIMEOUT);
}

function handleEmailClick(isModalVisible: boolean, setModalStateFn: React.Dispatch<React.SetStateAction<boolean>>) {
    copyToClipboard(CONFIG.EMAIL);
    showCopiedPopup(isModalVisible, setModalStateFn);
}

export { handleEmailClick };
