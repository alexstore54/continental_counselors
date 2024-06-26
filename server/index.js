const config = require('./config/config');
const express = require('express');
const app = express();

const router = require('./src/api/router/router');
const ErrorMiddleware = require('./src/api/middleware/errorMiddleware');
const cors = require('cors');


app.use(cors({
    credentials: true,
    origin: config.server.ClientUrl
}));

app.use(express.json());
const PORT = config.server.PORT || 7123;

app.use('/api', router);

app.use(ErrorMiddleware);

// require('./src/tasks/scheduler');

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

    }catch(e){
        console.log(`Server error: ${e}`);

    }
}

start();
