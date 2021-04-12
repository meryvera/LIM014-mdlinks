// creo funciones falsas de mock. la exporto. aca requiero mi axios
// const axios = require('axios');
// const validateStatusM = require('../src/functions.js');

// jest.mock('axios');
module.exports = {
  get: jest.fn(),
};

// test('should fetch validateStatusM', () => {
//   const objectLink200 = {
//     href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
//     text: 'Estados',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README2.md',
//   };
//   const objectLinkStatus200 = {
//     href: 'https://kinsta.com/es/blog/codigos-de-estado-de-http/',
//     text: 'Estados',
//     file: 'C:\\Users\\N10\\Desktop\\merylab\\meryLIM014-mdlinks\\PruebasLinks\\dir\\README2.md',
//     Status: 200,
//     StatusMessage: 'OK',
//   };
//   axios.get.mockResolvedValue(objectLink200);
//   return validateStatusM.all.then((data) => expect(data).toEqual(objectLinkStatus200));
// });
