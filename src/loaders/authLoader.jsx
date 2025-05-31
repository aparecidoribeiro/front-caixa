import { redirect } from "react-router-dom"


export const authLoader = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
        return redirect('/login')
    }

}