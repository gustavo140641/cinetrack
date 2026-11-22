import { useState } from "react";
import { filmesIniciais, gerarId }
  from "./data/filmes.js";
import Header from "./components/Header.jsx";
import Filtros from "./components/Filtros.jsx";
import ListaFilmes from "./components/ListaFilmes.jsx";
import ModalFilme from "./components/ModalFilme.jsx";

function App() {
  const [editando, setEditando] = useState(null);
  const [filmes, setFilmes] = useState(filmesIniciais);
  const [status, setStatus] = useState("todos");
  const [busca, setBusca] = useState("");
  const visiveis = filmes
    .filter((filme) => status === "todos" || filme.status === status)
    .filter((filme) => filme.titulo
      .toLowerCase()
      .includes(busca.toLowerCase()));

  function adicionar(novoFilme) {
    setFilmes((anteriores) => [
      ...anteriores, { ...novoFilme, id: gerarId(anteriores) }
    ]);
  }

  function remover(id) {
    setFilmes((prevFilmes) =>
      prevFilmes.filter((filme) => filme.id !== id))
  }

  function editar(id, alteracoes) {
    setFilmes((filmesAtuais) =>
      filmesAtuais.map((filme) =>
        filme.id === id ? { ...filme, ...alteracoes } : filme
      )
    );
  };

  // function editar(id, alteracoes) {
  //   setFilmes(function (filmesAtuais) {
  //     return filmesAtuais.map(function (filme) {
  //       if (filme.id === id) {
  //         return { ...filme, ...alteracoes };
  //       }
  //       return filme;
  //     });
  //   });
  // }

  function salvar(dados) {
    if (editando.id) {
      editar(editando.id, dados);
    } else {
      adicionar(dados);
    }
    
    setEditando(null);
  }
  
  return (
    <>
    <Header 
      busca={busca}
      aoBuscar={setBusca}
      aoAdicionar={() => setEditando({})}
    />
    <Filtros 
      ativo={status}
      aoMudar={setStatus}
    />
    <ListaFilmes
      filmes={visiveis}
      aoEditar={setEditando}
      aoRemover={remover}
    />
    {editando !== null && (
      <ModalFilme
        filme={editando}
        aoSalvar={salvar}
        aoFechar={() => setEditando(null)}
      />
    )}
    </>
  );
}

export default App;

// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
