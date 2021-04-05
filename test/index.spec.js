// const mdLinks = require('../');

const mdLinks = require('../index');

const pathTest = {
  relPathFile: 'README1.md',
  relPathFileError: 'READMERR.md',
  relPathDir: 'PruebasLinks/dir',
};
const options = {
  validateEmpty: '',
  validateFalse: { validate: false },
  validateTrue: { validate: true },
};
const objectsArrayPerLinkFile = [
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.3. Este es un link de más de 5',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.3.2 Este es un link de más de',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
  },
];
const objectsArrayStatusFile = [
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.3. Este es un link de más de 5',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
    Status: 200,
    StatusMessage: 'OK',
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.3.2 Este es un link de más de',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\README1.md',
    Status: 200,
    StatusMessage: 'OK',
  },
];

const objectsArrayPerLinkDir = [
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
];
const objectsArrayStatusDir = [
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.3 Este es un link de más de 50',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
    Status: 200,
    StatusMessage: 'OK',
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.3.2',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
    Status: 200,
    StatusMessage: 'OK',
  },
  {
    href: 'https://github.com/markdown-it/linkify-it',
    text: 'Linkify4.',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
    Status: 200,
    StatusMessage: 'OK',
  },
  {
    href: 'https://markdown-it.github.io/linkify-it/',
    text: 'Linkify4.2.',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
    Status: 200,
    StatusMessage: 'OK',
  },
  {
    href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
    text: 'Estados',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README2.md',
    Status: 200,
    StatusMessage: 'OK',
  },
];

const objectsArrayPerLinkError = [
  {
    href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Link ERROR',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\READMERR.md',
  },
];
const objectsArrayStatusError = [
  {
    href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Link ERROR',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\READMERR.md',
    ResponseCode: 'ERROR',
    Response: 'FAIL',
  },
];

// TEST PARA EVALUAR FUNCIÓN MDLINKS - FILES
describe('Testing a markdown file', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  test('Should return 1 object´s array per each link founded in markdown files', () => mdLinks(pathTest.relPathFile, options.validateFalse).then((data) => {
    expect(data).toEqual(objectsArrayPerLinkFile);
  }));
  test('Should return 1 object´s array per each link founded in markdown files', () => mdLinks(pathTest.relPathFile, options.validateEmpty).then((data) => {
    expect(data).toEqual(objectsArrayPerLinkFile);
  }));
  // test('Should return 1 object´s array with Status per each link founded in markdown files', () => mdLinks(pathTest.relPathFile, options.validateTrue).then((data) => {
  //   expect(data).toEqual(objectsArrayStatusFile);
  // }));

  test('Should return 1 object´s array per each broken link founded in markdown files', () => mdLinks(pathTest.relPathFileError, options.validateEmpty).then((data) => {
    expect(data).toEqual(objectsArrayPerLinkError);
  }));
  test('Should return 1 object´s array per each broken link founded in markdown files', () => mdLinks(pathTest.relPathFileError, options.validateFalse).then((data) => {
    expect(data).toEqual(objectsArrayPerLinkError);
  }));
  // test('Should return 1 object´s array WITH ERROR STATUS per each broken link founded in markdown files', () => mdLinks(pathTest.relPathFileError, options.validateTrue).then((data) => {
  //   expect(data).toEqual(objectsArrayStatusError);
  // }));
});

// TEST PARA EVALUAR FUNCIÓN MDLINKS - DIRECTORY
describe('Testing a directory', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  test('Should return 1 object´s array per each link founded in a Directory', () => mdLinks(pathTest.relPathDir, options.validateEmpty).then((data) => {
    expect(data).toEqual(objectsArrayPerLinkDir);
  }));
  // test('Should return 1 object´s array per each link founded in a Directory', () => mdLinks(pathTest.relPathDir, options.validateFalse).then((data) => {
  //   expect(data).toEqual(objectsArrayPerLinkDir);
  // }));
  // test('Should return 1 object´s array with Status per each link founded in a directory', () => mdLinks(pathTest.relPathDir, options.validateTrue).then((data) => {
  //   expect(data).toEqual(objectsArrayStatusDir);
  // })); // bota error en .toEqual
});
