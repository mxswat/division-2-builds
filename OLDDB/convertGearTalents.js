const { getDataFromCsv, pascalInize, toTypescriptFile } = require('./utils')

function convertGearTalents() {
    const data = getDataFromCsv(`./GearTalents - GearTalents.csv`);

    const gearTalents = {}

    data.forEach((talent) => {
        gearTalents[pascalInize(talent.Talent)] = {
            slot: [talent.Slot]
        }
    })

    toTypescriptFile('GearTalents', gearTalents)
}

module.exports = { convertGearTalents };
