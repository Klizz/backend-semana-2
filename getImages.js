const fs = require('fs');
const path = require('path');

const imageFolder = path.join(__dirname, 'public/images');

export default () => {
    const items = fs.readdirSync(imageFolder);
    return items;
};