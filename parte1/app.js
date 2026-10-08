function rotuloStatus(status) {
    const card_badge = document.querySelector('.card .badge');
    if (status === "assistido") {
        card_badge.textContent = "Assistido";
        return "Assistido";
    } else if (status === "assistindo") {
        card_badge.textContent = "Assistindo";
        return "Assistindo";
    } else if (status === "quero") {
        card_badge.textContent = "Quero assistir";
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
    const card_nota = document.querySelector('.card .nota');
    card_nota.textContent = resultado;
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
        nota: "★ ★ ★ ★ ★",
        status: "assistido",
        comentario: ""
    },
    {
        id: 2,
        titulo: "Parasita",
        ano: 2019,
        genero: "Suspense",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        nota: "★ ★ ★ ★ ☆",
        status: "assistido",
        comentario: ""
    },
    {
        id: 3,
        titulo: "O Auto da Compadecida",
        ano: 2000,
        genero: "Comédia",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
        nota: "★ ★ ★ ★ ★",
        status: "assistido",
        comentario: ""
    },
    {
        id: 4,
        titulo: "Duna: Parte Dois",
        ano: 2024,
        genero: "Ficção científica",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
        nota: "★ ★ ★ ★ ☆",
        status: "assistindo",
        comentario: ""
    },
    {
        id: 5,
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
        nota: "★ ★ ★ ★ ★",
        status: "quero assistir",
        comentario: ""
    },
    {
        id: 6,
        titulo: "Cidade de Deus",
        ano: 2002,
        genero: "Drama",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
        nota: "★ ★ ★ ★ ☆",
        status: "quero assistir",
        comentario: ""
    }
]

function renderizarCards(filmes) {
    const cards = filmes.map((f) => `
        <article class="card" data-id="${f.id}">
            <img src=${f.poster} alt="Poster de ${f.titulo}" width="200">
            <h2>${f.titulo}</h2>
            <p>${f.ano} - ${f.genero}<p>
            <p>Nota: <span class="nota">${f.nota}</span></p>
            <p><span class="badge ${f.status}">${f.status}</span></p>
            <div class="acoes">
                <button>Editar</button>
                <button>Remover</button>
            </div>
        </article>`).join("");
    lista.innerHTML = cards;
}

renderizarCards(filmesIniciais);