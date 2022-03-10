import {FC, useCallback, useEffect, useLayoutEffect} from 'react';
import cn from 'classnames';

import st from './styles.module.css';
import {useAppSelector} from "../../hooks/redux";
import {channelByIdSelector} from "../../store/selectors/channels";
import SendForm from "../SendForm";
import {scrollToPageBottom} from "../../utils/dom";

interface Props {
    className?: string;
    activeChanelId: number | null;
}

const MESSAGES = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...'
    },
]

const Content: FC<Props> = ({ className, activeChanelId }) => {
    const channel = useAppSelector(channelByIdSelector(activeChanelId));

    useLayoutEffect(() => {
        scrollToPageBottom();
    }, [channel?.messages]);

    const getMessages = useCallback(() => channel?.messages.map(({ id, text }) => (
        <div key={id} className={st.message}>
            {text}
        </div>
    )), [channel]);

    return (
        <main className={cn(st.content, className)}>
            {!activeChanelId && (
                <p className={st.noChannel}>
                    Choose a channel on the left panel
                </p>
            )}

            {activeChanelId && (
                <>
                    <div className={st.messages}>
                        <h2 className={st.title}>
                            {channel?.title}
                        </h2>

                        {getMessages()}
                    </div>

                    <SendForm
                        className={st.form}
                        activeChannelId={activeChanelId}
                    />
                </>
            )}
        </main>
    )
};

export default Content;
