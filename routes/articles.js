const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// routes
router.get('/index', ctrl.articles.index);
router.get('/:id', ctrl.articles.show);
router.post('/new', ctrl.articles.create);
router.put('/:id', ctrl.articles.update);
router.delete('/:id', ctrl.articles.destroy);

// exports
module.exports = router;