var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
router.post('/new', function(req, res, next) {
  const { user, text } = req.body;
  const date = new Date();
  messages.push({'user': user, 'text': text, 'added': date});
  res.redirect('/');
});

module.exports = router;
