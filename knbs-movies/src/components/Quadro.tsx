import styles from "../styles/Quadro.module.css"
import Filme from "./Filme"
import filmes from "../pages/api/fakeapi.json"
export default function Quadro() {
    function renderizarFilmes() {
        return filmes.results.map(listaFilmes => {
            return listaFilmes.known_for.map(filme => {
                if (filme.adult != true && filme.original_title != undefined && filme.genre_ids[0] != 18) {
                    return <Filme key={filme.id} src={filme.poster_path} title={filme.original_title} overview={filme.overview}></Filme>
                }
            })
        }

        )

    }
    return (
        <div className={styles["container"]}>
            <h1>Recommended Movies</h1>
            <div className={styles["container"]}>
                {renderizarFilmes()}
            </div>
        </div>
    )
}