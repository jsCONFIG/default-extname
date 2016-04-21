var utils = {
    smartyMerge: function (rootObj, newObj, isNumParse) {
        newObj = newObj || {};
        var tempObj = {};
        for (var i in rootObj ) {
            tempObj[i] = rootObj[i];
            if (i in newObj) {
                var temp = newObj[i],
                    parseVal = parseFloat(temp, 10);
                if (isNumParse && !isNaN(parseVal)) {
                    temp = parseVal;
                }
                tempObj[i] = temp;
            }
        }
        return tempObj;
    },

    merge: function (rootObj, newObj) {
        rootObj = rootObj || {};
        newObj = newObj || {};
        for (var i in newObj) {
            if (newObj.hasOwnProperty(i)) {
                rootObj[i] = newObj[i];
            }
        }

        return rootObj;
    }
};

module.exports = utils;