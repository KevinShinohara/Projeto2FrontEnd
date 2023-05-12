import styles from "../styles/ModalOverview.module.css"
import { useRouter } from "next/router"
interface PropsModalOverview {
    src: string,
    title: string,
    fechar: ()=>any,
    id:number
}
export default function ModalOverview(props: PropsModalOverview) {
    const router = useRouter();
    return (
        <div className={styles["window"]} onMouseLeave={()=>props.fechar()}>
            <img className={styles["image"]} width={"300vw"} height={"400vh"} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.src} alt={props.title} onClick={()=>router.push("/FilmeSelecionado/?id="+props.id)}></img>
            
        </div>
    )
}