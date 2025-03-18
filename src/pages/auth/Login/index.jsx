import { useState } from "react"
import { toast } from "react-toastify"
import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import AuthLink from "@components/links/AuthLink"
import api from "@services/api"
import LoadinBlock from "@components/alerts/LoadinBlock"
import useNavigation from "@hooks/useNavigation"
import { useNavigate } from "react-router-dom"

const Login = () => {


    const { goHome } = useNavigation()
    const nav = useNavigate()

    const [loading, setLoagind] = useState(false)
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

        setLoagind(true)
        if (validateInputs()) {
            toast.error("Preencha todos os campos")
            setLoagind(false)
        } else {
            await api({
                method: 'post',
                url: 'auth/login',
                data: {
                    email: formData.email,
                    password: formData.password
                }

            }).then((response) => {
                nav('/')
                console.log(response)
            }).catch((erro) => {
                // toast.error('Email ou senha incorreto')
                console.log(erro)
            }).finally(() => {
                setFormData({ email: "", password: "" })
                setLoagind(false)
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
                    <div className="text-left w-full max-w-[300px]">
                        <AuthLink
                            text={'Esqueci senha?'}
                            route={'/forgot'}
                        />
                    </div>
                    <div className="w-full max-w-[300px] mt-2">
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
            </div>
            {loading && (
                <LoadinBlock />
            )}
        </section >
    )
}

export default Login