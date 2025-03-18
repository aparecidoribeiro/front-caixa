import { useState } from "react"
import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import AuthLink from "@components/links/AuthLink"
import api from "@services/api"
import LoadinBlock from "@components/alerts/LoadinBlock"
import { toast } from "react-toastify"

const Login = () => {

    const [loading, setLoagind] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const loginUser = async (e) => {

        setLoagind(true)

        await api({
            method: 'post',
            url: 'auth/login',
            data: {
                email: email,
                password: password
            }

        }).then((response) => {
            console.log(response)
            toast.success('Login')
        }).catch((error) => {
            console.log(error.response.data.error)
            toast.error('Error')
        }).finally(() => {
            setEmail('')
            setPassword('')
            setLoagind(false)
        })
    }


    if (loading) {
        return <LoadinBlock />
    }
    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Fazer login</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite seu email'}
                        value={email}
                        action={setEmail}
                    />
                    <InputField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Digite sua senha'}
                        value={password}
                        action={setPassword}
                    />
                    <div className="text-left w-full max-w-[300px]">
                        <AuthLink
                            text={'Esqueci senha?'}
                            route={'/reset'}
                        />
                    </div>
                    <div className="w-full max-w-[300px] mt-2">
                        <Button
                            action={() => { loginUser() }}
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
                </div>
            </div>
        </section >
    )
}

export default Login