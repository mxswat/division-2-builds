const { convertGear } = require('./gear');
const { convertBrandsets } = require('./converBrandset');
const { convertGearAttr } = require('./gearAttributes');
const { convertGearTalents } = require('./convertGearTalents');

// const brandStats = convertBrandsets();
// const gearStats = convertGear();
// const gearAttr = convertGearAttr();
const GearTalents = convertGearTalents();

// console.log({
//     ...brandStats,
//     ...gearStats,
//     ...gearAttr
// })