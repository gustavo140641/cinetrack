import CardFilme from "./CardFilme.jsx";
export default function ListaFilmes({ filmes }) {
    return (
        <section id="lista" aria-live="polite">
            {filmes.map((f) => (
                <CardFilme key={f.id} filme={f} />
            ))}
        </section>
    );
}