const { getDataFromCsv, pascalInize, toTypescriptFile } = require('./utils')

const ATTRS = [
    ['Weapon Handling', 8],
    ['Critical Hit Chance', 6],
    ['Critical Hit Damage', 12],
    ['Headshot Damage', 10],
    ['Armor Regeneration', 4925],
    ['Hazard Protection', 10],
    ['Health', 18935],
    ['Explosive Resistance', 10],
    ['Skill Damage', 10],
    ['Repair Skills', 20],
    ['Skill Haste', 12],
    ['Status Effects', 10],
    ['Damage to TOC', 8],
    ['Damage to Armor', 8],
    ['Scanner Pulse Haste', 100],
    ['Health Damage', 10],
    ['Headshot Damage ', 20],
    ['Melee Damage', 500],
    ['Armor on Kill %', 10],
    ['Skill Health', 10],
    ['Status Effects ', 15],
    ['Shield Health', 50],
    ['Ammo Capacity', 20],
    ['Armor Regeneration %', 1],
    ['Critical Hit Chance', 6],
    ['Critical Hit Damage', 12],
    ['Skill Haste', 12],
    ['Skill Damage', 10],
    ['Explosive Resistance', 10],
    ['Armor Regeneration', 4925],
    ['Repair Skills', 20],
    ['Weapon Handling', 8],
    ['Headshot Damage', 10],
    ['Status Effects', 10],
    ['Hazard Protection', 10],
    ['Health', 18935],
    ['Pistol Damage', 9],
    ['Skill Efficiency', 10],
    ['Stability', 10],
    ['Accuracy', 10],
    ['Incoming Repairs', 20],
]

const Stats = {};

function convertGearAttr() {
    ATTRS.forEach((attr) => {
        // Stats[pascalInize(attr[0])] = {
        //     max: attr[1]
        // }
        Stats[pascalInize(attr[0])] = true
    })

    console.log(Stats)

    return Stats;
}

module.exports = { convertGearAttr };