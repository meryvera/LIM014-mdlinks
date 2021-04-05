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
  // readDirectoryM,
  pathExtensionM,
  // readFileM,
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
  const pathExtension = pathExtensionM(absoluteExists);
  // console.log('linea 34 ', pathExtension); // .md
  let arrayMarkdownsM = [];
  if (isDirectory) {
    // esto es true
    arrayMarkdownsM = recursividadM(absoluteExists); // esta recursividad me retorna 1 array de archivos md en string
    // console.log('linea 38 ', arrayMarkdownsM); // array de .md absolutos -> [ 'README3.md', 'README4.md' ]
  } else {
    arrayMarkdownsM = pathExtension === '.md'
      ? [absoluteExists]
      : chalk.red('No es markdown, ni directorio');
    // console.log('linea 41 ', arrayMarkdownsM); // retorna array de .md absoluto -> [ 'README1.md']
  }

  if (!options || options.validate === false || options === '') {
    const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM); // se extrae 1 array de objetos x cada link
    // console.log('linea 47 ', arrayDeObjetosLinks);
    // return console.log(arrayDeObjetosLinks); // este retorno no va porqe el consolelog me corta el test
    resolve(arrayDeObjetosLinks); // este test si pasa xqe no tiene console.log este return
  }
  // console.log('Lleva options, true');
  const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM);
  // console.log('linea 53 ', arrayDeObjetosLinks);

  const promiseObjectArray = [];
  arrayDeObjetosLinks.forEach((objeto) => {
    promiseObjectArray.push(validateStatusM(objeto));
  });
  const arrayDeObjetosLinksStatus = Promise.all(promiseObjectArray).then(
    (result) => result,
  ); // SIEMPRE DEBE IR CON CONSOLE.LOG???
  resolve(arrayDeObjetosLinksStatus);
});

// OPCIONES DE MIS PARAMETROS:
// mdLinks('./PruebasLinks', '')
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks')
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks', { validate: true })
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks', { validate: false })
// .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dir/dir2', '')
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir/dir2')
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir/dir2', { validate: true })
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir/dir2', { validate: false })
// .catch(console.error); // Milu

// mdLinks('./PruebasLinks/dir', '')
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir')
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir', { validate: true })
// .catch(console.error); // Milu
// mdLinks('./PruebasLinks/dir', { validate: false })
// .catch(console.error); // Milu

// mdLinks('./README1.md', '').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./README1.md').then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./README1.md', { validate: true }).then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./README1.md', { validate: false })
// .catch(console.error); // Milu

// mdLinks('./README404.md', '')
// .catch(console.error); // Milu
// mdLinks('./README404.md', { validate: true }).then((res) => console.log(res))
//   .catch(console.error); // Milu
// mdLinks('./README404.md', { validate: false })
// .catch(console.error); // Milu

// mdLinks('./READMERR.md', '').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./READMERR.md').then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./READMERR.md', { validate: true }).then((res) => console.log(res))
// .catch(console.error); // Milu
// mdLinks('./READMERR.md', { validate: false })
// .catch(console.error); // Milu

// mdLinks('./RUTANOEXISTE.md', { validate: true }).then((res) => console.log(res))
// .catch((err) => console.error(err)); // Mai
// .catch(console.error); // Milu

module.exports = mdLinks;
