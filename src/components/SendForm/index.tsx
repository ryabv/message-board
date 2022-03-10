import {ChangeEvent, FC, FormEvent, useCallback, useRef, useState} from 'react';
import cn from 'classnames';

import st from './styles.module.css';
import {actions} from "../../store/reducers/channelsSlice";
import {useAppDispatch} from "../../hooks/redux";
import {useOnCtrlEnter} from "../../hooks/keyboard";

interface Props {
    className?: string;
    activeChannelId: number | null;
}

const SendForm: FC<Props> = ({ className, activeChannelId }) => {
    const [text, setText] = useState('');
    const submitButtonRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();

    useOnCtrlEnter(() => submitButtonRef.current?.click());

    const handleTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value);
    }, []);

    const handleSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (activeChannelId) {
            dispatch(actions.addMessage({ channelId: activeChannelId, text }));
            setText('');
        }
    }, [activeChannelId, text]);

    return (
        <form className={cn(st.form, [className])} onSubmit={handleSubmitForm}>
            <textarea
                className={st.textarea}
                value={text}
                onChange={handleTextChange}
            />

            <button
                ref={submitButtonRef}
                type="submit"
                disabled={!text}
                className={st.submitBtn}
            >
                Submit
            </button>

            <kbd>Ctrl + Enter</kbd>
        </form>
    );
};

export default SendForm;
