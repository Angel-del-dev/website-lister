const fs = require('fs');
const file = './sites.json';

function find() {
    const rawData = fs.readFileSync(file);
    let jsonArray = JSON.parse(rawData);
    return jsonArray;
}

function append(newUrl) {
    newUrl["Url"] = newUrl["Url"].split("//")[1];

    let allPastSitesArray = find();
    allPastSitesArray.push(newUrl);

    let data = JSON.stringify(allPastSitesArray);
    fs.writeFileSync(file, data);
    
    return true;
}

function findOne(url) {

    const all = find();
    
    let selectUrl = "";

    all.forEach(el => {
        if(el.Url == url) {
            selectUrl = el.Url;
        }
    });

    if(selectUrl == "") {
        return null;
    }else {
        return selectUrl;
    }
}

module.exports = { find,append,findOne };