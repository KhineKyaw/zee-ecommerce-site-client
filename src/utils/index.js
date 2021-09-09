export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function random(seed) {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export function shuffle(array, seed) {
  var m = array.length,
    t,
    i

  while (m) {
    i = Math.floor(random(seed) * m--)

    t = array[m]
    array[m] = array[i]
    array[i] = t
    ++seed
  }

  return array
}
