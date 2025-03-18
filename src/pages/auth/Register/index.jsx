import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import AuthLink from "@components/links/AuthLink"
import LoadinBlock from "@components/alerts/LoadinBlock"
import api from "@services/api"
import { useState } from "react"
import { toast } from "react-toastify"

const Register = () => {

    const [loading, setLoagind] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const verifyPassword = () => {
        if (formData.password != formData.passwordConfirmation) {
            return true
        }
    }

    const validateInputs = () => {
        const arrayDate = Object.values(formData)
        return arrayDate.some((value) => value.trim() == "")
    }

    const resgisterUser = async (e) => {
        e.preventDefault()

        if (validateInputs() == true) {
            toast.error("Preencha todos os campos")
        }
        else if (verifyPassword() == true) {
            toast.error("As senhas não coincidem")
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
                console.log(response)
                // toast.success("Certo")
            }).catch((error) => {
                console.log(error)
                // toast.error(error.response.data.error)
            }).finally(() => {
                setLoagind(false)
            })
        }
    }

    return (
        <section className="min-h-screen flex items-center">
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