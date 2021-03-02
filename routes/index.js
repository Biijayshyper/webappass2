var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/Aboutme', function(req, res, next) {
  res.render('Aboutme', { title: 'About' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' });
});

/* GET Login page. */
router.get('/Login', function(req, res, next) {
  res.render('Login', { title: 'Login' });
});

/* GET Login page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* GET Business Contact page. 
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'contacts' });
});*/



module.exports = router;
