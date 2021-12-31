const express = require("express");
const app = express();
const ShortUrl = require('./models/shortUrl.js'); 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const shortUrl = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrl });
});

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.append({ 
        name: req.body.name,
        Url: req.body.fullUrl,
        clicks : 0
     });
    res.redirect('/');
});

app.listen(process.env.PORT || 5000);
