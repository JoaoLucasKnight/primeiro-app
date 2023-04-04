import logo from '../../assets/LogoCB.png'

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo:{
        titulo: "Destahes da cesta",
    },
    
    desc: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Fazenda Cachorro Bravo",
        descricao: "Uma cesta de produtos selecionados cuidadosamente da fazenda diretamente para a sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },

    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
    }
    
    export default cesta;

