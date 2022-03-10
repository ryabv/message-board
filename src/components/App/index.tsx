import { useState } from 'react';

import { useOnEscape } from '../../hooks/keyboard';
import Content from '../Content';
import Sidebar from '../Sidebar';

import st from './styles.module.css';

const App = () => {
    const [activeChanelId, setActiveChanelId] = useState<number | null>(null);

    useOnEscape(() => setActiveChanelId(null));

    return (
      <div className={st.container}>
          <div className={st.sidebarContainer}>
              <Sidebar
                  className={st.sidebar}
                  activeChanelId={activeChanelId}
                  setActiveChanelId={setActiveChanelId}
              />
          </div>

          <Content
              className={st.content}
              activeChanelId={activeChanelId}
          />
      </div>
    );
};

export default App;
