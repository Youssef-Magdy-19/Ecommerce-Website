import { useEffect } from "react"

export const WindowScrollToTop =()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
}
