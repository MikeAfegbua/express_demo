function log(res, req, next) {

    console.log('logging now...');
    next();
}

// module.exports = log;
export default log;