const app = require('fastify')({
    logger : true
})
const fs = require('fs')

app.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true
      };
  
      // do not include CORS headers for requests from localhost
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false
      }
  
      // callback expects two parameters: error and options
      callback(null, corsOptions)
    }
  })

const picsJson = fs.readFileSync(__dirname + '/data/pics.json')
const pics = JSON.parse(picsJson)

const blPostsJson = fs.readFileSync(__dirname + '/data/blPosts.json')
const blPosts = JSON.parse(blPostsJson)

const msgsJson = fs.readFileSync(__dirname + '/data/msgs.json')
const msgs = JSON.parse(msgsJson)

app.get('/pics', async (req, res) => {
    res.send(pics.picsList)
})

app.post('/pics', async (req, res) => {
  const newPic = req.body
  let maxId = 0

  for (let i = 0; i < pics.picsList.length; i++) {
    if (pics.picsList[i].id > maxId) {
      maxId = pics.picsList[i].id
    }
  }

  newPic.id = maxId + 1
  pics.picsList.push(newPic)

  res.send(newPic)
})

app.get('/blposts', async (req, res) => {
  res.send(blPosts.blPostsList)
})

app.post('/blposts', async (req, res) => {
const newBlPost = req.body
let maxId = 0

for (let i = 0; i < blPosts.blPostsList.length; i++) {
  if (blPosts.blPostsList[i].id > maxId) {
    maxId = blPosts.blPostsList[i].id
  }
}

newBlPost.id = maxId + 1
blPosts.blPostsList.push(newBlPost)

res.send(newBlPost)
})

app.get('/msgs', async (req, res) => {
  res.send(msgs.msgsList)
})

app.post('/msgs', async (req, res) => {
const newMsg = req.body
let maxId = 0

for (let i = 0; i < msgs.msgsList.length; i++) {
  if (msgs.msgsList[i].id > maxId) {
    maxId = msgs.msgsList[i].id
  }
}

newMsg.id = maxId + 1
msgs.msgsList.push(newMsg)

res.send(newMsg)
})


app.get('/health', async (req, res) => {
    const healthResponse = {
        statusCode: 200,
        message: 'ok'
    }

    res.send(healthResponse)
})

const startServer = async () => {
    try {
        await app.listen(8080)
    } catch (err) {
        app.log.error(err)
    }
}


startServer()