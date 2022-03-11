import { useEffect } from 'react';

const ESCAPE_CODE = 'Escape';
const ENTER_CODE = 'Enter';

export const useKeyDown = (checkKeyCode: (e: KeyboardEvent) => boolean, handler: (e: KeyboardEvent) => void) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (checkKeyCode(e)) {
                handler(e);
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => document.removeEventListener('keydown', handleEscape);
    }, [handler, checkKeyCode]);
};

export const useOnEscape = (handler: (e: KeyboardEvent) => void) =>
    useKeyDown((e) => e.code === ESCAPE_CODE, handler);


export const useOnCtrlEnter = (handler: (e: KeyboardEvent) => void) =>
    useKeyDown((e) => e.code === ENTER_CODE && (e.ctrlKey || e.metaKey), handler);
