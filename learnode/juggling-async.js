let
 http = require('http')
let
 bl = require('bl')
let
 results = []
let
 count = 0

 printResults = () => {
  for (let
 i = 0; i < 3; i++)
    console.log(results[i])
}

 let httpGet = (index) => {
  http.get(process.argv[2 + index],  (response) =>{
    response.pipe(bl( (err, data) => {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (let
 i = 0; i < 3; i++)
  httpGet(i)