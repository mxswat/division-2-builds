const { getDataFromCsv, pascalInize, toTypescriptFile } = require('./utils')
const util = require('util')
function convertBrandsets() {
    const data = getDataFromCsv(`./BrandSetBonuses - BrandSetBonuses.csv`);

    const Bonuses = {}

    const StatsMap = {}

    data.forEach((bonus) => {
        // console.log(bonus)
        const brandId = pascalInize(bonus.Brand.substring(0, bonus.Brand.length - 1));
        const bonusIdx = Number(bonus.Brand[bonus.Brand.length - 1]);
        const bonuses = Bonuses[brandId] = Bonuses[brandId] || new Array(3).fill([]);
        let talent = bonus.Talent ? bonus.Talent.split(/\n/)[0] : '';
        talent = talent.replace('Talent: ', '').trim();

        const statName = bonus.stat;
        const statName1 = bonus.stat1;

        bonuses[bonusIdx] = !!statName1
            ? [[pascalInize(statName), Number(bonus.val)], [pascalInize(statName1), Number(bonus.val1)]]
            : statName == 'Talent'
                ? [[pascalInize(talent), null]]
                : [[pascalInize(statName), Number(bonus.val)]]

        StatsMap[pascalInize(statName)] = true;
        if (!!statName1) {
            StatsMap[pascalInize(statName1)] = true;
        }
    })

    const out = util.inspect(Bonuses, false, null, false)
    console.log(out);

    toTypescriptFile('BrandsetBonuses', Bonuses)

    return StatsMap;
}

module.exports = { convertBrandsets };