module.exports.getAllTools = (req, res, next) => {
    res.send('tools found')
    console.log('server side / backend');

}

module.exports.postATools = (req, res) => {
    res.send('tools found with post method')
}

module.exports.PutATool = (req, res, next) => {
    res.send('now you hit in the put method')
}