
const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    res.status(500).json({ error: 'Internal server Error' })

}

module.exports = {errorHandler}