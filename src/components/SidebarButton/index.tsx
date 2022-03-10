import { FC, SyntheticEvent } from 'react';
import cn from 'classnames';

import st from './styles.module.css';

interface Props {
    className?: string;
    isActive: boolean;
    value: number | string;
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const SidebarButton: FC<Props> = ({ className, isActive, value, onClick, children, disabled }) => {
    return (
        <button
            disabled={disabled}
            value={value}
            className={cn(st.channel, { [st.active]: isActive }, [className])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SidebarButton;
