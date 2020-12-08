const request = require('request');

let headers = {
    'Authorization': 'yj {o_34bn8ghi3q}',
    'Content-Type': 'application/json'
};

let dataString = '{"long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" }';

var options = {
    url: 'https://api-ssl.bitly.com.v4.shorten',
    method: "POST",
    headers: headers,
    body: dataString
};

var callback = (error, response, body) => {
    if(!error && response.statusCode == 200) {
        console.log(body);
    }else{
        console.log(error);
    }
}

request(options, callback);