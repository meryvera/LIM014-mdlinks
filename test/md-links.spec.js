// const mdLinks = require('../');

const mdLinks = require('..');
const {
  convertToAbsolutePathM,
  pathExistsM,
  isDirectoryM,
  pathExtensionM,
  // readFileM,
  readDirectoryM,
  recursividadM,
  extractLinksArrayM,
  validateStatusM,
} = require('../functions');

const pathTest = {
  relPath: 'README1.md',
  abstPath: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
  exitsPath: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
  nonExistsPath: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\NOEXIST.md',
  directory: './PruebasLinks',
  nonDirectory: './README1.md',
};
const arrayDirectoryElements = [
  'dir', 'dirFail', 'img', 'tempCodeRunnerFile.js',
];
const markdownFilesArray = [
  'PruebasLinks\\dir\\dir2\\README3.md',
  'PruebasLinks\\dir\\dir2\\README4.md',
  'PruebasLinks\\dir\\README2.md',
  'PruebasLinks\\img\\FLOWCHART-API.md',
  'PruebasLinks\\img\\FLOWCHART-CLI.md',
];
const arrayObjectsPerLink = [
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.3 Este es un link de más de 50',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.3.2',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
  },
  {
    href: 'https://github.com/markdown-it/linkify-it',
    text: 'Linkify4.',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
  },
  {
    href: 'https://markdown-it.github.io/linkify-it/',
    text: 'Linkify4.2.',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
  },
  {
    href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
    text: 'Estados',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README2.md',
  },
  {
    href: 'https://app.diagrams.net/#G1SKuCDFVMw1vOuzCf1TvLZ_FfoCxJhl-_',
    text: 'ExtLink',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\img\\FLOWCHART-API.md',
  },
  {
    href: 'https://app.diagrams.net/#G1BfEjCkfMvtAorM_hMQmIFfSw2C153rn8',
    text: 'ExtLink',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\img\\FLOWCHART-CLI.md',
  },
];
const objectLink200 = {
  href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
  text: 'Creación de Promesas.3.2',
  file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
};
const objectLink404 = {
  href: 'https://github.com/404',
  text: 'Link 404',
  file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README404.md',
};
const objectBrokenLink = {
  href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
  text: 'Link ERROR',
  file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\READMERR.md',
};
const objectLinkStatus200 = {
  href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
  text: 'Creación de Promesas.3.2',
  file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
  Status: 200,
  StatusMessage: 'OK',
};
const objectLinkStatus404 = {
  href: 'https://github.com/404',
  text: 'Link 404',
  file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README404.md',
  ResponseCode: 404,
  Response: 'FAIL',
};
const objectBrokenLinkStatus = {
  href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
  text: 'Link ERROR',
  file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\READMERR.md',
  ResponseCode: 'ERROR',
  Response: 'FAIL',
};

// TEST PARA CONVERTIR A RUTA ABSOLUTA
describe('Checking for absolute paths, if they don´t let´s convert them', () => {
  it('is a function', () => {
    expect(typeof convertToAbsolutePathM).toBe('function');
  });
  // it('should throw TypeError when invoked with wrong argument types', () => {
  //   expect(() => convertToAbsolutePathM()).toThrow(TypeError);
  //   expect(() => convertToAbsolutePathM(0)).toThrow(TypeError);
  //   expect(() => convertToAbsolutePathM(null, [])).toThrow(TypeError);
  //   expect(() => convertToAbsolutePathM(0, 0)).toThrow(TypeError);
  // });  //ESTO PORQUE ME DA ERROR?????????????????????
  test('Should return an absolute path', () => {
    expect(convertToAbsolutePathM(pathTest.relPath)).toEqual(pathTest.abstPath);
  });
  test('Should return the same path', () => {
    expect(convertToAbsolutePathM(pathTest.abstPath)).toEqual(pathTest.abstPath);
  });
});

// TEST PARA COMPROBAR LA EXISTENCIA DE LA RUTA
describe('Checking for existing paths, it returns a boolean data', () => {
  it('is a function', () => {
    expect(typeof pathExistsM).toBe('function');
  });
  test('Should return a boolean data true', () => {
    expect(pathExistsM(pathTest.exitsPath)).toEqual(true); // xqe acà si me acepta el to equal?????
  });
  test('Should return a boolean data false', () => {
    expect(pathExistsM(pathTest.nonExistsPath)).toEqual(false);
  });
});

// TEST PARA VERIFICAR SI ES DIRECTORIO
describe('Checking for directories, it returns a boolean data', () => {
  it('is a function', () => {
    expect(typeof isDirectoryM).toBe('function');
  });
  test('Should return a true if it´s a directory', () => {
    expect(isDirectoryM(pathTest.directory)).toBeTruthy();
  });
  test('Should return a false if it´s non a directory', () => {
    expect(isDirectoryM(pathTest.nonDirectory)).toBeFalsy();
  });
});

// TEST PARA COMPROBAR SI LA EXTENSION DE LA RUTA CORRESPONDE A ARCHIVO MARKDOWN
describe('Checking markdown files', () => {
  it('is a function', () => {
    expect(typeof pathExtensionM).toBe('function');
  });
  test('Should return a .md extension', () => {
    expect(pathExtensionM(pathTest.exitsPath)).toBe('.md');
  });
});

// TEST PARA LEER DIRECTORIO
describe('Reading directories', () => {
  it('is a function', () => {
    expect(typeof readDirectoryM).toBe('function');
  });
  test('Should return a .md extension', () => {
    expect(readDirectoryM(pathTest.directory)).toEqual(arrayDirectoryElements);
  });
});

// TEST PARA COMPROBAR LA RECURSIVIDAD
describe('Checking for markdown files inside directories', () => {
  it('is a function', () => {
    expect(typeof recursividadM).toBe('function');
  });
  test('Should return an array of markdown files', () => {
    expect(recursividadM(pathTest.directory)).toEqual(markdownFilesArray);
  });
});

// TEST PARA EXTRAER 1 ARRAY DE OBJETOS POR CADA LINK
describe('Checking for markdown files inside directories', () => {
  it('is a function', () => {
    expect(typeof extractLinksArrayM).toBe('function');
  });
  test('Should return an array of markdown files', () => {
    expect(extractLinksArrayM(markdownFilesArray)).toEqual(arrayObjectsPerLink);
  });
});

// TEST PARA EVALUAR ESTADOS DE CADA LINK
test('Should return an object with status 200', () => validateStatusM(objectLink200).then((data) => {
  expect(data).toEqual(objectLinkStatus200);
}));
// test('Should return 1 object with status different to 200', () => validateStatusM(objectLink404).catch((fail) => {
//   expect(fail).toEqual(objectLinkStatus404);
// }));
// test('Should return 1 object with status of a broken link', () => validateStatusM(objectBrokenLink).catch((error) => {
//   expect(error).toEqual(objectBrokenLinkStatus);
// }));
// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => expect(e).toMatch('error'));
// });

// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
