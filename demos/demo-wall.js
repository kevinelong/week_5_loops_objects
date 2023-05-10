
score = 0
function getRandomPosition(){
    x = Math.random()
    return {
        x:x,
        y:y
    }
}

function echo(text){
    console.log(text)
}

echo("hello")

world = `
#####################
#                   #
#        ^          #
#   Z               #
#$                  #
#####################
      ${score}
`

console.log(world)


