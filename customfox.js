const { List } = require('enquirer');
const { customfox } = require('randomfox');

module.exports = (urls) => {
    if (urls.length != 0) {
        console.log(customfox(urls));
    } else {
        const prompt = new List({
            name: 'keywords',
            message: 'Type comma-separated keywords'
          });
           
          prompt.run()
            .then(answer => {
                console.log(customfox(answer))
            })
            .catch(console.error);
    }
}