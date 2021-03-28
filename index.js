#!/usr/bin/env node
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

} = require('./md-links');

const mdLinks = (filepath, options) => {
  const absolutePath = convertToAbsolutePathM(filepath);
  const existsPath = pathExistsM(absolutePath); // booleano

  const absoluteExists = (existsPath) ? absolutePath : console.log(chalk.red('✖ La ruta no existe')); // para este error usar trycatch
  console.log('La ruta es absoluta y esxite L27 ', chalk.green(absoluteExists));

  const isDirectory = isDirectoryM(absoluteExists) ? isDirectoryM(absoluteExists) : console.log(chalk.yellow('No es directorio')); // isDirectory -> booleano
  // console.log('es directorio linea 32 ', chalk.green(isDirectory)); // Retorna la ruta absoluta y existente del DIRECTORIO
  const pathExtension = pathExtensionM(absoluteExists);
  // console.log('linea 34 ', pathExtension); // .md
  let arrayMarkdownsM = [];
  if (isDirectory) { // esto es true
    arrayMarkdownsM = recursividadM(absoluteExists); // esta recursividad me retorna 1 array de archivos md en string
    console.log('linea 38 ', arrayMarkdownsM); // array de .md absolutos -> [ 'README3.md', 'README4.md' ]
  } else {
    arrayMarkdownsM = (pathExtension === '.md') ? [absoluteExists] : (chalk.red('No es markdown, ni directorio'));
    // console.log('linea 41 ', arrayMarkdownsM); // retorna array de .md absoluto -> [ 'README1.md']
  }
  if (options === '' || options.validate === false) {
    const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM);// se extrae 1 array de objetos x cada link
    console.log('linea 45 ', arrayDeObjetosLinks);
    return arrayDeObjetosLinks;
  }
  console.log('Lleva options, true');
  const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM);
  // console.log('linea 45 ', arrayDeObjetosLinks);

  const promiseObjectArray = [];
  arrayDeObjetosLinks.forEach((objeto) => {
    promiseObjectArray.push(validateStatusM(objeto));
  });
  const arrayDeObjetosLinksStatus = Promise.all(promiseObjectArray).then((result) => console.log(result)); // SIEMPRE DEBE IR CON CONSOLE.LOG???
  return arrayDeObjetosLinksStatus;
};
// OPCIONES A TESTEAR:
// mdLinks('./PruebasLinks', ''); // 5 archivos .md
// mdLinks('./PruebasLinks', { validate: true }); // 5 archivos .md
// mdLinks('./PruebasLinks', { validate: false }); // 5 archivos .md
// mdLinks('./PruebasLinks/dir/dir2', '');
// mdLinks('./PruebasLinks/dir/dir2', { validate: true });
// mdLinks('./PruebasLinks/dir/dir2', { validate: false });
// mdLinks('./PruebasLinks/dir/README2.md', '');
// mdLinks('./PruebasLinks/dir/README2.md', { validate: true });
// mdLinks('./PruebasLinks/dir/README2.md', { validate: false });
// mdLinks('./README1.md', '');
// mdLinks('./README1.md', { validate: true });
// mdLinks('./README1.md', { validate: false });
