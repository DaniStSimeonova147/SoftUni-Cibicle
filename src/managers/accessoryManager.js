const Accesorry = require('../models/Accessory');

exports.getAll = () => Accesorry.find();

exports.create = (accessoryData) => Accesorry.create(accessoryData);

exports.getOthers = (accessoryIds) => Accesorry.find({_id: {$nin: accessoryIds}});