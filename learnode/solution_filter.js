let fs = require('fs')
let path = require('path')

module.exports =  (dir, filterStr, callback) => {

  fs.readdir(dir,  (err, list) =>{
    if (err)
      return callback(err)

    list = list.filter( (file) =>{
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}