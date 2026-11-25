import { filmesIniciais } from "./data/filmes.js";

function esperar(ms) {
    return new Promise((ok) => setTimeout(ok, ms));
}

export async function listar() {
    // throw new Error('Falha na renderização');
    await esperar(500); // simula a rede
    return filmesIniciais;
}