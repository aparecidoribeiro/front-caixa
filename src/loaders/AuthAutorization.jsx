import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@features/loading";
import { logout, setToken } from "@features/auth"

import api from "@services/api";


const AuthAuthorization = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('user'))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading(false))


        const checkAuth = async () => {
            if (user) {
                dispatch(setLoading(true))

                try {
                    await api({
                        method: 'get',
                        url: `auth/validate`,
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${user.token}`,
                            'Content-Type': 'application/json'
                        }
                    })

                    dispatch(setToken(true))
                } catch (err) {
                    dispatch(setToken(false))
                    dispatch(logout())
                }

            }
        }

        checkAuth()

    }, [])


    return children
}

export default AuthAuthorization;