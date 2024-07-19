 //importing json server library
const jsonServer = require('json-server')
//creating a json server 
const MPServer = jsonServer.create()
//routing resources into server
const router = jsonServer.router('db.json')
//implementing default middileware
const middileware = jsonServer.defaults()
//define a port number for server
const PORT = 3000 || process.env.PORT

//configuiring router,middleware,port to server for configuring -method = use()
MPServer.use(middileware)
MPServer.use(router)

MPServer.listen(PORT, () => {
    console.log(`media player server running at ${PORT}`)
})