import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@features/loading";
import { logout } from "@features/auth"

import api from "@services/api";
import { useState } from "react";


const AuthAuthorization = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('user'))

    const [userAuth, setUserAuth] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading(false))

        const checkAuth = async () => {
            if (user) {
                dispatch(setLoading(true))

                try {
                    await api({
                        method: 'get',
                        url: `transactions`,
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${user.token}`,
                            'Content-Type': 'application/json'
                        }
                    })
                    setUserAuth(true)
                    dispatch(setLoading(false))
                }
                catch (err) {
                    dispatch(logout())
                }

                dispatch(setLoading(false))
            }
        }

        checkAuth()

    }, [])


    return userAuth ? children : ""
}

export default AuthAuthorization;