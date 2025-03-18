import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import AuthLink from "@components/links/AuthLink"
import LoadinBlock from "@components/alerts/LoadinBlock"
import api from "@services/api"
import { useState } from "react"
import { toast } from "react-toastify"

const Register = () => {

    const [loading, setLoagind] = useState(false)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirmartion, setPasswordConfirmartion] = useState()


    const resgisterUser = async () => {
        if (verificarSenha()) {
            toast.error("As senhas não são iguais")
        } else {
            setLoagind(true)

            await api({
                method: 'post',
                url: 'auth/register',
                data: {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmartion: passwordConfirmartion
                }
            }).then((response) => console.log(response))
                .catch((erros) => console.log(erros)).finally(() => setLoagind(false))
        }
    }

    const verificarSenha = () => {
        if (password != passwordConfirmartion) {
            return true
        }
    }

    if (loading) {
        return <LoadinBlock />
    }
    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Criar conta</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Nome'}
                        type={'text'}
                        placeholder={'Nome completo'}
                        value={name}
                        action={setName}
                    />
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite sue email'}
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
                    <InputField
                        label={'Confirmar senha'}
                        type={'password'}
                        placeholder={'Confirme sua senha'}
                        value={passwordConfirmartion}
                        action={setPasswordConfirmartion}
                    />
                    <div className="w-full max-w-[300px] mt-2">
                        <Button
                            text={'Continuar'}
                            action={() => resgisterUser()}
                        />
                    </div>
                    <div className="text-xs flex flex-row gap-[2px]">
                        Já tenho uma conta?
                        <AuthLink
                            text={'Fazer login'}
                            route={'/login'}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Register