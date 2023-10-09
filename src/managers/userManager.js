const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const User = require('../models/User');

const SECRET = "8a822beaafbb0d56f44c540854eebfe3114e3745ef7320b776753e2d333e97be";

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Cannot find username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Cannot find username or password');
    }

    const payload = {
        _id: user._id,
        username:user.username
    }
    const token = await jwt.sign(payload,SECRET, {expiresIn: '2d'});

    return token;
};
