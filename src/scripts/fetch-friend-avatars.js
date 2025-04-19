const fs = require('fs');
const https = require('https');
const path = require('path');
const avatars = require('../data/friends.json');

const outDir = path.join(__dirname, '../..', 'static/img/friends');
fs.mkdirSync(outDir, { recursive: true });

avatars.forEach(({ avatarUrl, avatarFile }) => {
    const dest = path.join(outDir, avatarFile);
    const file = fs.createWriteStream(dest);
    https.get(avatarUrl, (response) => {
        response.pipe(file);
        file.on('finish', () => file.close());
    });
});