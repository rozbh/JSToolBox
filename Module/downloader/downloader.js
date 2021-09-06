const { get } = require('https');
const { createWriteStream } = require('fs');
const { join } = require('path')

const Downloader = async (DlPath, url, name) => {
    return new Promise((resovle, reject) => {
        const file = createWriteStream(join(DlPath, name));
        get(url, function (response) {
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
module.exports = { Downloader }