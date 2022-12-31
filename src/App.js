import './App.css';
import Testimonio from './componentes/testimonios'

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
      <h1>Testimonios de Nuestra Universidad.</h1>
      </div>
      <Testimonio 
      nombre='Maro Martinez'
      pais='Chile'
      imagen='maro'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='Laborum ullamco fugiat dolore aliqua enim nostrud voluptate laborum deserunt irure. Tempor cupidatat Lorem in officia ex aute velit commodo cillum aute veniam. Eu et ut aliquip est. Nostrud non duis ipsum laboris esse. Exercitation duis sit consequat laborum do aute quis velit labore Lorem ipsum consectetur aliquip.' />
      <Testimonio 
      nombre='Raul Bostian'
      pais='Suecia'
      imagen='raul'
      cargo='Ingeniero de Software'
      empresa='Spotify'
      testimonio='Laborum ullamco fugiat dolore aliqua enim nostrud voluptate laborum deserunt irure. Tempor cupidatat Lorem in officia ex aute velit commodo cillum aute veniam. Eu et ut aliquip est. Nostrud non duis ipsum laboris esse. Exercitation duis sit consequat laborum do aute quis velit labore Lorem ipsum consectetur aliquip.' />
      
    <Testimonio 
      nombre='Emma Rosas'
      pais='Venezuela'
      imagen='emma'
      cargo='Ingeniero de Software'
      empresa='NTTData'
      testimonio='Laborum ullamco fugiat dolore aliqua enim nostrud voluptate laborum deserunt irure. Tempor cupidatat Lorem in officia ex aute velit commodo cillum aute veniam. Eu et ut aliquip est. Nostrud non duis ipsum laboris esse. Exercitation duis sit consequat laborum do aute quis velit labore Lorem ipsum consectetur aliquip.'  />
    </div>
  );
}

export default App;
