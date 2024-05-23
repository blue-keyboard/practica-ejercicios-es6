// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

console.log(ages.filter((age) => age > 18))

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]

console.log(ages.filter((age) => age % 2 === 0))

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

console.log(
   streamers.filter(
      (streamer) => streamer.gameMorePlayed === 'League of Legends'
   )
)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers2 = [
   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

console.log(streamers2.filter((streamer) => streamer.name.includes('u')))

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const streamers3 = [
   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

console.log(
   streamers3
      .filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
      .map(({ gameMorePlayed, ...streamer }) =>
         streamer.age > 35
            ? { ...streamer, gameMorePlayed: gameMorePlayed.toUpperCase() }
            : streamer
      )
)

// 5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers4 = [
   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const input = document.querySelector('input[data-function="toFilterStreamers"]')

const logFilteredStreamers = (event) => {
   const search = event.target.value
   const newFilteredStreamersArray = streamers4
      .filter((streamer) => streamer.name.includes(search))
      .map((streamer) => streamer.name)

   console.log(...newFilteredStreamersArray)
}

input.addEventListener('input', logFilteredStreamers)
