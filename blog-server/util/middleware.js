
const errorHandler = (error, req, res, next) => {
    console.error(error.message);
    if (error.name === "SequelizeValidationError") {
        return res.status(400).send({ error: error.message })
    }
    next(error)
    };

module.exports = {errorHandler}