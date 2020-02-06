let net = require('net')

let zeroFill = (i) => {
  return (i < 10 ? '0' : '') + i
}



let now = () => {
  let
 d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

let
 server = net.createServer((socket) =>{
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))