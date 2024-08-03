import ReactDOM from 'react-dom/client';
import { JdAppViewWrapper } from './views/jdAppView/jdAppViewWrapper';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <JdAppViewWrapper />
    </React.StrictMode>,
);
