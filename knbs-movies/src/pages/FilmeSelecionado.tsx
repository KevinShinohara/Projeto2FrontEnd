/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
export default function FilmeSelecionado() {
    const { query } = useRouter();
    const [filme, setFilme] = useState<any>()
    useEffect(() => {

        if (query.id != undefined) {
            obterFilme();
        }

    }, [query])

    async function obterFilme() {
        const res = await axios.get("https://api.themoviedb.org/3/movie/" + query.id, {
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGFiMGY2MjgzMTZhNTU3MmY2NmIyNWMzZjY4NGQwNCIsInN1YiI6IjY0NWIxMTk0MWI3MGFlMDE0NWVlYjFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qAEZ8u8C08cAedTLjTwW0Akh7EpkRcxlHZ89tjolgq0"
            }
        })
        if (res.status == 200) {
            console.log(res.data)
            setFilme(res.data)
        }
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10vh",backgroundColor:"#4D41C0" }}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", backgroundColor:"#313338",width:"80vw",height:"90vh",borderRadius:"2vw", boxShadow:"10px 10px 10px #091b4c"}}>
                    <a href="/" style={{position:"relative", left:"-35vw", color:"white",textDecoration:"none", fontSize:"25px", backgroundColor:"rgba(0,0,160,1)",paddingTop:"0.5vw",paddingBottom:"0.5vw",paddingRight:"2vw",paddingLeft:"2vw",textAlign:"center",borderRadius:"1vw"}}>Voltar</a>
                    {filme != undefined && <>
                        <div >
                            <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + filme.poster_path} alt={filme.original_title}></img>
                            <p style={{textAlign:"center", fontSize:"20px",color:"white"}}>{filme.original_title}</p>
                        </div>
                        <div style={{ width: "30vw" }}>
                            <p style={{ fontSize: "25px", color:"white" }}>
                                {filme.overview}
                            </p>
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}