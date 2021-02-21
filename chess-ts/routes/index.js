const apiRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// Header Authorization & Bearer Token (Is Admin or Is User or is Guest)
apiRouter.use(async (req, res, next) => {
    try {
        console.log('hello from the apiRouter')
    } catch ({ name, message }) {
        next({ name, message })
    }
})

module.exports = apiRouter;