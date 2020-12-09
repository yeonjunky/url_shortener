const express = require('express');
const app = express();
const router = express.Router();
app.use(express.static('public'));

const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient('836d0c4f8278585dbd8fb4b4635f76b230690a5c');

async function get_shorten_url() {
  const response = await bitly.shorten('https://www.google.com');
  console.log(`Your shortened bitlink is ${response.link}`);
  return response.link
}

router.get('/', function(req, res) {
    res.sendFile('public/index.html', {root:__dirname});
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at port 3000\nhttp://localhost:3000');