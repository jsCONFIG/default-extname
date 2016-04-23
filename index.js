var path = require('path');
var mimeJson = require('mime.json');
var utils = require('./utils');

var defaultExtname = function (opt) {
    this.opt = utils.smartyMerge({
        defaultType: 'js',
        extraTypeList: []
    }, opt || {});
};

defaultExtname.prototype.resolve = function (filePath) {
    if (typeof filePath !== 'string') {
        return undefined;
    }
    var opt = this.opt;
    var extnameStr = path.extname(filePath);
    var fullDefaultType = '.' + opt.defaultType;
    if (extnameStr === '') {
        return fullDefaultType;
    }

    var pureExtnameStr = extnameStr.slice(1);
    if (mimeJson[pureExtnameStr]) {
        return extnameStr;
    }

    if (opt.extraTypeList.indexOf(pureExtnameStr) !== -1) {
        return extnameStr;
    }

    return fullDefaultType;
};

defaultExtname.prototype.resolveFilePath = function (filePath) {
    if (typeof filePath !== 'string') {
        return filePath;
    }
    var opt = this.opt;
    var fullDefaultType = '.' + opt.defaultType;
    var extnameStr = path.extname(filePath);
    if (extnameStr === '') {
        return filePath + fullDefaultType;
    }
    var extname = this.resolve(filePath);
    if (extnameStr !== extname) {
        return filePath + extname;
    }
    return filePath;
};

module.exports = function (opt) {
    return new defaultExtname(opt);
};