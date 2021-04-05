// const path = require('path'); // este modulo a traves de sus metodos nos permite manipular las rutas
// const fs = require('fs'); // este modulo  a través de sus metodos nos permite trabajar los archivos del sistema opertaivo, este modulo es muy importante para cuando queramos crear modulos
// const marked = require('marked'); // este modulo es para analizar el md y extraer links contenidos

// "pretest": "npm run eslint", ante sdel test evalue todas las lineas de codigo con slint

// FUNCIÓN MDLINKS
// const mdLinks = (filepath, options) => {
//   const absolutePath = convertToAbsolutePathM(filepath);
//   const existsPath = pathExistsM(absolutePath); // booleano

//   const absoluteExists = (existsPath) ? absolutePath : console.log(chalk.red('✖ La ruta no existe')); // para este error usar trycatch
//   // console.log('La ruta es absoluta y esxite L27 ', chalk.green(absoluteExists));

//   const isDirectory = isDirectoryM(absoluteExists) ? isDirectoryM(absoluteExists) : console.log(chalk.yellow('No es directorio')); // isDirectory -> booleano
//   // console.log('es directorio linea 32 ', chalk.green(isDirectory)); // Retorna la ruta absoluta y existente del DIRECTORIO
//   const pathExtension = pathExtensionM(absoluteExists);
//   // console.log('linea 34 ', pathExtension); // .md
//   let arrayMarkdownsM = [];
//   if (isDirectory) { // esto es true
//     arrayMarkdownsM = recursividadM(absoluteExists); // esta recursividad me retorna 1 array de archivos md en string
//     // console.log('linea 38 ', arrayMarkdownsM); // array de .md absolutos -> [ 'README3.md', 'README4.md' ]
//   } else {
//     arrayMarkdownsM = (pathExtension === '.md') ? [absoluteExists] : (chalk.red('No es markdown, ni directorio'));
//     // console.log('linea 41 ', arrayMarkdownsM); // retorna array de .md absoluto -> [ 'README1.md']
//   }
//   if (options === '' || options.validate === false) {
//     const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM);// se extrae 1 array de objetos x cada link
//     console.log('linea 45 ', arrayDeObjetosLinks);
//     // return console.log(arrayDeObjetosLinks); // este retorno no va porqe el consolelog me corta el test
//     return arrayDeObjetosLinks;// este test si pasa xqe no tiene console.log este return
//   }
//   console.log('Lleva options, true');
//   const arrayDeObjetosLinks = extractLinksArrayM(arrayMarkdownsM);
//   // console.log('linea 45 ', arrayDeObjetosLinks);

//   const promiseObjectArray = [];
//   arrayDeObjetosLinks.forEach((objeto) => {
//     promiseObjectArray.push(validateStatusM(objeto));
//   });
//   const arrayDeObjetosLinksStatus = Promise.all(promiseObjectArray).then((result) => console.log(result)); // SIEMPRE DEBE IR CON CONSOLE.LOG???
//   return arrayDeObjetosLinksStatus;
// };
// // OPCIONES A TESTEAR:
// // mdLinks('./PruebasLinks', ''); // 5 archivos .md - 7 links
// // mdLinks('./PruebasLinks', { validate: true }); // 5 archivos .md - 7 links
// // mdLinks('./PruebasLinks', { validate: false }); // 5 archivos .md - 7 links
// // mdLinks('./PruebasLinks/dir/dir2', ''); // 2 archivos .md - 7 links
// // mdLinks('./PruebasLinks/dir/dir2', { validate: true });
// // mdLinks('./PruebasLinks/dir/dir2', { validate: false });
// // mdLinks('./PruebasLinks/dir', '');
// // mdLinks('./PruebasLinks/dir', { validate: true });
// // mdLinks('./PruebasLinks/dir', { validate: false });
// mdLinks('./README1.md', '');
// // mdLinks('./README1.md', { validate: true });
// // mdLinks('./README1.md', { validate: false });
// // mdLinks('./README404.md', '');
// // mdLinks('./README404.md', { validate: true });
// // mdLinks('./README404.md', { validate: false });
// // mdLinks('./READMERR.md', '');
// // mdLinks('./READMERR.md', { validate: true });
// // mdLinks('./READMERR.md', { validate: false });

// module.exports = {
//   mdLinks,
// };
