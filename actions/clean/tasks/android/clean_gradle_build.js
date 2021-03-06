var Q = require('q'),
    rimraf = require('rimraf'),
    path = require('path'),
    settings = require('../../../../lib/settings'),
    pathHelper = require('../../../../lib/helper/path'),
    print = require('../../../../lib/helper/print');

module.exports = function (msg) {
    var gradle_build_path = path.join(pathHelper.app(), 'platforms', 'android', 'build'),
        defer = Q.defer();

    rimraf(gradle_build_path, function (err) {
        if(err) defer.reject(err);
        else defer.resolve();
    });

    return defer.promise.then(function () {
        if(msg.verbose) print.success('clean gradle build');
        return msg;
    });
};
