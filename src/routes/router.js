
const Router = require('@koa/router');
const {getXs, getX, createX, updateX, deleteX } = require('../controllers/Xcontroller');

 const router = new Router();




router.get('/',getXs)
router.post('/',createX);



router.get('/:id',getX)
router.put('/:id',updateX)
router.delete('/:id',deleteX);


module.exports = router;