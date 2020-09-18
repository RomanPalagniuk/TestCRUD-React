const Koa = require('koa');
const koaBodyparser = require('koa-bodyparser');
const Router = require('@koa/router');
const cors = require('@koa/cors');

const dotenv = require('dotenv');
const router = require('./routes/router');

const app = new Koa();



dotenv.config({path: '../.env'});




  

app.use(koaBodyparser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(cors());










const PORT = process.env.BACKEND_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started! http://127.0.0.1:${PORT}`);
});