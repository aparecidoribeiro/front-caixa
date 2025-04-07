import { useState } from "react"
import { toast } from "react-toastify"
import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import AuthLink from "@components/links/AuthLink"
import LoadinBlock from "@components/alerts/LoadinBlock"
import api from "@services/api"

//utils
import { validatePassword } from "@utils/validatePassword"
import { comparePasswords } from "@utils/comparePasswords"
import { validateEmail } from "@utils/validateEmail"
import { validateInputs } from "@utils/validateInputs"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [loading, setLoagind] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })



    const resgisterUser = async (e) => {
        e.preventDefault()

        if (validateInputs(formData)) {
            toast.error("Preencha todos os campos")
        }
        else if (!validateEmail(formData.email)) {
            toast.error("O e-mail inserido não é válido")
        }
        else if (!validatePassword(formData.password)) {
            toast.error("Sua senha deve ter 8 caracteres, incluindo letras e números")
        }
        else if (!comparePasswords(formData)) {
            toast.error("As senhas não coincide")
        }
        else {
            setLoagind(true)
            await api({
                method: 'post',
                url: 'auth/register',
                data: {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.passwordConfirmation
                }
            }).then((response) => {
                toast.success("Usuário cadastrado com sucesso")
            }).catch((error) => {
                toast.error(error.response.data.error)
            }).finally(() => {
                setLoagind(false)
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirmation: ""
                })
            })
        }
    }

    return (
        <section className="min-h-screen flex items-center px-standard">
            <form onSubmit={resgisterUser} className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Criar conta</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Nome'}
                        type={'text'}
                        placeholder={'Nome completo'}
                        value={formData.name}
                        action={setFormData}
                        name={'name'}
                    />
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite sue email'}
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
                    <InputField
                        label={'Confirmar senha'}
                        type={'password'}
                        placeholder={'Confirme sua senha'}
                        value={formData.passwordConfirmation}
                        action={setFormData}
                        name={'passwordConfirmation'}
                    />
                    <div className="w-full max-w-[300px] mt-2">
                        <Button
                            text={'Continuar'}
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
            </form>
            {loading && (
                <LoadinBlock />
            )}
        </section >
    )
}

export default Register