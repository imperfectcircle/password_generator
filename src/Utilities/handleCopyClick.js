import clipboardCopy from 'clipboard-copy';

export const handleCopyClick = (inputRef) => {
    if (inputRef.current) {
        clipboardCopy(inputRef.current.value);
    }
};
