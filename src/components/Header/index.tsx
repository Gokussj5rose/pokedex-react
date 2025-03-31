import React, { useState } from 'react'
import { Container } from '../Header/styles'
import pokeball from '../../assets/Img/pokeball.png'
import lupa from '../../assets/Img/icons/lupa.png'

interface HeaderProps {
  onSearch: (searchTerm: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm) // Chama a função de busca passando o termo digitado
  }

  return (
    <Container>
      <div>
        <a href="http://localhost:5173/"><img src={pokeball} className="poke" alt="Pokeball" /></a>
      </div>

      <div>
        <img
          src={lupa}
          className="lupa"
          alt="Lupa"
          onClick={() => {
            setIsSearchVisible(!isSearchVisible) // Mostra ou esconde o campo de busca
            if (isSearchVisible) handleSearch() // Realiza a busca ao clicar na lupa novamente
          }}
        />
      </div>
      

      {isSearchVisible && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Procure um Pokémon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Buscar
          </button>
          
        </div>
        
      )}
    </Container>
  )
}

export default Header