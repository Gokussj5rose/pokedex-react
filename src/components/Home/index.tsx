import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Container, Modal } from './styles'
import axios from 'axios'

// Imagens estáticas dos Pokémons
import img001 from '../../assets/Img/pokemonsSprite/bulbasaur.p.png'
import img002 from '../../assets/Img/pokemonsSprite/ivysaur.p.png'
import img003 from '../../assets/Img/pokemonsSprite/venusaur.p.png'
import img004 from '../../assets/Img/pokemonsSprite/charmander.p.png'
import img005 from '../../assets/Img/pokemonsSprite/charmeleon.p.png'
import img006 from '../../assets/Img/pokemonsSprite/charizard.p.png'
import img007 from '../../assets/Img/pokemonsSprite/squirtle.p.png'
import img008 from '../../assets/Img/pokemonsSprite/wartortle.p.png'
import img009 from '../../assets/Img/pokemonsSprite/blastoise.p.png'
import img010 from '../../assets/Img/pokemonsSprite/caterpie.p.png'
import img011 from '../../assets/Img/pokemonsSprite/metapod.p.png'
import img012 from '../../assets/Img/pokemonsSprite/butterfree-p.png'
import img013 from '../../assets/Img/pokemonsSprite/weedle.p.png'
import img014 from '../../assets/Img/pokemonsSprite/kakuna.p.png'
import img015 from '../../assets/Img/pokemonsSprite/beedrill.p.png'
import img016 from '../../assets/Img/pokemonsSprite/pidgey.p.png'
import img017 from '../../assets/Img/pokemonsSprite/pidgeotto.p.png'
import img018 from '../../assets/Img/pokemonsSprite/pidgeot.p.png' 
import img019 from '../../assets/Img/pokemonsSprite/rattata.p.png'
import img020 from '../../assets/Img/pokemonsSprite/raticate.p.png'
import img021 from '../../assets/Img/pokemonsSprite/spearow.p.png'
import img022 from '../../assets/Img/pokemonsSprite/fearow.p.png'
import img023 from '../../assets/Img/pokemonsSprite/ekans.p.png'
import img024 from '../../assets/Img/pokemonsSprite/arbok.p.png'
import img025 from '../../assets/Img/pokemonsSprite/pikachu.p.png'
import img026 from '../../assets/Img/pokemonsSprite/raichu.p.png'
import img027 from '../../assets/Img/pokemonsSprite/sandshrew.p.png'
import img028 from '../../assets/Img/pokemonsSprite/sandslash.p.png'
import img029 from '../../assets/Img/pokemonsSprite/nidoran-f.p.png'
import img030 from '../../assets/Img/pokemonsSprite/nidorina.p.png'
import img031 from '../../assets/Img/pokemonsSprite/nidoqueen.p.png'
import img032 from '../../assets/Img/pokemonsSprite/nidoran-m.p.png'
import img033 from '../../assets/Img/pokemonsSprite/nidorino.p.png'
import img034 from '../../assets/Img/pokemonsSprite/nidoking.p.png'
import img035 from '../../assets/Img/pokemonsSprite/clefairy.p.png'
import img036 from '../../assets/Img/pokemonsSprite/clefable.p.png'
import img037 from '../../assets/Img/pokemonsSprite/vulpix.p.png'
import img038 from '../../assets/Img/pokemonsSprite/ninetales.p.png'
import img039 from '../../assets/Img/pokemonsSprite/jigglypuff.p.png'
import img040 from '../../assets/Img/pokemonsSprite/wigglytuff.p.png'
import img041 from '../../assets/Img/pokemonsSprite/zubat.p.png'
import img042 from '../../assets/Img/pokemonsSprite/golbat.p.png'
import img043 from '../../assets/Img/pokemonsSprite/oddish.p.png'
import img044 from '../../assets/Img/pokemonsSprite/gloom.p.png'
import img045 from '../../assets/Img/pokemonsSprite/vileplume.p.png'
import img046 from '../../assets/Img/pokemonsSprite/paras.p.png'
import img047 from '../../assets/Img/pokemonsSprite/parasect.p.png'
import img048 from '../../assets/Img/pokemonsSprite/venonat.p.png'
import img049 from '../../assets/Img/pokemonsSprite/venomoth.p.png'
import img050 from '../../assets/Img/pokemonsSprite/diglett.p.png'
import img051 from '../../assets/Img/pokemonsSprite/dugtrio.p.png'
import img052 from '../../assets/Img/pokemonsSprite/meowth.p.png'
import img053 from '../../assets/Img/pokemonsSprite/persian.p.png'
import img054 from '../../assets/Img/pokemonsSprite/psyduck.p.png'
import img055 from '../../assets/Img/pokemonsSprite/golduck.p.png'
import img056 from '../../assets/Img/pokemonsSprite/mankey.p.png'
import img057 from '../../assets/Img/pokemonsSprite/primeape.p.png'
import img058 from '../../assets/Img/pokemonsSprite/growlithe.p.png'
import img059 from '../../assets/Img/pokemonsSprite/arcanine.p.png'
import img060 from '../../assets/Img/pokemonsSprite/poliwag.p.png'
import img061 from '../../assets/Img/pokemonsSprite/poliwhirl.p.png'
import img062 from '../../assets/Img/pokemonsSprite/poliwrath.p.png'
import img063 from '../../assets/Img/pokemonsSprite/abra.p.png'
import img064 from '../../assets/Img/pokemonsSprite/kadabra.p.png'
import img065 from '../../assets/Img/pokemonsSprite/alakazam.p.png'
import img066 from '../../assets/Img/pokemonsSprite/machop.p.png'
import img067 from '../../assets/Img/pokemonsSprite/machoke.p.png'
import img068 from '../../assets/Img/pokemonsSprite/machamp.p.png'
import img069 from '../../assets/Img/pokemonsSprite/bellsprout.p.png'
import img070 from '../../assets/Img/pokemonsSprite/weepinbell.p.png'
import img071 from '../../assets/Img/pokemonsSprite/victreebel.p.png'
import img072 from '../../assets/Img/pokemonsSprite/tentacool.p.png'
import img073 from '../../assets/Img/pokemonsSprite/tentacruel.p.png'
import img074 from '../../assets/Img/pokemonsSprite/geodude.p.png'
import img075 from '../../assets/Img/pokemonsSprite/graveler.p.png'
import img076 from '../../assets/Img/pokemonsSprite/golem.p.png'
import img077 from '../../assets/Img/pokemonsSprite/ponyta.p.png'
import img078 from '../../assets/Img/pokemonsSprite/rapidash.p.png'
import img079 from '../../assets/Img/pokemonsSprite/slowpoke.p.png'
import img080 from '../../assets/Img/pokemonsSprite/slowbro.p.png'
import img081 from '../../assets/Img/pokemonsSprite/magnemite.p.png'
import img082 from '../../assets/Img/pokemonsSprite/magneton.p.png'
import img083 from '../../assets/Img/pokemonsSprite/farfetchd.p.png'
import img084 from '../../assets/Img/pokemonsSprite/doduo.p.png'
import img085 from '../../assets/Img/pokemonsSprite/dodrio.p.png'
import img086 from '../../assets/Img/pokemonsSprite/seel.p.png'
import img087 from '../../assets/Img/pokemonsSprite/dewgong.p.png'
import img088 from '../../assets/Img/pokemonsSprite/grimer.p.png'
import img089 from '../../assets/Img/pokemonsSprite/muk.p.png'
import img090 from '../../assets/Img/pokemonsSprite/shellder.p.png'
import img091 from '../../assets/Img/pokemonsSprite/cloyster.p.png'
import img092 from '../../assets/Img/pokemonsSprite/gastly.p.png'
import img093 from '../../assets/Img/pokemonsSprite/haunter.p.png'
import img094 from '../../assets/Img/pokemonsSprite/gengar.p.png'
import img095 from '../../assets/Img/pokemonsSprite/onix.p.png'
import img096 from '../../assets/Img/pokemonsSprite/drowzee.p.png'
import img097 from '../../assets/Img/pokemonsSprite/hypno.p.png'
import img098 from '../../assets/Img/pokemonsSprite/krabby.p.png'
import img099 from '../../assets/Img/pokemonsSprite/kingler.p.png'
import img100 from '../../assets/Img/pokemonsSprite/voltorb.p.png'
import img101 from '../../assets/Img/pokemonsSprite/electrode.p.png'
import img102 from '../../assets/Img/pokemonsSprite/exeggcute.p.png'
import img103 from '../../assets/Img/pokemonsSprite/exeggutor.p.png'
import img104 from '../../assets/Img/pokemonsSprite/cubone.p.png'
import img105 from '../../assets/Img/pokemonsSprite/marowak.p.png'
import img106 from '../../assets/Img/pokemonsSprite/hitmonlee.p.png'
import img107 from '../../assets/Img/pokemonsSprite/hitmonchan.p.png'
import img108 from '../../assets/Img/pokemonsSprite/lickitung.p.png'
import img109 from '../../assets/Img/pokemonsSprite/koffing.p.png'
import img110 from '../../assets/Img/pokemonsSprite/weezing.p.png'
import img111 from '../../assets/Img/pokemonsSprite/rhyhorn.p.png'
import img112 from '../../assets/Img/pokemonsSprite/rhydon.p.png'
import img113 from '../../assets/Img/pokemonsSprite/chansey.p.png'
import img114 from '../../assets/Img/pokemonsSprite/tangela.p.png'
import img115 from '../../assets/Img/pokemonsSprite/kangaskhan.p.png'
import img116 from '../../assets/Img/pokemonsSprite/horsea.p.png'
import img117 from '../../assets/Img/pokemonsSprite/seadra.p.png'
import img118 from '../../assets/Img/pokemonsSprite/goldeen.p.png'
import img119 from '../../assets/Img/pokemonsSprite/seaking.p.png'
import img120 from '../../assets/Img/pokemonsSprite/staryu.p.png'
import img121 from '../../assets/Img/pokemonsSprite/starmie.p.png'
import img122 from '../../assets/Img/pokemonsSprite/mr-mime.p.png'
import img123 from '../../assets/Img/pokemonsSprite/scyther.p.png'
import img124 from '../../assets/Img/pokemonsSprite/jynx.p.png'
import img125 from '../../assets/Img/pokemonsSprite/electabuzz.p.png'
import img126 from '../../assets/Img/pokemonsSprite/magmar.p.png'
import img127 from '../../assets/Img/pokemonsSprite/pinsir.p.png'
import img128 from '../../assets/Img/pokemonsSprite/tauros.p.png'
import img129 from '../../assets/Img/pokemonsSprite/magikarp.p.png'
import img130 from '../../assets/Img/pokemonsSprite/gyarados.p.png'
import img131 from '../../assets/Img/pokemonsSprite/lapras.p.png'
import img132 from '../../assets/Img/pokemonsSprite/ditto.p.png'
import img133 from '../../assets/Img/pokemonsSprite/eevee.p.png'
import img134 from '../../assets/Img/pokemonsSprite/vaporeon.p.png'
import img135 from '../../assets/Img/pokemonsSprite/jolteon.p.png'
import img136 from '../../assets/Img/pokemonsSprite/flareon.p.png'
import img137 from '../../assets/Img/pokemonsSprite/porygon.p.png'
import img138 from '../../assets/Img/pokemonsSprite/omanyte.p.png'
import img139 from '../../assets/Img/pokemonsSprite/omastar.p.png'
import img140 from '../../assets/Img/pokemonsSprite/kabuto.p.png'
import img141 from '../../assets/Img/pokemonsSprite/kabutops.p.png'
import img142 from '../../assets/Img/pokemonsSprite/aerodactyl.p.png'
import img143 from '../../assets/Img/pokemonsSprite/snorlax.p.png'
import img144 from '../../assets/Img/pokemonsSprite/articuno.p.png'
import img145 from '../../assets/Img/pokemonsSprite/zapdos.p.png'
import img146 from '../../assets/Img/pokemonsSprite/moltres.p.png'
import img147 from '../../assets/Img/pokemonsSprite/dratini.p.png'
import img148 from '../../assets/Img/pokemonsSprite/dragonair.p.png'
import img149 from '../../assets/Img/pokemonsSprite/dragonite.p.png'
import img150 from '../../assets/Img/pokemonsSprite/mewtwo.p.png'
import img151 from '../../assets/Img/pokemonsSprite/mew.p.png'








