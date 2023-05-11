/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Filmes.module.css"
import ModalOverview from "./ModalOverview"
interface propsFilmes {
    src: string,
    title: string,
    overview: string
}
export default function Filmes(props: propsFilmes) {
    return (
        <>
            <div className={styles["container"]}>
                <img width={"150vw"} height={"225vh"} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.src} alt={props.title}></img>
                <p>{props.title}</p>
            </div>
            <ModalOverview></ModalOverview>
        </>
    )
}