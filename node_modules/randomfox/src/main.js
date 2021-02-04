const foxy = require('./foxy.json');

module.exports = {
    fox() {
        return foxy.url + Math.floor((Math.random() * foxy.length) + 1) + foxy.suffix;
    },
    customfox(urls) {
        return urls[Math.floor((Math.random() * urls.length))];
    }
}