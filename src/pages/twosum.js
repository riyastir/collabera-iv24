const TwoSumPage = () => {
  return <></>
}

export default TwoSumPage

const recusrsive = (numbers, target, low, high) => {
  if (low >= high) {
    return null
  }
  const sum = numbers[low] + numbers[high]
  if (sum === target) {
    return [low + 1, high + 1]
  } else if (sum < target) {
    return recusrsive(numbers, target, low + 1, high)
  } else {
    return recusrsive(numbers, target, low, high - 1)
  }
}

const twoSum = function (numbers, target) {
  return recusrsive(numbers, target, 0, numbers.length - 1)
}

console.log(twoSum([4, 11, 17, 25], 21))
console.log(twoSum([0, 1, 2, 2, 3, 5], 4))
console.log(twoSum([-1, 0], -1))
