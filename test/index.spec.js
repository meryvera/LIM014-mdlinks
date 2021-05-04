/* eslint-disable max-len */
// const mdLinks = require('../');
const axios = require('axios');

jest.mock('axios');

const mdLinks = require('../src/index');

const pathTest = {
  relPathFile: 'PruebasLinks/dir/dir2/README4.md',
  relPathFile404: 'PruebasLinks/dirFail/README404.md',
  relPathFileError: 'PruebasLinks/dirFail/READMERR.md',
  relPathDir: 'PruebasLinks/dir',
  relPathFileNoExist: 'README55.md',
};
const options = {
  validateEmpty: '',
  validateFalse: { validate: false },
  validateTrue: { validate: true },
};
const objectsArrayPerLinkFile = [
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
];
const objectsArrayStatusFile = [
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
];

const objectsArrayPerLinkDir = [
  {
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.3 Este es un link de más de 50',
  },
  {
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.3.2',
  },
  {
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
    href: 'https://github.com/markdown-it/linkify-it',
    text: 'Linkify4.',
  },
  {
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
    href: 'https://markdown-it.github.io/linkify-it/',
    text: 'Linkify4.2.',
  },
  {
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README2.md',
    href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
    text: 'Estados',
  },
];
// const objectsArrayStatusDir = [
//   {
//     href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
//     text: 'Consumo de Promesas.3 Este es un link de más de 50',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
//     Status: 200,
//     StatusMessage: 'OK',
//   },
//   {
//     href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
//     text: 'Creación de Promesas.3.2',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README3.md',
//     Status: 200,
//     StatusMessage: 'OK',
//   },
//   {
//     href: 'https://github.com/markdown-it/linkify-it',
//     text: 'Linkify4.',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
//     Status: 200,
//     StatusMessage: 'OK',
//   },
//   {
//     href: 'https://markdown-it.github.io/linkify-it/',
//     text: 'Linkify4.2.',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\dir2\\README4.md',
//     Status: 200,
//     StatusMessage: 'OK',
//   },
//   {
//     href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
//     text: 'Estados',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README2.md',
//     Status: 200,
//     StatusMessage: 'OK',
//   },
// ];

// const objectsArrayPerLink404 = [
//   {
//     href: 'https://github.com/404',
//     text: 'Link 404',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dirFail\\README404.md',
//   },
// ];
const objectsArrayStatus404 = [
  {
    href: 'https://github.com/404',
    text: 'Link 404',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dirFail\\README404.md',
    Status: 404,
    StatusMessage: 'FAIL',
  },
];

// const objectsArrayPerLinkError = [
//   {
//     href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
//     text: 'Link ERROR',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dirFail\\READMERR.md',
//   },
// ];
const objectsArrayStatusError = [
  {
    href: 'https://www.freecode.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Link ERROR',
    file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dirFail\\READMERR.md',
    Status: 'ERROR LINK',
    StatusMessage: 'FAIL',
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
  test('Should return 1 object´s array per each link founded in markdown files', () => mdLinks(pathTest.relPathFile).then((data) => {
    expect(data).toEqual(objectsArrayPerLinkFile);
  }));

  test('Should return an object with status 200', () => {
    axios.get.mockImplementation(() => Promise.resolve({
      status: 200,
      statusText: 'OK',
    }));
    mdLinks(pathTest.relPathFile, options.validateTrue).then((data) => {
      expect(data).toEqual(objectsArrayStatusFile);
    });
  });
  test('Should return an object with status 404', () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    axios.get.mockImplementation(() => Promise.reject({
      response: {
        status: 404,
        statusText: 'FAIL',
      },
    }));
    mdLinks(pathTest.relPathFile404, options.validateTrue).then((data) => {
      expect(data).toEqual(objectsArrayStatus404);
    });
  });
  test('Should return an object with status broken link', () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    axios.get.mockImplementation(() => Promise.reject({

    }));
    mdLinks(pathTest.relPathFileError, options.validateTrue).then((data) => {
      expect(data).toEqual(objectsArrayStatusError);
    });
  });
  test('Should return: La ruta no existe', () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    mdLinks(pathTest.relPathFileNoExist, options.validateTrue).catch((error) => {
      // console.log('195 ', error);
      expect(() => { throw new Error(error); }).toThrowError('La ruta no existe');
    });
  });
});

// TEST PARA EVALUAR FUNCIÓN MDLINKS - DIRECTORY
describe('Testing a directory', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  test('Should return 1 object´s array per each link founded in a Directory', () => {
    mdLinks(pathTest.relPathDir, { validate: false }).then((data) => {
      expect(data).toEqual(objectsArrayPerLinkDir);
    });
  });
  // test('Should return 1 object´s array per each link founded in a Directory', () => {
  //   mdLinks(pathTest.relPathDir, '').then((data) => {
  //     expect(data).toEqual(objectsArrayPerLinkDir);
  //   });
  // });
  // test('Should return 1 object´s array per each link founded in a Directory', () => {
  //   mdLinks(pathTest.relPathDir).then((data) => {
  //     expect(data).toEqual(objectsArrayPerLinkDir);
  //   });
  // });

  // test('Should return an object with status 200', () => {
  //   axios.get.mockImplementation(() => Promise.resolve({
  //     status: 200,
  //     statusText: 'OK',
  //   }));
  //   mdLinks(pathTest.relPathDir, options.validateTrue).then((data) => {
  //     expect(data).toEqual(objectsArrayStatusDir);
  //   });
  // });
});
