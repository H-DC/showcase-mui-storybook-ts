import React from 'react';
import ReactDOM from 'react-dom/client';
import Grid from '@material-ui/core/grid';

import Original from './original';
import Target from './target';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Grid container>
            <Grid item xs={6} style={{ padding: '40px' }}>
                <Original />
            </Grid>
            <Grid item xs={6} style={{ padding: '40px' }}>
                <Target />
            </Grid>
        </Grid>
    </React.StrictMode>
);
