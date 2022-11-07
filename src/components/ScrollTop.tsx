import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export function ScrollTop() {
    const GoToTop = () => {
        const routePath = useLocation()
        const onTop = () => {
           window.scrollTo(0, 0)
        }
        useEffect(() => {
           onTop()
        }, [routePath])
  
        return null
     }
     GoToTop()
}