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