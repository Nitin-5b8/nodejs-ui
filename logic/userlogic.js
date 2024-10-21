const user = require('../schemas/userschema')

const getallusers = async (req, res) => {
    try {
        const data = await user.find()
        res.send(data).status(200)
    } catch (err) {
        res.send('no users are there').status(404)
    }
}
const addauser = async (req, res) => {
    const data = req.body
    const obj = new user({ name: data.name, place: data.place, age: data.age, task: data.task })
    try {
        await obj.save()
        res.send(obj)
    }
    catch (err) {
        res.send({ message: err.message })
    }
}
const updateuser = async (req, res) => {
    const id = req.params.id
    if (id) {
        try {
            const newuser = await user.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
            if (!newuser) {
                return res.status(404).json({ message: 'Item not found' });
            }
            else {
                res.status(200).json(newuser);
            }
        } catch (error) {
            res.status(400).json({ message: 'Error updating item', error: error.message })
        }
    }
    else {
        res.status(301).json({ message: 'no user found' })
    }
}
const deleteditem = async (req, res) => {
    const id = req.params.id
    try {
        const deleteddata = await user.findByIdAndDelete(id);
        if (!deleteddata) {
            return res.status(404).json({ message: "Item not found" })
        }
        else {
            res.status(200).json({ message: "deleted successfully" })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error: error.message })
    }
}
const jwt = require('jsonwebtoken');
const adduser = ('/login', [body('email').isEmail(), body('password').notEmpty(),], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else{
        const { email, password } = req.body;
    }
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({
            message: 'Invalidcredentials'
        });
        else{
            const isMatch = await bcrypt.compare(password, user.password);
        }
        if (!isMatch) return res.status(401).json({
            message: 'Invalidcredentials'
        });
        else{
            const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.status(200).json({ token });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Login error', error: error.message });
    }
});

module.exports = { getallusers, addauser, updateuser, deleteditem,adduser }
