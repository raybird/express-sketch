import api from './api';
import express from 'express';

const {
    PORT = 3000
} = process.env;

const app = express();

app.use('/api/v1', api);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('server started at http://localhost:' + PORT);
    });
}

export default app;