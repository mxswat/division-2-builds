const { getDataFromCsv, sanitize, toPascalCase, toTypescriptFile } = require('./utils')

function convertGear() {
    const files = [
        'Backpack - Backpack.csv',
        'Chest - Chest.csv',
        'Gloves - Gloves.csv',
        'Holster - Holster.csv',
        'Kneepads - Kneepads.csv',
        'Mask - Mask.csv',
    ];

    const Gear = {}

    const StatsMap = {}

    files.forEach((file) => {
        const data = getDataFromCsv(`./${file}`);
        data.forEach((item) => {
            let itemName = toPascalCase(sanitize(item['Item Name']))
            const slotId = file.split(" ")[0];
            let gearItem = Gear[itemName];
            if (!gearItem) {
                gearItem = {}
            }

            // --------------
            gearItem.slot = gearItem.slot || []
            gearItem.slot = [
                ...gearItem.slot,
                slotId
            ]
            if (gearItem.slot.length === 6) {
                gearItem.isTemplate = true;
            }
            // -------------
            gearItem.brand = toPascalCase(sanitize(item.Brand))
            // -------------
            const talentID = item['Talent'].trim();
            if (talentID) {
                gearItem.talent = toPascalCase(sanitize(talentID))
            }
            // -------------
            gearItem.quality = toPascalCase(sanitize(item.Quality))
            if (gearItem.quality === 'Gearset' && (slotId == 'Chest' || slotId == 'Backpack')) {
                itemName = `${itemName}${slotId}`
            }
            gearItem.id = itemName;
            // --------------
            gearItem.coreAttribute = toPascalCase(sanitize(item.Core))
            gearItem.coreAttribute = gearItem.coreAttribute === 'A' ? '*' : gearItem.coreAttribute;
            // --------------
            const minorAttribute = toPascalCase(sanitize(item['Attribute 1'].trim()))
            gearItem.minorAttribute = minorAttribute === 'A' ? '*' : minorAttribute
            StatsMap[minorAttribute] = true;
            // --------------
            const minorAttribute2 = toPascalCase(sanitize(item['Attribute 2'].trim()))
            if (minorAttribute2) {
                gearItem.minorAttribute2 = minorAttribute2 === 'A' ? '*' : minorAttribute2
                StatsMap[minorAttribute2] = true;
            }
            // --------------
            Gear[itemName] = gearItem;
        })
    })

    const GearTemplates = [];
    const UniqueGear = [];

    for (const item of Object.values(Gear)) {
        let {
            id,
            brand,
            quality,
            slot,
            talent,
            coreAttribute,
            minorAttribute,
            minorAttribute2
        } = item

        const templateItem = {
            id,
            brand,
            quality,
            coreAttribute,
            minorAttribute,
            ...minorAttribute2 ? { minorAttribute2 } : {},
        }
        if (item.isTemplate) {
            GearTemplates.push(templateItem)
        } else {
            const uniqueItem = {
                ...templateItem,
                slot,
                ... !!talent ? { talent } : {},
                ... !!minorAttribute2 ? { minorAttribute2 } : {},
            }
            UniqueGear.push(uniqueItem);
        }
    }

    console.log(GearTemplates)
    console.log(UniqueGear)

    toTypescriptFile('GearTemplates', GearTemplates)
    toTypescriptFile('UniqueGear', UniqueGear)
}

module.exports = { convertGear };