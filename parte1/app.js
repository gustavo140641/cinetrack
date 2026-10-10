function rotuloStatus(status) {
    if (status === "assistido") {
        return "Assistido";
    } else if (status === "assistindo") {
        return "Assistindo";
    } else if (status === "quero") {
        return "Quero assistir";
    } else {
        return status;
    }
}

const estrelas = nota => {
    let resultado = "";
    for (let i = 1; i <= 5; i++) {
        resultado += i <= nota ? "★" : "☆";
        resultado += " ";
    }
    return resultado;
}

function atualizarRodape() {
    const TOTAL = 6;

    const rodape = document.querySelector("#copyright");
    
    rodape.textContent = `CineTrack © 2026 · ${TOTAL} filmes cadastrados.`;
}

atualizarRodape();

const filmesIniciais = [
    {
        id: 1,
        titulo: "A Origem",
        ano: 2010,
        genero: "Ficção científica",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg",
        nota: 5,
        status: "assistido",
        comentario: ""
    },
    {
        id: 2,
        titulo: "Parasita",
        ano: 2019,
        genero: "Suspense",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        nota: 4,
        status: "assistido",
        comentario: ""
    },
    {
        id: 3,
        titulo: "O Auto da Compadecida",
        ano: 2000,
        genero: "Comédia",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
        nota: 5,
        status: "assistido",
        comentario: ""
    },
    {
        id: 4,
        titulo: "Duna: Parte Dois",
        ano: 2024,
        genero: "Ficção científica",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
        nota: 4,
        status: "assistindo",
        comentario: ""
    },
    {
        id: 5,
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
        nota: 5,
        status: "quero",
        comentario: ""
    },
    {
        id: 6,
        titulo: "Cidade de Deus",
        ano: 2002,
        genero: "Drama",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
        nota: 4,
        status: "quero",
        comentario: ""
    }
]

function renderizarCards(filmes) {
    const cards = filmes.map((f) => `
        <article class="card" data-id="${f.id}">
            <img src=${f.poster} alt="Poster de ${f.titulo}" width="200">
            <h2>${f.titulo}</h2>
            <p>${f.ano} - ${f.genero}<p>
            <p>Nota: <span class="nota">${estrelas(f.nota)}</span></p>
            <p><span class="badge ${f.status}">${rotuloStatus(f.status)}</span></p>
            <div class="acoes">
                <button class="btn-editar">Editar</button>
                <button class="btn-remover">Remover</button>
            </div>
        </article>`).join("");
    lista.innerHTML = cards;
}

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-remover");
    if (!botao) return; // clicou em outra coisa
    if (!confirm("Remover este filme?")) return;
    const card = botao.closest(".card");
    const id = Number(card.dataset.id);
    filmes = filmes.filter((f) => f.id !== id);
    renderizarCards(filmes);
});

nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
    const botao = e.target.closest("button");
    if (!botao) return;
    nav.querySelector(".ativo")
        .classList.remove("ativo");
    botao.classList.add("ativo");
    const status = botao.dataset.status;
    renderizarCards(filmes.filter((f) =>
        status === "todos" || f.status === status));
});

let filmes = [...filmesIniciais]

renderizarCards(filmes);