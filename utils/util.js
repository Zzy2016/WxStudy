const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function func(params) {
  console.log("params",params)
  console.log("hanshu 1")
  return 3
}

function toCel(fahr) {
  return (5/9)*(fahr-32)
}

module.exports = {
  formatTime: formatTime
}

module.exports.func=func
module.exports.toCel=toCel


