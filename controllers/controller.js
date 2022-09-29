module.exports.getAllTools = (req, res, next) => {
    res.send('tools found')
    console.log('server side / backend');

}

module.exports.postATools = (req, res) => {
    res.send('tools found with post method')
}