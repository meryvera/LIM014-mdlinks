/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const path = require('path'); // este modulo a traves de sus metodos nos permite manipular las rutas
const fs = require('fs'); // este modulo  a través de sus metodos nos permite trabajar los archivos del sistema opertaivo, este modulo es muy importante para cuando queramos crear modulos
const chalk = require('chalk');
const axios = require('axios');
// const markdownIt = require('markdown-it');
// const linkify = require('linkify-it')();// este modulo es para analizar el md y extraer links contenidos

// SE CONVIERTE A RUTA ABSOLUTA
const convertToAbsolutePathM = (filepath) => {
  if (path.isAbsolute(filepath)) {
    return filepath;
  }
  return path.resolve(filepath);
};
// convertToAbsolutePathM('./READMELAB.md');

// SE COMPRUEBA LA EXISTENCIA DE LA RUTA
const pathExistsM = (filepath2) => {
  const fileExists = fs.existsSync(filepath2);
  return fileExists; // booleano
};
// pathExistsM('hola');

// SE VERIFICA SI ES DIRECTORIO
const isDirectoryM = (dir) => {
  const stats = fs.statSync(dir);
  // console.log(dir);
  if (stats.isDirectory()) {
    return stats.isDirectory(); // booleano
  }
};
// isDirectoryM('./src'); // booleano

// SI ES FILE SE COMPRUEBA SI ES MARKDOWN
const pathExtensionM = (filepath4) => path.extname(filepath4); // .md
// pathExtensionM('./README.md');

// IDENTIFICAMOS A LOS ARCHIVOS QUE SON MD
// const mdPathExtensionM = (filepath6) => {
// pathExtensionM(filepath6) === '.md' ? filepath6 : 'no es md';
// mdPathExtensionM('./README.md');

// SE LEE EL ARCHIVO MARKDOWN
const readFileM = (filepath5) => {
  const dataFile = fs.readFileSync(filepath5, 'utf8');
  return dataFile;
};
// readFileM('./README2.md');

// SE LEE EL DIRECTORIO
const readDirectoryM = (dir) => {
  const dataDir = fs.readdirSync(dir, 'utf8');
  return dataDir; // array de datos strings dentro del directorio
};
// readDirectoryM('./src/img');

// FUNCIÓN RECURSIVIDAD - SE OBTIENE ARRAY DE ARCHIVOS .MD
const arrayMarkdowns = [];// este array si va adentro se va a blanquear en cada vuelta y solo carga lo ultimo y no el acumulado
const recursividadM = (dir) => {
  // console.log('linea 58 ', dir); // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\src
  // 2da pasada C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\src\img

  readDirectoryM(dir).forEach((element) => { // ['img', 'README2.md', 'READMELAB.md', temCodeRunnerFile.js']
    // console.log('linea 62 ', readDirectoryM(dir)); // 2da pasada: [ 'ExtLink.png', 'FLOWCHART-API.md', 'FLOWCHART-CLI.md' ]

    const dirAndDir = path.join(dir, element); // ./src/img
    // console.log('linea 65 ', dirAndDir);// me traer la ruta absoluta de cada elemento dentro de src y dentro de ing
    // const absolutaDirAndDir = convertToAbsolutePathM(dirAndDir); // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\src\img

    if (pathExtensionM(element) === '.md') {
      arrayMarkdowns.push(element);
    } else if (isDirectoryM(dirAndDir)) { // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\src\img --> TRUE
      recursividadM(dirAndDir);
    } else {
      // console.log(chalk.red('Es cualquier otro archivo, no directorio ni archivo .md'));
      (chalk.red('Es cualquier otro archivo, no directorio ni archivo .md'));
    }
  });
  return arrayMarkdowns;
};
// recursividadM('./src');

// OBTENEMOS TODOS LOS LINKS QUE HAYA EN 1 ARCHIVO .MD
const extractLinksM = (markdownFile) => {
  console.log('linea 86 ', markdownFile); // ./README1.md
  // const absolute = convertToAbsolutePathM(markdownFile);
  // console.log('linea 88 ', absolute);
  fs.readFile(markdownFile, 'utf-8', (error, data) => {
    if (error) {
      return console.log(chalk.red('✖ ', error));
    }
    {
      const dataToString = data.toString();
      const mdLinkRgEx = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      const mdLinkRgEx2 = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;

      const textLinks = dataToString.match(mdLinkRgEx);
      const urlArray = dataToString.match(mdLinkRgEx2); // esto es array ['link1', 'link2']
      console.log('linea 98 ', textLinks);
      console.log('linea 99 ', urlArray);
      // console.log(`This links are founded in ${newPath}\n`);
      if (urlArray != null) {
        for (let i = 0; i < urlArray.length; i++) {
          console.log(`href: ${urlArray[i]}\ntext: ${textLinks[i]}\nfile: ${markdownFile}\n`);
        }
      }
    }
  });
};
// extractLinksM('./README3.md');

// VALIDAMOS LOS ESTADOS DE LOS LINKS CON AXIOS
const validateStatus = (links) => {
  axios.get(links)
    .then((response) => {
      if (response.status == 200) {
        console.log(chalk.green(`Response code: ✔ ${response.status}\nResponse: ${response.statusText}\n`));
      } else if (response.status == 404 || response.status == 402) {
        console.log(chalk.red(`Response code : ✖ ${response.status}\nResponse: ${response.statusText}\n`));
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};
console.log('linea 128 ', validateStatus('https://www.google.com.pe'));
// Client network socket disconnected before secure TLS connection was established
// connect ETIMEDOUT 64.233.190.94:443

// ESTO VA CON EL OTRO
module.exports = {
  convertToAbsolutePathM,
  pathExistsM,
  isDirectoryM,
  readDirectoryM,
  pathExtensionM,
  readFileM,
  recursividadM,
  extractLinksM,
};

// ESTO YA NO VA
// module.exports = mdLinks('./README.md', '');

// linea 96  [
//   'https://github.com/markdown-it/linkify-it',
//   'https://markdown-it.github.io/linkify-it/'
// ]
// Text: Linkify.
// Link: https://github.com/markdown-it/linkify-it
// File: ./README1.md

// Text: Linkify2.
// Link: https://markdown-it.github.io/linkify-it/
// File: ./README1.md
