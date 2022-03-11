import { Dispatch, FC, SetStateAction, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { useWindowSize } from '../../hooks/browser';
import SidebarButton from '../SidebarButton';

import { useFetchChannels } from './hooks';
import st from './styles.module.css';

interface Props {
    className?: string;
    activeChanelId: number | null;
    setActiveChanelId: Dispatch<SetStateAction<number | null>>;
}

const Sidebar: FC<Props> = ({ className, activeChanelId, setActiveChanelId }) => {
    const channels = useFetchChannels();

    const [showChannels, setShowChannels] = useState(true);
    const { width } = useWindowSize();

    const isDesktop = width > 600;

    useEffect(() => {
        setShowChannels(isDesktop);
    }, [isDesktop]);

    const handleToggleMenu = useCallback(() => setShowChannels((val) => !val), []);

    const handleClick = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        if (!isDesktop) {
            setShowChannels(false);
        }

        setActiveChanelId(parseInt(e.currentTarget.value));
    }, [setActiveChanelId, isDesktop]);

    const getLinks = useCallback(() => channels.map(({ id, title }) => (
        <li key={id} className={st.linksItem}>
            <SidebarButton
                isActive={id === activeChanelId}
                value={id}
                onClick={handleClick}
            >
                {title}
            </SidebarButton>
        </li>
    )), [channels, handleClick, activeChanelId]);

    return (
        <aside className={cn(st.sidebar, [className])}>
            <div className={st.header}>
                <h1 className={st.logo}>
                    Message Board
                </h1>

                <button className={st.toggleBtn} onClick={handleToggleMenu}>
                    Menu
                </button>
            </div>

            <nav>
                <ul className={cn(st.linksList, { [st.show]: showChannels })}>
                    {getLinks()}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
