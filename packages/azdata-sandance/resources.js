const path = require('path');
const fs = require('fs');

const resources = [
    "./node_modules/vega-lib/build/vega.js",
    "./node_modules/deck.gl/deckgl.min.js",
    "./node_modules/react/umd/react.production.min.js",
    "./node_modules/react-dom/umd/react-dom.production.min.js",
    "./node_modules/office-ui-fabric-react/dist/office-ui-fabric-react.js"
];

const errors = [];
const resourcesPath = 'resources';

if (!fs.existsSync(resourcesPath)) {
    fs.mkdirSync(resourcesPath);
}

resources.forEach(resource => {
    fs.copyFile(resource, path.resolve(resourcesPath, path.basename(resource)), err => errors.push({ err, resource }));
});

if (errors.length) {
    console.log(errors);
    process.exitCode = 1;
}