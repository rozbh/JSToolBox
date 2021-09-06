const https = require('https');
const fs = require('fs');
module.exports.Downloader = async (url, name) => {
    return new Promise((resovle, reject) => {
        const file = fs.createWriteStream(`path/to/dir/${name}.jpg`);
        https.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function (cb) {
                file.close(cb);
                resovle(true)
            });
            file.on('error', function (err) {
                reject(err)
            });
        });
    })
}
