const express = require('express');
const app = express();
const path = require('path');
const url = require('url');

function getBaseHref(path) {
  return path.replace('/', '').split('/')[0];
}

// serve all files from dist folder
app.use('*', function(req, res, next) {
  // if requesting a file
  if(req.baseUrl.match(/\./)) {
    let lang = 'en';
    if(req.header('referer')) {
      lang = getBaseHref(url.parse(req.header('referer')).path);
    }
    res.sendFile(path.resolve(`./dist/${lang}${req.baseUrl}`));
  } else {
    let lang = getBaseHref(req.baseUrl);
    if(lang) {
      res.sendFile(path.resolve(`./dist/${lang}/index.html`));
    } else {
      lang = req.acceptsLanguages('en', 'fr') || 'en';
      res.redirect(`/${lang}/`);
    }
  }
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

