/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import styles from "../styles/Filmes.module.css"
import ModalOverview from "./ModalOverview"
interface propsFilmes {
    src: string,
    id:number,
    title: string,
    overview: string
}
export default function Filmes(props: propsFilmes) {
    const[exibirModalFocus,setExibitModalFocus] = useState(false);
    function fecharModal(){
        setExibitModalFocus(false)
    }
    return (
        <>
            <div className={styles["container"]}>
                <img width={"150vw"} height={"225vh"} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.src} alt={props.title} onMouseEnter={()=>setExibitModalFocus(true)}></img>
                <p>{props.title}</p>
                {exibirModalFocus&&<ModalOverview src={props.src} title={props.title} id={props.id} fechar={fecharModal}></ModalOverview>}
            </div>

        </>
    )
}