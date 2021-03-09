[Fuente Laboratoria](https://github.com/meryvera/LIM014-mdlinks/blob/main/READMELAB.md)

![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/src/img/ExtLink.png)

***
## Índice

* [1. About ExtLink markdown library](#1-about)
* [2. Installing](#2-installing)
* [3. Inicialization](#3-inicialization)
* [4. Version](#4-version)
* [5. Licence](#5-licence)
* [6. Action Plan](#6-action-plan)

## 1. About ExtLink markdown library
It´s a free open-source JavaScript library that permite leer, analizar y validar links de archivos en formatos `Markdown` (.md), mediante peticiones HTTP (http.get) en node.js.

Además, esta librería permite acceder a las estadísticas de dichos links.

## 2. Installing
### Using npm:

```sh
$ npm install --save md-links-extract-mery
```
## 3. Inicialization
### Using JavaScript API - Import

### Using CLI (Command Line Interface)

```sh
md-links <path-to-file> [options]
```
> Esta es la ruta del archivo o carpeta que deseas procesar, donde:
 > #### `[options]` 
 > Puede adoptar los siguientes valores:
 > ##### `--validate`
 > Con este valor, el módulo  hace una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
 > ##### `--stats` 
 > Con este valor, el output (salida) será un texto con estadísticas básicas sobre los links.

 > ##### `--stats` `--validate`
 > Con la combinación de ambos valores obtendrémos las estadísticas que necesiten de los resultados de la validación.

## 4. Version
1.0.1
## 5. Licence
Licencia [MIT](https://opensource.org/licenses/MIT) ©️ 2021

## 6. Action Plan
[Project mdlinks](https://github.com/meryvera/LIM014-mdlinks/projects/2)
