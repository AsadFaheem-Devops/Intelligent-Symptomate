var express = require('express');
var multer = require('multer');
var router = express.Router();
router.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, 'images/' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')

router.post('/skincancer', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(req.file);
  });
});

module.exports = router;
