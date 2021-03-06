default-extname
==========

[![defaultExtname](http://img.shields.io/npm/v/default-extname.svg)](https://www.npmjs.org/package/default-extname)
[![defaultExtname](http://img.shields.io/npm/dm/default-extname.svg)](https://www.npmjs.org/package/default-extname)

Extension of path.extname

# example

## resolve
```
var dExtname = require('default-extname');
var extname = dExtname();
extname.resolve('abd.js');// '.js'
extname.resolve('abd.ddd');// '.js'
```

### opt.defaultType
```
var dExtname = require('default-extname');
var extname = dExtname({defaultType: 'txt'});
extname.resolve('abd.js');// '.js'
extname.resolve('abd.ddd');// '.txt'
```

### opt.extraTypeList
```
var dExtname = require('default-extname');
var extname = dExtname({extraTypeList: ['ddd']});
extname.resolve('abd.js');// '.js'
extname.resolve('abd.aaa');// '.js'
extname.resolve('abd.ddd');// '.ddd'
```

## resolveFilePath
```
var dExtname = require('default-extname');
var extname = dExtname();
extname.resolveFilePath('abd.js');// 'abd.js'
extname.resolveFilePath('abd.ddd');// 'abd.ddd.js'
```

# options

- opt.defaultType

  default:`js`

- opt.extraTypeList
  
  default: `[]`, customized type
