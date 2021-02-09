import foxy from "./foxy.json";

function fox() {
    return foxy.url + Math.floor((Math.random() * foxy.length) + 1) + foxy.suffix;
}

function customfox(urls) {
    return urls[Math.floor((Math.random() * urls.length))];
}

export { fox, customfox };