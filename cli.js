#!/usr/bin/env node cli
const chalk = require('chalk');
const mdlinks = require('./index');

const argumentos = (process.argv);

console.log('linea 6 ', (process.argv).length);

const newPath = argumentos[3];
// const option = argumentos[4];
// const option2 = argumentos[5]; // --validate
// console.log('linea16 ', option2);
if (newPath && !argumentos[4]) {
  mdlinks(newPath).then((res) => console.log(res))
    .catch(console.error);
} else if (argumentos.includes('--validate') && argumentos.length === 5) {
  mdlinks(argumentos[3], { validate: true }).then((res) => {
    // eslint-disable-next-line max-len
    res.map((object) => console.log(chalk.green(newPath), chalk.cyan(object.href), chalk.magenta(object.StatusMessage), chalk.yellow(object.Status), chalk.blue(object.text)));
  })
    .catch(console.error);
} else if (argumentos.includes('--stats') && argumentos.length === 5) {
  mdlinks(argumentos[3], { validate: true }).then((res) => {
    // console.log('linea26 ', res); // me retorna promesa de array de objetos con status
    const arrayTotalLinks = [];
    res.forEach((objeto) => arrayTotalLinks.push(objeto.href));

    const objectUniqueValues = new Set(arrayTotalLinks); // me trae 1 objeto con todos los links
    // console.log('linea 31 ', objectUniqueValues);
    const arrayUniqueLinks = [...objectUniqueValues];// me trae 1 matriz con todos los links unicos
    // console.log('linea 33 ', arrayUniqueLinks);

    const totalLinks = arrayTotalLinks.length;
    const UniqueLinks = arrayUniqueLinks.length;
    // console.log('linea 51 ', UniqueLinks);
    return console.log(chalk.yellow(`Total links: ${totalLinks}\nUnique links: ${UniqueLinks}`));
  })
    .catch(console.error);
} else if (argumentos.length === 6 && argumentos.includes('--validate') && argumentos.includes('--stats')) {
  mdlinks(argumentos[3], { validate: true }).then((res) => { // res da promesa de array de objetos con status
    const arrayTotalLinks = [];
    res.forEach((objeto) => arrayTotalLinks.push(objeto.href));
    const totalLinks = arrayTotalLinks.length;

    const objectUniqueValues = new Set(arrayTotalLinks); // me trae 1 objeto con todos los links unicos
    const arrayUniqueLinks = [...objectUniqueValues]; // me trae 1 array con todos los links unicos
    const UniqueLinks = arrayUniqueLinks.length; // me da la cantidad de links unicos (valor number)

    const arrayStatusLinks = res.map((objeto) => objeto.Status);
    // console.log('linea 54 ', arrayStatusLinks); // [200, 200, 200, 401]
    const arrayBrokenLinks = arrayStatusLinks.map((statusNumber) => {
      if (statusNumber === 200) {
        return 0;
      }
      return 1;
    });
    const reductor = (accumulator, currentValue) => accumulator + currentValue;
    const brokenLinks = arrayBrokenLinks.reduce(reductor);
    // console.log('linea61 ', brokenLinks);
    return console.log(chalk.cyan(`Total links: ${totalLinks}\nUnique links: ${UniqueLinks}\nBroken links: ${brokenLinks}`));
  })
    .catch(console.error);
}

// mdlinks(argumentos[3], { validate: true }).then((res) => console.log(res))
//   .catch((error) => error);
// console.log(argumentos[3]);

// mdlinks(argumentos[3], '').then((res) => console.log(res))
//   .catch((error) => error);
// console.log(argumentos[3]);

// apiJs(argumentos[3]).then((res) => console.log(res))
//   .catch((error) => error);
// console.log(argumentos[3]);

// if (argumentos.includes('--stats')) {
//   apiJs(argumentos[3]).then((res) => console.log(res))
//     .catch((error) => error);
//   // console.log(argumentos[3]);
// }
