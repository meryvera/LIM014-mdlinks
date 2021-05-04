/* eslint-disable max-len */
/* eslint-disable no-console */
const { spawn } = require('child_process');

const path = require('path');

const chalk = require('chalk');

const execute = (comand, args = []) => {
  const createProcess = spawn(comand, args, { shell: process.platform === 'win32' });
  return new Promise((resolve, reject) => {
    createProcess.stdout.on('data', (data) => resolve(data.toString()));
    createProcess.stderr.on('data', (data) => reject(data.toString()));
    createProcess.on('exit', (code) => resolve(code));
  });
};
describe('test de la libreria md-links-mv', () => {
  it('Debería retornar detalle por link sin estado', (done) => execute('mdLinks', [path.join(`${process.cwd()}/PruebasLinks/dir/README2.md`)])
    .then((result) => {
      console.log('linea18 ', (process.cwd()), result); // C:\Users\N10\Desktop\merylab\meryLIM014-mdlinks Analizando file ingresado:
      console.log('linea19 ', result); // Analizando file ingresado:
      expect(result).toEqual(`${(chalk.magenta('Analizando file ingresado:\n'))}${chalk.green('PruebasLinks/dir/README2.md')} ${(chalk.cyan('https://kinsta.com/es/blog/codigos-de-estado-de-http/'))} ${(chalk.blue('Estados'))}`);
      done();
    }));
  // it('Debería retornar links y validarlos', (done) => execute('mdLinks', [convertToAbsolutePathM(`${process.cwd()}/PruebasLinks/dir/README2.md`), '--validate'])
  //   .then((result) => {
  //     expect(result).toBe(`ruta: ${convertToAbsolutePathM(`${process.cwd()}/PruebasLinks/dir/README2.md`)},  href : https://kinsta.com/es/blog/codigos-de-estado-de-http/, text : Estados\n`);
  //     done();
  //   }));
  // it('Debería retornar estadistica de los link', () => execute('mdLinks', [convertToAbsolutePathM(`${process.cwd()}/PruebasLinks/dir/README2.md`), '--stats'])
  //   .then((result) => {
  //     expect(result).toBe('Total links: 1\nUnique links: 1\n');
  //   }));
  // it('Debería retornar estadistica y validar los links', () => execute('mdLinks', [convertToAbsolutePathM(`${process.cwd()}/PruebasLinks/dirFail/README404.md`), '--stats', '--validate'])
  //   .then((result) => {
  //     expect(result).toBe('Total links: 1\nUnique links: 1\nBroken links: 1\n');
  //   }));
});