interface Pokemon {
  id: number
  name: string
  image: string
}

interface PokemonDetails {
  name: string
  sprites: {
    front_default: string
  }
  height: number
  weight: number
  types: { type: { name: string } }[]
}

const Home: React.FC = () => {
  // Removed duplicate handleSearch function
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)


  const handleShowMore = () => {
    setShowMore(true)
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = [
        { id: 1, name: 'Bulbasaur', image: img001 },
        { id: 2, name: 'Ivysaur', image: img002 },
        { id: 3, name: 'Venusaur', image: img003 },
        { id: 4, name: 'Charmander', image: img004 },
        { id: 5, name: 'Charmeleon', image: img005 },
        { id: 6, name: 'Charizard', image: img006 },
        { id: 7, name: 'Squirtle', image: img007 },
        { id: 8, name: 'Wartortle', image: img008 },
        { id: 9, name: 'Blastoise', image: img009 },
        { id: 10, name: 'Caterpie', image: img010 },
        { id: 11, name: 'Metapod', image: img011 },
        { id: 12, name: 'Butterfree', image: img012 },
        { id: 13, name: 'Weedle', image: img013 },
        { id: 14, name: 'Kakuna', image: img014 },
        { id: 15, name: 'Beedrill', image: img015 },
        { id: 16, name: 'Pidgey', image: img016 },
        { id: 17, name: 'Pidgeotto', image: img017 },
        { id: 18, name: 'Pidgeot', image: img018 },
        { id: 19, name: 'Rattata', image: img019 },
        { id: 20, name: 'Raticate', image: img020 },
        { id: 21, name: 'Spearow', image: img021 },
        { id: 22, name: 'Fearow', image: img022 },
        { id: 23, name: 'Ekans', image: img023 },
        { id: 24, name: 'Arbok', image: img024 },
        { id: 25, name: 'Pikachu', image: img025 },
        { id: 26, name: 'Raichu', image: img026 },
        { id: 27, name: 'Sandshrew', image: img027 },
        { id: 28, name: 'Sandslash', image: img028 },
        { id: 29, name: 'Nidoran-f', image: img029 },
        { id: 30, name: 'Nidorina', image: img030 },
        { id: 31, name: 'Nidoqueen', image: img031 },
        { id: 32, name: 'Nidoran-m', image: img032 },
        { id: 33, name: 'Nidorino', image: img033 },
        { id: 34, name: 'Nidoking', image: img034 },
        { id: 35, name: 'Clefairy', image: img035 },
        { id: 36, name: 'Clefable', image: img036 },
        { id: 37, name: 'Vulpix', image: img037 },
        { id: 38, name: 'Ninetales', image: img038 },
        { id: 39, name: 'Jigglypuff', image: img039 },
        { id: 40, name: 'Wigglytuff', image: img040 },
        { id: 41, name: 'Zubat', image: img041 },
        { id: 42, name: 'Golbat', image: img042 },
        { id: 43, name: 'Oddish', image: img043 },
        { id: 44, name: 'Gloom', image: img044 },
        { id: 45, name: 'Vileplume', image: img045 },
        { id: 46, name: 'Paras', image: img046 },
        { id: 47, name: 'Parasect', image: img047 },
        { id: 48, name: 'Venonat', image: img048 },
        { id: 49, name: 'Venomoth', image: img049 },
        { id: 50, name: 'Diglett', image: img050 },
        { id: 51, name: 'Dugtrio', image: img051 },
        { id: 52, name: 'Meowth', image: img052 },
        { id: 53, name: 'Persian', image: img053 },
        { id: 54, name: 'Psyduck', image: img054 },
        { id: 55, name: 'Golduck', image: img055 },
        { id: 56, name: 'Mankey', image: img056 },
        { id: 57, name: 'Primeape', image: img057 },
        { id: 58, name: 'Growlithe', image: img058 },
        { id: 59, name: 'Arcanine', image: img059 },
        { id: 60, name: 'Poliwag', image: img060 },
        { id: 61, name: 'Poliwhirl', image: img061 },
        { id: 62, name: 'Poliwrath', image: img062 },
        { id: 63, name: 'Abra', image: img063 },
        { id: 64, name: 'Kadabra', image: img064 },
        { id: 65, name: 'Alakazam', image: img065 },
        { id: 66, name: 'Machop', image: img066 },
        { id: 67, name: 'Machoke', image: img067 },
        { id: 68, name: 'Machamp', image: img068 },
        { id: 69, name: 'Bellsprout', image: img069 },
        { id: 70, name: 'Weepinbell', image: img070 },
        { id: 71, name: 'Victreebel', image: img071 },
        { id: 72, name: 'Tentacool', image: img072 },
        { id: 73, name: 'Tentacruel', image: img073 },
        { id: 74, name: 'Geodude', image: img074 },
        { id: 75, name: 'Graveler', image: img075 },
        { id: 76, name: 'Golem', image: img076 },
        { id: 77, name: 'Ponyta', image: img077 },
        { id: 78, name: 'Rapidash', image: img078 },
        { id: 79, name: 'Slowpoke', image: img079 },
        { id: 80, name: 'Slowbro', image: img080 },
        { id: 81, name: 'Magnemite', image: img081 },
        { id: 82, name: 'Magneton', image: img082 },
        { id: 83, name: 'Farfetchd', image: img083 },
        { id: 84, name: 'Doduo', image: img084 },
        { id: 85, name: 'Dodrio', image: img085 },
        { id: 86, name: 'Seel', image: img086 },
        { id: 87, name: 'Dewgong', image: img087 },
        { id: 88, name: 'Grimer', image: img088 },
        { id: 89, name: 'Muk', image: img089 },
        { id: 90, name: 'Shellder', image: img090 },
        { id: 91, name: 'Cloyster', image: img091 },
        { id: 92, name: 'Gastly', image: img092 },
        { id: 93, name: 'Haunter', image: img093 },
        { id: 94, name: 'Gengar', image: img094 },
        { id: 95, name: 'Onix', image: img095 },
        { id: 96, name: 'Drowzee', image: img096 },
        { id: 97, name: 'Hypno', image: img097 },
        { id: 98, name: 'Krabby', image: img098 },
        { id: 99, name: 'Kingler', image: img099 },
        { id: 100, name: 'Voltorb', image: img100 },
        { id: 101, name: 'Electrode', image: img101 },
        { id: 102, name: 'Exeggcute', image: img102 },
        { id: 103, name: 'Exeggutor', image: img103 },
        { id: 104, name: 'Cubone', image: img104 },
        { id: 105, name: 'Marowak', image: img105 },
        { id: 106, name: 'Hitmonlee', image: img106 },
        { id: 107, name: 'Hitmonchan', image: img107 },
        { id: 108, name: 'Lickitung', image: img108 },
        { id: 109, name: 'Koffing', image: img109 },
        { id: 110, name: 'Weezing', image: img110 },
        { id: 111, name: 'Rhyhorn', image: img111 },
        { id: 112, name: 'Rhydon', image: img112 },
        { id: 113, name: 'Chansey', image: img113 },
        { id: 114, name: 'Tangela', image: img114 },
        { id: 115, name: 'Kangaskhan', image: img115 },
        { id: 116, name: 'Horsea', image: img116 },
        { id: 117, name: 'Seadra', image: img117 },
        { id: 118, name: 'Goldeen', image: img118 },
        { id: 119, name: 'Seaking', image: img119 },
        { id: 120, name: 'Staryu', image: img120 },
        { id: 121, name: 'Starmie', image: img121 },
        { id: 122, name: 'Mr-mime', image: img122 },
        { id: 123, name: 'Scyther', image: img123 },
        { id: 124, name: 'Jynx', image: img124 },
        { id: 125, name: 'Electabuzz', image: img125 },
        { id: 126, name: 'Magmar', image: img126 },
        { id: 127, name: 'Pinsir', image: img127 },
        { id: 128, name: 'Tauros', image: img128 },
        { id: 129, name: 'Magikarp', image: img129 },
        { id: 130, name: 'Gyarados', image: img130 },
        { id: 131, name: 'Lapras', image: img131 },
        { id: 132, name: 'Ditto', image: img132 },
        { id: 133, name: 'Eevee', image: img133 },
        { id: 134, name: 'Vaporeon', image: img134 },
        { id: 135, name: 'Jolteon', image: img135 },
        { id: 136, name: 'Flareon', image: img136 },
        { id: 137, name: 'Porygon', image: img137 },
        { id: 138, name: 'Omanyte', image: img138 },
        { id: 139, name: 'Omastar', image: img139 },
        { id: 140, name: 'Kabuto', image: img140 },
        { id: 141, name: 'Kabutops', image: img141 },
        { id: 142, name: 'Aerodactyl', image: img142 },
        { id: 143, name: 'Snorlax', image: img143 },
        { id: 144, name: 'Articuno', image: img144 },
        { id: 145, name: 'Zapdos', image: img145 },
        { id: 146, name: 'Moltres', image: img146 },
        { id: 147, name: 'Dratini', image: img147 },
        { id: 148, name: 'Dragonair', image: img148 },
        { id: 149, name: 'Dragonite', image: img149 },
        { id: 150, name: 'Mewtwo', image: img150 },
        { id: 151, name: 'Mew', image: img151 },

      ]
      setPokemons(pokemonData)
      setFilteredPokemons(pokemonData)
      setLoading(false)
    }

    fetchPokemons()
  }, [])

  const handleSearch = (searchTerm: string) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPokemons(filtered)
  }





  const handlePokemonClick = async (name: string) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setSelectedPokemon(response.data)
      setIsModalOpen(true) // Abre o modal
    } catch (error) {
      console.error('Erro ao buscar os detalhes do Pokémon:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false) // Fecha o modal
    setSelectedPokemon(null)
  }

  return (
    <Container>
      <Header onSearch={handleSearch} />
     
      {loading ? (
        <p>Carregando Pokémons...</p>
      ) : (
        <>
          <div className="pokemon-container">
            {filteredPokemons.map((pokemon) => (
              <div key={pokemon.id} className="pokemon" onClick={() => handlePokemonClick(pokemon.name)}>
                <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                <h1 className="pokemon-name">{pokemon.name}</h1>
              </div>
            ))}
          </div>

          {isModalOpen && selectedPokemon && (
  <Modal onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={closeModal}>
        &times;
      </button>
      <h2>{selectedPokemon.name}</h2>
      <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
      <p>Height: {selectedPokemon.height}</p>
      <p>Weight: {selectedPokemon.weight}</p>
      <p>Types: {selectedPokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
    </div>
  </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export default Home