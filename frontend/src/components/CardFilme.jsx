function estrelas(nota) {
    return "★".repeat(nota) + "✩".repeat(5 - nota);
}

const ROTULOS = {
    assistido: "Assistido",
    assistindo: "Assistindo",
    quero: "Quero assistir",
}

export default function CardFilme({ filme, aoEditar, aoRemover }) {
    return (
        <article className="card">
            <img src={filme.poster} alt="" />
            <h2>{filme.titulo}</h2>
            <p>{filme.ano} · {filme.genero}</p>
            <p>Nota: <span className="nota">{estrelas(filme.nota)}</span></p>
            <p><span className="badge {filme.status}">{filme.status}</span></p>
            <div className="acoes">
                <button onClick={() => aoEditar(filme)}>
                    Editar
                </button>
                <button onClick={() => aoRemover(filme.id)}>
                    Remover
                </button>
            </div>
        </article>
    );
}