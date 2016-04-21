var path = require('path');
var mimeJson = require('mime.json');
var utils = require('./utils');

var defaultExtname = function (opt) {
    this.opt = utils.smartyMerge({
        defaultType: 'js',
        skipList: []
    }, opt || {});
};

defaultExtname.prototype.extname = function (filePath) {
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

    if (opt.skipList.indexOf(pureExtnameStr) !== -1) {
        return extnameStr;
    }

    return fullDefaultType;
};

module.export = function (opt) {
    return new defaultExtname(opt);
};