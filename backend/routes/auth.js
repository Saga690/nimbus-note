const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'GameOfThrones@99';



router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exists" });
            }

            const salt = await bcrypt.genSalt();
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })

            const data = {
                user: {
                    id: user.id,
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken });

        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })




router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
],
    async (req, res) => {

        let success = false;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Please login with correct credentials" });
            }

            const passCompare = await bcrypt.compare(password, user.password);
            if (!passCompare) {
                return res.status(400).json({ error: "Please login with correct credentials" });
            }

            const data = {
                user: {
                    id: user.id,
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken });

        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }

    })



router.post('/getuser', fetchuser, async (req, res) => {

        try {
            userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);
        }

        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


module.exports = router