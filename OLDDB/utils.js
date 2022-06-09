const fs = require('fs');
const util = require('util')
const Papa = require('papaparse')

function toTypescriptFile(name, data) {
    const out = util.inspect(data, false, null, false)
    const txt = `export const GearTemplates = ${out}`;
    fs.writeFileSync(`../src/database/${name}.ts`, txt, "utf8");
}

const illegalChars = /[\/\?<>\\:\*\|"]/g; // illegal Characters https://kb.acronis.com/content/39790
/** Based on https://stackoverflow.com/a/37511463/10300983 */
function sanitize(originalText) {
    return originalText.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z ]/g, "") // Removes stuff like & # $ %
        .replace(illegalChars, '')
}

/** Based on https://stackoverflow.com/a/37511463/10300983 */
function toPascalCase(str) {
    return str
        .replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substring(1).toLowerCase())
        .replace(/\s+/g, '')
}

function pascalInize(text) {
    return toPascalCase(sanitize(text))
}

function readFile(file) {
    let bufferData = fs.readFileSync(file)
    let stData = bufferData.toString()
    return stData
}

//var csv is the CSV file with headers
function csvJSON(csv) {
    return Papa.parse(csv, {delimiter: ",", header: true}).data;
}

function getDataFromCsv(file) {
    return csvJSON(readFile(file))
}

module.exports = {
    toTypescriptFile,
    sanitize,
    toPascalCase,
    getDataFromCsv,
    pascalInize
}
