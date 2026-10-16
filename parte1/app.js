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
        url: "https://www.themoviedb.org/t/p/w600_and_h900_face/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg",
        nota: 5,
        status: "assistido",
        comentario: ""
    },
    {
        id: 2,
        titulo: "Parasita",
        ano: 2019,
        genero: "Suspense",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_face/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        nota: 4,
        status: "assistido",
        comentario: ""
    },
    {
        id: 3,
        titulo: "O Auto da Compadecida",
        ano: 2000,
        genero: "Comédia",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_face/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
        nota: 5,
        status: "assistido",
        comentario: ""
    },
    {
        id: 4,
        titulo: "Duna: Parte Dois",
        ano: 2024,
        genero: "Ficção científica",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_face/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
        nota: 4,
        status: "assistindo",
        comentario: ""
    },
    {
        id: 5,
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
        nota: 5,
        status: "quero",
        comentario: ""
    },
    {
        id: 6,
        titulo: "Cidade de Deus",
        ano: 2002,
        genero: "Drama",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_face/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
        nota: 4,
        status: "quero",
        comentario: ""
    }
]

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-remover");
    if (!botao) return; // clicou em outra coisa
    if (!confirm("Remover este filme?")) return;
    const card = botao.closest(".card");
    const id = Number(card.dataset.id);
    filmes = filmes.filter((f) => f.id !== id);

    // renderizarCards(filmes);
    filmes = filmes.filter((f) => f.id !== id);
    salvar();
    atualizar();
});

nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
    const botao = e.target.closest("button");
    if (!botao) return;
    nav.querySelector(".ativo")
        .classList.remove("ativo");
    botao.classList.add("ativo");
    // const status = botao.dataset.status;
    // renderizarCards(filmes.filter((f) =>
    //     status === "todos" || f.status === status));
    statusAtual = botao.dataset.status;
    atualizar();
});

let editandoId = null; // null: adicionando
const modal = document.querySelector("#modal");
const form = document.querySelector("#form-filme");
const abrir = () => modal.hidden = false;
const fechar = () => modal.hidden = true;
document.querySelector("header button")
    .addEventListener("click", () => {
        editandoId = null;
        form.reset();
        abrir();
    });

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) {
        salvar();
        fechar();
    }
});

const cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", () => {
    salvar();
    fechar();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados =
        Object.fromEntries(new FormData(form));
    dados.ano = Number(dados.ano);
    dados.nota = Number(dados.nota);

    const { valido, erros } = validarFilme(dados);
    if (!valido) { alert(erros.join("\n")); return; }

    if (editandoId !== null) {
        filmes = filmes.map((f) =>
            f.id === editandoId
                ? { ...f, ...dados } : f);
    } else {
        filmes = [...filmes,
            { id: gerarId(filmes), ...dados }];
    }

    // renderizarCards(filmes);
    salvar();
    atualizar();
    fechar();
});

function validarFilme(filme) {
    const erros = [];
    if (!filme.titulo)
        erros.push("Título obrigatório");
    if (!filme.ano)
        erros.push("Ano obrigatório");
    if (filme.ano < 1888 || filme.ano > 2030)
        erros.push("Ano inválido");
    if (!filme.genero)
        erros.push("Gênero obrigatório");
    if (!filme.url)
        erros.push("URL do pôster obrigatória");
    if (!filme.nota)
        erros.push("Nota obrigatória")
    if (filme.nota < 1 || filme.nota > 5)
        erros.push("Nota inválida");
    return { valido: erros.length === 0, erros };
}

// function renderizarCards(filmes) {
//     const cards = filmes.map((f) => `
//         <article class="card" data-id="${f.id}">
//             <img src=${f.poster} alt="Poster de ${f.titulo}" width="200">
//             <h2>${f.titulo}</h2>
//             <p>${f.ano} - ${f.genero}<p>
//             <p>Nota: <span class="nota">${estrelas(f.nota)}</span></p>
//             <p><span class="badge ${f.status}">${rotuloStatus(f.status)}</span></p>
//             <div class="acoes">
//                 <button class="btn-editar">Editar</button>
//                 <button class="btn-remover">Remover</button>
//             </div>
//         </article>`).join("");
//     lista.innerHTML = cards;
// }

function criarCard(f) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = f.id;

    const url = document.createElement("img");
    url.src = `${f.url}`
    url.alt = `Poster de ${f.titulo}`
    url.width = 200;
    card.append(url)

    const titulo = document.createElement("h2");
    titulo.textContent = f.titulo; // nunca HTML
    card.append(titulo);
    
    const ano_genero = document.createElement("p");
    ano_genero.textContent = `${f.ano} - ${f.genero}`;
    card.append(ano_genero);

    const nota = document.createElement("p");
    nota.textContent = "Nota: ";
    const nota_span = document.createElement("span");
    nota_span.className = "nota";
    nota_span.textContent = estrelas(f.nota);
    nota.append(nota_span);
    card.append(nota);

    const status = document.createElement("p");
    const status_span = document.createElement("span");
    status_span.className = `badge ${f.status}`;
    status_span.textContent = rotuloStatus(f.status);
    status.append(status_span);
    card.append(status);

    const acoes = document.createElement("div");
    acoes.className = "acoes";
    const editar = document.createElement("button");
    editar.className = "btn-editar";
    editar.textContent = "Editar";
    const remover = document.createElement("button");
    remover.className = "btn-remover";
    remover.textContent = "Remover";
    acoes.append(editar);
    acoes.append(remover);
    card.append(acoes);

    return card;
}

function renderizarCards(filmes) {
    const frag = document.createDocumentFragment();
    filmes.forEach((f) =>
        frag.appendChild(criarCard(f)));
    lista.replaceChildren(frag); // uma operação
}

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-editar");
    if (!botao) return;
    const card = botao.closest(".card");
    editandoId = Number(card.dataset.id);
    const f = filmes.find((x) => x.id === editandoId);
    form.elements.titulo.value = f.titulo;
    form.elements.ano.value = f.ano;
    form.elements.genero.value = f.genero;
    form.elements.url.value = f.url;
    form.elements.nota.value = f.nota;
    form.elements.status.value = f.status;
    abrir();
})

const gerarId = (lista) =>
    Math.max(0, ...lista.map((f) => f.id)) + 1;

let termoAtual = "";
let statusAtual = "todos";

function aplicarFiltros(lista, opcoes) {
    const termo = opcoes.termo.toLowerCase();
    return lista
        .filter((f) => f.titulo.toLowerCase().includes(termo))
        .filter((f) => opcoes.status === "todos" || f.status === opcoes.status);
}

function atualizar() {
    const visiveis = aplicarFiltros(filmes,
        { termo: termoAtual, status: statusAtual });
    renderizarCards(visiveis);
}

function debounce(fn, ms = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    }
}

const busca = document.querySelector("header input");

const aoDigitar = (e) => {
    termoAtual = e.target.value;
    atualizar();
}

busca.addEventListener("input", debounce(aoDigitar, 300));

const CHAVE = "cinetrack:filmes";
const salvar = () => localStorage.setItem(CHAVE, JSON.stringify(filmes));
function carregar() {
    const txt = localStorage.getItem(CHAVE);
    return txt
        ? JSON.parse(txt)
        : [...filmesIniciais];
}

// let filmes = [...filmesIniciais]
let filmes = carregar();

renderizarCards(filmes);