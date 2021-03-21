#!/usr/bin/env node
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
  extractLinksM,

} = require('./md-links');

const mdLinks = (filepath, options) => {
  const absolutePath = convertToAbsolutePathM(filepath);
  const existsPath = pathExistsM(filepath);

  const absoluteExists = (existsPath) ? absolutePath : 'La ruta no existe'; // para este error usar trycatch
  console.log(`La ruta es absoluta y esxite: ${absoluteExists}`);

  const isDirectory = isDirectoryM(absolutePath);
  console.log('es directorio linea 26 ', isDirectory); // true

  let arrayMarkdownsM = [];
  if (isDirectory) {
    arrayMarkdownsM = recursividadM(absolutePath);
    console.log('linea 34 ', arrayMarkdownsM); // [ 'README3.md', 'README4.md' ]
  } else {
    const pathExtension = pathExtensionM(filepath);
    const extractLinks = (pathExtension === '.md') ? (chalk.cyan(extractLinksM(filepath))) : (chalk.red('No es markdown'));
    console.log('linea 41 ', extractLinks);
  }
  console.log('linea 40 ', arrayMarkdownsM);
  // arrayMarkdownsM.map((mdFile) => {
  //   console.log('linea 42 ', mdFile);
  //   console.log('linea 43', extractLinksM(mdFile));
  // });
};
mdLinks('./src/dir/dir2', '');
