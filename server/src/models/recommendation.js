const mongoose = require('../db/database');

const recommendations = {
    beach: mongoose.connections[1].model('Beach_item', require('../schemas/recommendation')),
    cultural: mongoose.connections[1].model('City_item', require('../schemas/recommendation')),
    common: mongoose.connections[1].model('Common_item', require('../schemas/recommendation')),
    mountain: mongoose.connections[1].model('Mountain_item', require('../schemas/recommendation')),
    sport: mongoose.connections[1].model('Sport_item', require('../schemas/recommendation')),
};
module.exports = recommendations;