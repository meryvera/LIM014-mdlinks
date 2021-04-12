/* eslint-disable no-unused-expressions */
/* eslint-disable no-new */
/* eslint-disable no-console */
/* eslint-disable max-len */
// Básicamente le dice al sistema que esto no es un script de shell y que debe usar un intérprete diferente.
// Este es un archivo binario y es importnate mantener delgado el archivo binario, su unico proposito es invocar a la funcion
const chalk = require('chalk');

// ESTO VIENE CON EL OTRO
const {
  convertToAbsolutePathM,
  pathExistsM,
  isDirectoryM,
  pathExtensionM,
  recursividadM,
  extractLinksArrayM,
  validateStatusM,
} = require('./functions');

const mdLinks = (filepath, options) => new Promise((resolve, reject) => {
  const absolutePath = convertToAbsolutePathM(filepath);
  const existsPath = pathExistsM(absolutePath); // booleano

  const errorr = '✖ La ruta no existe';
  const absoluteExists = existsPath ? absolutePath : reject(chalk.bgRed(errorr));
  // console.log('La ruta es absoluta y esxite L27 ', chalk.green(absoluteExists));

  const isDirectory = isDirectoryM(absoluteExists)
    ? isDirectoryM(absoluteExists)
    : console.log(chalk.magenta('Analizando file ingresado:')); // isDirectory -> booleano
    // console.log('es directorio linea 32 ', chalk.green(isDirectory)); // Retorna la ruta absoluta y existente del DIRECTORIO
  const pathExtension = pathExtensionM(absoluteExists);// console.log('linea 34 ', pathExtension); // .md

  let arrayMarkdownsM = [];
  if (isDirectory) {
    arrayMarkdownsM = recursividadM(absoluteExists); // esta recursividad me retorna 1 array de archivos md en string
  } else {
    arrayMarkdownsM = pathExtension === '.md'
      ? [absoluteExists]
      : chalk.red('No es markdown, ni directorio');
  }

  if (!options || options.validate === false || options === '') {
    const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM); // se extrae 1 array de objetos x cada link
    resolve(arrayDeObjetosLinks); // este test si pasa xqe no tiene console.log este return
  }
  const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM);

  const promiseObjectArray = [];// aca ahora se guarda array de objetos + status
  arrayDeObjetosLinks.forEach((objeto) => {
    promiseObjectArray.push(validateStatusM(objeto));
  });
  // console.log('linea 62', promiseObjectArray); // Promise {<pending>}, --> 1 x cada link
  const promiseArrayDeObjetosLinksStatus = Promise.all(promiseObjectArray).then(
    (result) => result,
  );
  resolve(promiseArrayDeObjetosLinksStatus);
});

module.exports = mdLinks;
// OPCIONES DE MIS PARAMETROS:
// mdLinks('./PruebasLinks', '').then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks').then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks', { validate: false }).then((res) => console.log(res))
// .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dir/README2.md', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dir/dir2').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir/dir2').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir/dir2', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir/dir2', { validate: false }).then((res) => console.log(res))
// .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dir', '').then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir', { validate: false }).then((res) => console.log(res))
// .catch(console.error); // Milu

// mdLinks('./README1.md', '').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./README1.md').then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./README1.md', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./README1.md', { validate: false }).then((res) => console.log(res))
// .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dirFail/README404.md', '').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dirFail/README404.md', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dirFail/README404.md', { validate: false }).then((res) => console.log(res))
// .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dirFail/READMERR.md', '').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dirFail/READMERR.md').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dirFail/READMERR.md', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dirFail/READMERR.md', { validate: false }).then((res) => console.log(res))
// .catch(console.error); // Milu

// mdLinks('./RUTANOEXISTE.md', { validate: true }).then((res) => console.log(res))
// // .catch((err) => console.error(err)); // Mai
//   .catch(console.error); // Milu
