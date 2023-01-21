const globalErrorHanlder = (err, req, res, next) => {

    const stack = err.stack
    const message = err.message || err.name
    const status = err.status ? err.status : "failed"
    const statusCode = err.statusCode ? err.statusCode : 500
    res.status(statusCode).json({
        status,
        message,
        stack,
    })
}

// Not found route handler
const notFoundErrorHandler = (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server!`)
    next(err)
}

export {globalErrorHanlder, notFoundErrorHandler}