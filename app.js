var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://valuta.today/ukraine/USD/visa.html";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            kurs = $("span.rate-value");
        kurs.each(function(){
            console.log("Курс конвертации доллара при покупке " + $(this).html() + " VISA.");
        })
    }
});