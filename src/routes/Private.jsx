import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setLoading } from "@features/loading";
import { logout } from "@features/auth"
import { Navigate, redirect } from "react-router-dom";

import Loading from "../components/alerts/Loading";
import { useSelector } from "react-redux";

const Private = ({ children }) => {

    const auth = useSelector(state => state.auth.isToken)

    const dispatch = useDispatch()

    const [signed, setSigned] = useState(null)

    useEffect(() => {
        if (auth === false) {
            setSigned(false)
            dispatch(logout())
            dispatch(setLoading(false))
        } else {
            setSigned(true)
            dispatch(setLoading(false))
        }
    }, [auth])

    if (auth === null) {
        return (
            <div className="flex w-full justify-center mt-10">
                <Loading />
            </div>
        )
    }

    if (auth === false) {
        return <Navigate to={'/login'} />
    }

    return children

}

export default Private