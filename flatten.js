let result = []

const flatten = function (array) {
  console.log(array)

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i])
    } else {
      result.push(array[i])
    }
  }

  console.log(result)
}

flatten([1, 2, [[[[[[[]]]]]],[3, 4]], 5, [6]]) // => [1, 2, 3, 4, 5, 6]