/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const path = require('path'); // este modulo a traves de sus metodos nos permite manipular las rutas
const fs = require('fs'); // este modulo  a través de sus metodos nos permite trabajar los archivos del sistema opertaivo, este modulo es muy importante para cuando queramos crear modulos
const chalk = require('chalk');
const axios = require('axios');

// SE CONVIERTE A RUTA ABSOLUTA
const convertToAbsolutePathM = (filepath) => {
  if (path.isAbsolute(filepath)) {
    return filepath;
  }
  return path.resolve(filepath);
};
// console.log(convertToAbsolutePathM('./README1.md'));

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
// isDirectoryM('./PruebasLinks'); // booleano

// SI ES FILE SE COMPRUEBA SI ES MARKDOWN
const pathExtensionM = (filepath4) => path.extname(filepath4); // .md
// pathExtensionM('./README.md');

// SE LEE EL DIRECTORIO
const readDirectoryM = (dir) => {
  const dataDir = fs.readdirSync(dir, 'utf8');
  return dataDir; // array de datos strings que hay dentro del directorio
};
// readDirectoryM('./PruebasLinks/img');

// FUNCIÓN RECURSIVIDAD - SE OBTIENE ARRAY DE ARCHIVOS .MD
const arrayMarkdowns = []; // este array si va adentro se va a blanquear en cada vuelta y solo carga lo ultimo y no el acumulado
const recursividadM = (dir) => {
  // console.log('linea 65 ', dir); // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\PruebasLinks
  // 2da pasada C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\PruebasLinks\img

  readDirectoryM(dir).forEach((element) => {
    // ['img', 'README2.md', 'READMELAB.md', temCodeRunnerFile.js']
    // console.log('linea 69 ', readDirectoryM(dir)); // 2da pasada: [ 'ExtLink.png', 'FLOWCHART-API.md', 'FLOWCHART-CLI.md' ]

    const dirAndDir = path.join(dir, element); // ./PruebasLinks/img
    // console.log('linea 72 ', dirAndDir); // me traer la ruta absoluta de cada elemento dentro de PruebasLinks y dentro de ing
    // const absolutaDirAndDir = convertToAbsolutePathM(dirAndDir); // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\PruebasLinks\img

    if (pathExtensionM(dirAndDir) === '.md') {
      arrayMarkdowns.push(dirAndDir);
    } else if (isDirectoryM(dirAndDir)) {
      // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks\PruebasLinks\img --> TRUE
      recursividadM(dirAndDir);
    } else {
      // console.log(chalk.red('Es cualquier otro archivo, no directorio ni archivo .md'));
      chalk.red('Es cualquier otro archivo, no directorio ni archivo .md');
    }
  });
  return arrayMarkdowns; // retorna 1 array de todos los .md encontrados en todos los directorios
}; // me retorna 1 array de archivos markdown
// recursividadM('./PruebasLinks');

// OBTENEMOS 1 OBJETO POR CADA LINK QUE SE HAYA ENCONTRADO EN 1 ARRAY .MD
const extractLinksArrayM = (arrayMarkdownsM) => {
  const arrayDeObjetosInicial = [];
  arrayMarkdownsM.forEach((markdownFile) => {
    // console.log('linea 46 ', mdFile1);
    const absolute = convertToAbsolutePathM(markdownFile);
    const returnData = fs.readFileSync(absolute, 'utf-8');
    const dataToString = returnData.toString();
    const mdLinkRgEx = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
    const mdLinkRgEx2 = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
    const textLinks = dataToString.match(mdLinkRgEx); // esto es array ['text1', 'text2']
    const textLinks50 = textLinks.map((element) => element.slice(0, 50));
    const arrayLinks = dataToString.match(mdLinkRgEx2); // esto es array ['link1', 'link2']
    // console.log("linea 102 ", textLinks);
    // console.log("linea 103 ", arrayLinks);
    if (arrayLinks != null) {
      for (let i = 0; i < arrayLinks.length; i++) {
        arrayDeObjetosInicial.push({
          href: arrayLinks[i],
          text: textLinks50[i],
          file: absolute,
        });
      }
    }
  });
  return arrayDeObjetosInicial;
}; // me retorna 1 ARRAY de OBJETOS, 1 OBJETO POR CADA LINK ENCONTRADO
// extractLinksArrayM([
//   'PruebasLinks\\dir\\dir2\\README3.md',
//   'PruebasLinks\\dir\\dir2\\README4.md',
//   'PruebasLinks\\dir\\README2.md',
//   'PruebasLinks\\img\\FLOWCHART-API.md',
//   'PruebasLinks\\img\\FLOWCHART-CLI.md',
// ]);

// VALIDAMOS LOS ESTADOS DE LOS LINKS CON AXIOS
const validateStatusM = (object) => axios.get(object.href)
  .then((response) => {
    if (response.status == 200) {
      return {
        href: object.href,
        text: object.text,
        file: object.file,
        Status: response.status,
        StatusMessage: response.statusText,
      };
    }
  })
  .catch((error) => {
    if (error.response) {
      // console.log('linea 143 ', error);
      return {
        href: object.href,
        text: object.text,
        file: object.file,
        Status: error.response.status,
        StatusMessage: 'FAIL',
      };
    // eslint-disable-next-line no-else-return
    } else {
      return {
        href: object.href,
        text: object.text,
        file: object.file,
        Status: 'ERROR LINK',
        StatusMessage: 'FAIL',
      };
    }
  });

// esta funcion retorna 1 OBJETO POR LINK, CON SU STATUS Y ESTATUS MESSAGE
// validateStatusM('https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/').then(result => console.log(result));
// validateStatusM({
//   href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
//   text: 'Estados',
//   file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README1.md',
// }).then((result) => console.log(result));

// validateStatusM({
//   href: 'https://github.com/404',
//   text: 'Link 404',
//   file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dirFail\\README404.md',
// }).then((result) => console.log(result))
//   .catch((err) => console.error(err));

// validateStatusM({
//   href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
//   text: 'Link ERROR',
//   file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dirFail\\READMERR.md',
// }).then((result) => console.log(result));

// ESTO VA CON EL OTRO
module.exports = {
  convertToAbsolutePathM,
  pathExistsM,
  isDirectoryM,
  readDirectoryM,
  pathExtensionM,
  recursividadM,
  extractLinksArrayM,
  validateStatusM,
};
