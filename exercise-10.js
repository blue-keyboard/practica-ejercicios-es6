// Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
   {
      name: 'Alberto',
      favoritesSounds: {
         waves: { format: 'mp3', volume: 50 },
         rain: { format: 'ogg', volume: 60 },
         firecamp: { format: 'mp3', volume: 80 }
      }
   },
   {
      name: 'Antonio',
      favoritesSounds: {
         waves: { format: 'mp3', volume: 30 },
         shower: { format: 'ogg', volume: 55 },
         train: { format: 'mp3', volume: 60 }
      }
   },
   {
      name: 'Pedro',
      favoritesSounds: {
         shower: { format: 'mp3', volume: 50 },
         train: { format: 'ogg', volume: 60 },
         firecamp: { format: 'mp3', volume: 80 }
      }
   },
   {
      name: 'Cristina',
      favoritesSounds: {
         waves: { format: 'mp3', volume: 67 },
         wind: { format: 'ogg', volume: 35 },
         firecamp: { format: 'mp3', volume: 60 }
      }
   }
]

const volumesArray = []

for (const user of users) {
   for (let sound in user.favoritesSounds) {
      volumesArray.push(user.favoritesSounds[sound].volume)
   }
}

console.log(volumesArray.reduce((acc, vol) => acc + vol) / volumesArray.length)
