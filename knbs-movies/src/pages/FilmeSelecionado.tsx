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
            <div style={{ display: "flex" }}>
                {filme != undefined && <>
                    <div >
                        <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + filme.poster_path} alt={filme.original_title}></img>
                        <p>{filme.original_title}</p>
                    </div>
                    <div style={{ width: "30vw" }}>
                        <p>
                            {filme.overview}
                        </p>
                    </div>
                </>}
            </div>
        </>
    )
}