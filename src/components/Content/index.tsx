import { FC, useCallback, useLayoutEffect } from 'react';
import cn from 'classnames';

import SendForm from '../SendForm';
import { scrollToPageBottom } from '../../utils/dom';

import { useFetchChannelData } from './hooks';
import st from './styles.module.css';

interface Props {
    className?: string;
    activeChanelId: number | null;
}

const Content: FC<Props> = ({ className, activeChanelId }) => {
    const channel = useFetchChannelData(activeChanelId);

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
