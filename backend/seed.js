const fs = require("fs");
const path = require("path");

const filmes = [
    {
        id: 1,
        titulo: "A Origem",
        ano: 2010,
        genero: "Ficção científica",
        nota: 5,
        status: "assistido",
        comentario: "",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg",
    },
    {
        id: 2,
        titulo: "Parasita",
        ano: 2019,
        genero: "Suspense",
        nota: 4,
        status: "assistido",
        comentario: "",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg"
    },
    {
        id: 3,
        titulo: "O Auto da Compadecida",
        ano: 2000,
        genero: "Comédia",
        nota: 5,
        status: "assistido",
        comentario: "",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg"
    },
    {
        id: 4,
        titulo: "Duna: Parte Dois",
        ano: 2024,
        genero: "Ficção científica",
        nota: 4,
        status: "assistindo",
        comentario: "",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg"
    },
    {
        id: 5,
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        nota: 5,
        status: "quero",
        comentario: "",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg"
    },
    {
        id: 6,
        titulo: "Cidade de Deus",
        ano: 2002,
        genero: "Drama",
        nota: 4,
        status: "quero",
        comentario: "",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/gfnXixcGC060QcG6JPxN6AMdVsq.jpg"
    }
];

fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/filmes.json", JSON.stringify(filmes, null, 2));

// caminho absoluto, vale de qualquer pasta
const ARQUIVO = path.join(__dirname, "data", "filmes.json");

// cria a pasta data/ se não existir
fs.mkdirSync(path.dirname(ARQUIVO), { recursive: true });
fs.writeFileSync(ARQUIVO, JSON.stringify(filmes, null, 2), "utf8");

console.log(`Total: ${filmes.length} filmes`);