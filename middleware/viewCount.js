let count = 0;
module.exports.viewCountFun = (req, res, next) => {
    count++
    console.log(count);
    next()
}