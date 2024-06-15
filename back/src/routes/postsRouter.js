const { Router } = require('express');
const express         = require('express');
const router = Router();
const upload = require('../config/multer');

router.post('/post/create', upload.single('file'), storePost);

module.exports = router;