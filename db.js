var fs = require("fs");
module.exports = function(mongodbUri, collectionName) {
    function readFile() {
        var data = fs.readFileSync("./json/" + collectionName + ".json").toString();
        return JSON.parse(data);
    }

    function writeFile(data) {
        fs.writeFileSync("./json/" + collectionName + ".json", JSON.stringify(data, null, "\t"));
    }
    
    this.insert = function(insertObject, success, error) {
        try {
            var json = readFile();
            insertObject._id = Date.now().toString();
            json.push(insertObject);
            writeFile(json);
            if (success) success(insertObject);
        } catch (e) {
            if (error) error(e);
        }
    };

    this.select = function(filter, success, error, fetch) {
        try {
            var json = readFile();
            if (filter) {
                var keys = Object.keys(filter);
                for (var i = 0; i < keys.length; i++) {
                    json = json.filter(function(a) {
                        if (filter[keys[i]] instanceof RegExp) {
                            return filter[keys[i]].test(a[keys[i]]);
                        } else {
                            return filter[keys[i]] === a[keys[i]];    
                        }
                    });
                }
            }
            if (success) success(json);
        } catch (e) {
            if (error) error(e);
        }
    };

    this.update = function(id, updateObject, success, error) {

    };

    this.remove = function(id, success, error) {

    };

    this.id = function(id) {

    };
};