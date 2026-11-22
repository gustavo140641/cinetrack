import { useState } from 'react';

const VAZIO = {
    titulo: "",
    ano: "",
    genero: "",
    poster: "",
    status: "quero",
    nota: 3,
};

export default function ModalFilme({
    filme, aoSalvar, aoFechar,
}) {
    const [dados, setDados] = useState({
        ...VAZIO,
        ...filme,
    }); /* spread merge */

    function atualizar(campo, valor) {
        setDados((anteriores) => ({
            ...anteriores,
            [campo]: valor,
        }));
    }

    function submeter(evento) {
        evento.preventDefault();
        aoSalvar({
            ...dados,
            ano: Number(dados.ano),
            nota: Number(dados.nota),
        });
    }
    
    return (
        <div id="modal">
            <div className="modal-conteudo">
                <form onSubmit={submeter}>
                    {/* um label e um campo por chave */}
                    <label>
                        Título
                        <input
                            type="text"
                            required
                            value={dados.titulo}
                            onChange={(e) => atualizar("titulo", e.target.value)}
                        />
                    </label>
                    <label>
                        Ano
                        <input
                            type="number"
                            required
                            value={dados.ano}
                            onChange={(e) => atualizar("ano", e.target.value)}
                        />
                    </label>
                    <label>
                        Gênero
                        <input
                            type="text"
                            required
                            value={dados.genero}
                            onChange={(e) => atualizar("genero", e.target.value)}
                        />
                    </label>
                    <label>
                        URL do Poster
                        <input
                            type="url"
                            value={dados.poster}
                            onChange={(e) => atualizar("poster", e.target.value)}
                        />
                    </label>
                    <label>
                        Status
                        <select
                            value={dados.status}
                            onChange={(e) => atualizar("status", e.target.value)}
                        >
                            <option value="quero">Quero assistir</option>
                            <option value="assistindo">Assistindo</option>
                            <option value="assistido">Assistido</option>
                        </select>
                    </label>
                    <label>
                        Nota (1 a 5)
                        <input
                            type="number"
                            min="1"
                            max="5"
                            value={dados.nota}
                            onChange={(e) => atualizar("nota", e.target.value)}
                        />
                    </label>
                    <div className="modal-acoes">
                        <button type="button" onClick={aoFechar}>Cancelar</button>
                        <button type="submit">Salvar</button>                        
                    </div>
                </form>
            </div>
        </div>
    );
}