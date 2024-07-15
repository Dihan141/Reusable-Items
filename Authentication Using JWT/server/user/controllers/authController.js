const login = async (req, res) => {
    res.status(200).json({msg: 'Login'});
}

const register = async (req, res) => {
    res.status(200).json({msg: 'Register'});
}

module.exports = {
    login,
    register
}