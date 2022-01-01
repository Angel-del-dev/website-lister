const express = require("express");
const app = express();

const path = require('path');
const root = path.dirname(require.main.filename);

const ShortUrl = require(root+'/shortUrl.js'); 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const shortUrl = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrl });
});

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.append({ 
        name: req.body.name,
        Url: req.body.fullUrl
     });
    res.redirect('/');
});

app.listen(process.env.PORT || 5000);
