
import './App.css'; /*Importa os estilos e aplica aqui em App.js que ira para index.js que ira Renderizar tudo*/
/*Usamo Chaves para selecionar qual funçao queremos importar e precisamos por export antes da function no outro arquivo*/
import { Testimonio } from './Componentes/Testemonio';

function App() {
  return (
    <div className="App">
      <Testimonio  //Chamando a funçao e aplicando as configutraçoes de props
        nome="Lucas Pereira Campestrini"
        pais="Brasil"
        imagem="20220514_123126"
        cargo="Desenvolvedor De software FullStack"
        empresa="Freelancer Workana"
        testimonio="Gostaria de compartilhar com vocês a minha jornada incrível como Desenvolvedor de software. Trabalhar nesta Area revolucionária tem sido uma experiência verdadeiramente inspiradora e gratificante, e quero contar a vocês como cheguei aqui e o que torna essa Area tão " /> {/*Chama testimonio E determina configuraçoes das props*/}
    </div>
  );
}

export default App;
