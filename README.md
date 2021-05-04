[Fuente Laboratoria](https://github.com/meryvera/LIM014-mdlinks/blob/main/READMELAB.md)

![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/ExtLink.png)

***
## Índice

* [1. About ExtLink markdown library](#1-about)
* [2. Installing](#2-installing)
* [3. Usage](#3-usage)
* [4. Importing](#4-importing)
* [5. Version](#5-version)
* [6. Licence](#6-licence)
* [7. Action Plan](#7-action-plan)

## 1. About ExtLink markdown library
ExtLink is a free, open source JavaScript library that allows you to read, parse, and validate links to files in `Markdown` (.md) formats, using HTTP requests (http.get) in node.js.

In addition, this library allows access to the statistics of these links. 

## 2. Installing
### Using CLI (Command Line Interface)
You can use this module installing it in your package json as follows in your terminal:

```sh
$ npm install --save-dev https://github.com/meryvera/LIM014-mdlinks
```

## 3. Usage
### Interface:
You can use this module under the following structure: 

```sh
mdLinks 'path-to-file' --options
```
> IMPORTANT. In the interface, `'path-to-file'` is the path of your Markdown file or folder with markdown files and other files, and where:
 > #### `--options` 
 > It can take the following values:
  > ##### `no options`
 > Just with a path and without any option, the module will return a list of all links found in all markdown files. This list shows the entered path to be analyzed, the links found in each markdown file and the text of each link.
 Example:
 ![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/mdl-file.png)

 > ##### `--validate`
 > With this option, the module makes an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds ok, then we will treat the link as ok.
  Example:
 ![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/mdl-file-val.png)

 > ##### `--stats` 
 > With this option, the output will be a text with basic statistics about the links.
  Example:
 ![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/mdl-file-stat.png)

 > ##### `--stats` `--validate`
 > With the combination of both values you will obtain the statistics that you need from the validation results.
  Example:
 ![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/mdl-file-val-stat.png)

 > ##### `--help`
 > With --help option, you can access to the information above in your terminal .
 ## 4. Importing

### Interface:

```sh
mdLinks(path, options)
```
### Using Import
You can import the module in your scripts: 

```sh
import mdLinks from 'md-links-mv';
const mdLinks = require('md-links-mv');
```

> IMPORTANT. You can also use the module´s api in your proyect.
Example:
![ExtLink](https://github.com/meryvera/LIM014-mdlinks/blob/main/PruebasLinks/img/api2.png)

## 5. Version
1.0.1
## 6. Licence
Licencia [MIT](https://opensource.org/licenses/MIT) ©️ 2021

## 7. Action Plan
[Project mdlinks](https://github.com/meryvera/LIM014-mdlinks/projects/2)

[Flowchart-API](https://drive.google.com/file/d/1SKuCDFVMw1vOuzCf1TvLZ_FfoCxJhl-_/view?usp=sharing)

[Flowchart-CLI](https://drive.google.com/file/d/1BfEjCkfMvtAorM_hMQmIFfSw2C153rn8/view?usp=sharing)
