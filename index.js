// pry = require('pryjs')
function mapToNegativize(sourceArray) {
    let answer = []
    sourceArray.forEach(index => {
        if (index < 0) {
            answer.push(Math.abs(index))
        } else {
            answer.push(-Math.abs(index))
        }
    })
    return answer
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let answer = []
    sourceArray.forEach(num => answer.push(num*2))
    return answer
}

function mapToSquare(sourceArray) {
    let answer = []
    sourceArray.forEach(num => answer.push(num**2))
    return answer
}



function reduceToTotal(sourceArray, startingPoint = 0) {
    let answer = 0
    sourceArray.forEach(num => answer+= num)
    return answer += startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) return false
    }
    return true
  }

function reduceToAnyTrue(sourceArray) {
    if (sourceArray.find(index => index === true)) {
        return true
    } else {
        return false
    }
}