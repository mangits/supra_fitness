const path = require('path');
 
const seedFile = require('knex-seed-file');
 
exports.seed = function(knex, Promise) {

  let age = '49'
  let category = 'situps'
  let gender = 'males'

  let table = ''
  let fileTail = ''

  if (age === '24') {
    table = `${category}_${gender}_${age}_below`
  } else if (age === '60') {
    table = `${category}_${gender}_${age}_plus`
  } else {
    table = `${category}_${gender}_${age}`
  }

  if (category === 'pushups') {
    fileTail = 'push'
  } else if (category === 'situps') {
    fileTail = 'sit'
  } else {
    fileTail = 'run'
  }

  return knex(table).del()
    .then(() => seedFile(knex, path.resolve(`./csv_files/${gender.charAt(0)}${age}_${fileTail}.csv`), table,
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: [category, `${category}_points`]
    }));
};
