const { Downloader } = require('../Module/downloader/downloader')
const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
Downloader('temp', url, 'test.png').then(console.log).catch(console.log)
