import { useEffect, useState } from 'react'

export default function usePokemon (id) {
//   const [pokemon, setPokemon] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   console.log('====================================')
//   console.log(id)
//   console.log('====================================')

  //   useEffect(() => {
  //     console.log('hola')
  //     const fetchPokemonData = async () => {
  //       try {
  //         setLoading(true)
  //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //         const data = await response.json()
  //         const newPokemon = {
  //           id: data.id,
  //           name: data.name,
  //           image: data.sprites.front_default,
  //           type: data.types.map(type => type.type.name).join(', ')
  //         }
  //         setPokemon(newPokemon)
  //         setLoading(false)
  //       } catch (error) {
  //         setError(error.message)
  //       } finally {
  //         setLoading(false)
  //       }
  //     }
  //     fetchPokemonData()
  //   }, [])

  //   return { pokemon, loading, error }

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let newPokemon = {}
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(data => {
        newPokemon = {
          id: data.id,
          name: data.name,
          imagePokemon: data.sprites.other['official-artwork'].front_default,
          stats: data.stats,
          types: data.types
        //   type: data.types.map(type => type.type.name).join(', ')
        }
      })
    fetch(`https://pokeapi.aryandeora.com/api/pokeapi?method=get_evolution_chain&id=${id}`)
      .then((response) => response.json())
      .then(data => {
        newPokemon = { ...newPokemon, evolutions: data }
      })
    fetch(`https://pokeapi.aryandeora.com/api/pokeapi?method=get_color_palette&id=${id}`)
      .then((response) => response.json())
      .then(data => {
        newPokemon = { ...newPokemon, colors: data }
        setData(newPokemon)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [id])
  return { data, loading, error }
}
