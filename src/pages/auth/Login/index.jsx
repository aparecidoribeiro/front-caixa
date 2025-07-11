import { useState } from "react"
import { toast } from "react-toastify"

import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import AuthLink from "@components/links/AuthLink"
import { useSelector, useDispatch } from "react-redux"
import api from "@services/api"

//reducers
import { login } from '@features/auth.js'

import { validateEmail } from "@utils/validate"


//Features loading
import { setLoading } from '@features/loading.js'


const Login = () => {


    const auth = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const validateInputs = () => {
        if (!formData.email.trim() || !formData.password.trim()) {
            return true
        }
    }

    const loginUser = async (e) => {
        e.preventDefault();

        if (validateInputs()) {
            toast.error("Preencha todos os campos")
        }
        else if (!validateEmail(formData.email)) {
            toast.error("O e-mail inserido não é válido")
        }
        else {
            dispatch(setLoading(true))
            await api({
                method: 'post',
                url: 'auth/login',
                data: {
                    email: formData.email,
                    password: formData.password
                }

            }).then((response) => {
                const dataUser = {
                    token: response.data.token,
                    id: response.data.user.id,
                    email: response.data.user.email,
                    name: response.data.user.name,
                    expiration: response.data.expiration
                }

                setFormData({ email: "", password: "" })

                dispatch(login(dataUser))
            }).catch((err) => {
                dispatch(setLoading(false))
                toast.error('Email ou senha incorreto')
            })
        }
    }

    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Fazer login</h1>
                <form onSubmit={loginUser} className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite seu email'}
                        value={formData.email}
                        action={setFormData}
                        name={'email'}
                    />
                    <InputField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Digite sua senha'}
                        value={formData.password}
                        action={setFormData}
                        name={'password'}
                    />
                    <div className="text-left w-full">
                        <AuthLink
                            text={'Esqueci senha?'}
                            route={'/forgot'}
                        />
                    </div>
                    <div className="w-full mt-2">
                        <Button
                            text={'Continuar'}
                        />
                    </div>
                    <div className="text-xs flex flex-row gap-[2px]">
                        Não tenho conta?
                        <AuthLink
                            text={'Cadastra-se'}
                            route={'/register'}
                        />
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Login