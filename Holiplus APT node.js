var unirest = require("unirest");

var req = unirest("GET", "https://holiplus.p.rapidapi.com/cars/request.json");

req.query({
	"destination": "<REQUIRED>",
	"pickup": "<REQUIRED>",
	"dropoff": "<REQUIRED>",
	"page": "1"
});

req.headers({
	"x-rapidapi-key": "ea333215bemsh252cfa7f3684804p14f945jsna2c17e6960b4",
	"x-rapidapi-host": "holiplus.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
