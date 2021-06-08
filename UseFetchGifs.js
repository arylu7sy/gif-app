import { useEffect, useState } from "react"
import { getGifs } from "./GetGifs"



export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getGifs(category)
            .then(gifs => setstate({
                    data: gifs,
                    loading: false
                }))
    }, [category])

    return state
}