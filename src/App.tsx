import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div>
        <h2 className="titulo_front_end">Trabalho Front End AV2</h2>
        <p className="subtitulo_front_end">
          Começando a estrutura do projeto React + Typescript.
        </p>
        <Header />
        <Card />
      </div>
    </>
  )
}

export default App
