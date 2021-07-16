const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/User');

// Load User
const loadUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

// Login User
const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { username, email, password } = req.body;

    try {
        let user;

        if (email) user = await User.findOne({ email });
        else user = await User.findOne({ username });

        if (!user)
            return res.status(400).json({
                errors: [{ msg: 'Invalid Credentials' }],
            });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).json({
                errors: [{ msg: 'Invalid Credentials' }],
            });

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
            if (err) throw err;

            res.json({ token });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { loadUser, loginUser };
