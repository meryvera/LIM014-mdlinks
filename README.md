[Fuente Laboratoria](https://github.com/meryvera/LIM014-mdlinks/blob/main/READMELAB.md)

![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/ExtLink.png)

***
## Índice

* [1. About ExtLink markdown library](#1-about)
* [2. Installing](#2-installing)
* [3. Importing](#3-importing)
* [4. Version](#4-version)
* [5. Licence](#5-licence)
* [6. Action Plan](#6-action-plan)

## 1. About ExtLink markdown library
It´s a free open-source JavaScript library that permite leer, analizar y validar links de archivos en formatos `Markdown` (.md), mediante peticiones HTTP (http.get) en node.js.

Además, esta librería permite acceder a las estadísticas de dichos links.

## 2. Installing
### Interface:

```sh
mdLinks <path-to-file> [options]
```
### Using CLI (Command Line Interface)

```sh
$ npm install --save md-links-mv
```

> IMPORTANTE. En la interfaz, `<path-to-file>` es la ruta de tu archivo Markdown y donde:
 > #### `[options]` 
 > Puede adoptar los siguientes valores:
 > ##### `--validate`
 > Con este option, el módulo  hace una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
 > ##### `--stats` 
 > Con este option, el output (salida) será un texto con estadísticas básicas sobre los links.
 > ##### `--stats` `--validate`
 > Con la combinación de ambos valores obtendrás las estadísticas que necesiten de los resultados de la validación.
 ## 3. Importing

### Interface:

```sh
mdLinks(path, options)
```
### Using Import

```sh
import mdLinks from 'md-links-mv';
let mdLinks = require('md-links-mv');
```

> IMPORTANTE. En la interfaz, `path` es la ruta de tu archivo Markdown y donde:
 > ##### `options` 
 > Validará los links encontrados.
## 4. Version
1.0.1
## 5. Licence
Licencia [MIT](https://opensource.org/licenses/MIT) ©️ 2021

## 6. Action Plan
[Project mdlinks](https://github.com/meryvera/LIM014-mdlinks/projects/2)
[Flowchart - API](https://drive.google.com/file/d/1SKuCDFVMw1vOuzCf1TvLZ_FfoCxJhl-_/view?usp=sharing)
[Flowchart - CLI](https://drive.google.com/file/d/1BfEjCkfMvtAorM_hMQmIFfSw2C153rn8/view?usp=sharing)
