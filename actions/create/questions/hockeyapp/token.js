var Configstore = require('configstore'),
    conf = new Configstore('tarifa');

module.exports = {
    type:'input',
    name:'hockeyapp_token',
    message:'What is your hockeyapp token? (you must use either a "Full Access" or Upload & Release" token)',
    default:conf.get('hockeyapp_token')
};
