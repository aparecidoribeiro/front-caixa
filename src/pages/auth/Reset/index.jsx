import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"

import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import LoadinBlock from "@components/alerts/LoadinBlock"

import { validateInputs, validateEmail, comparePasswords, validatePassword } from "@utils/validate"

import api from "@services/api"


const Reset = () => {

    //Busca pelo paramentro da url
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const navigate = useNavigate()

    const [loading, setLoagind] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
        token: ""
    })

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        setFormData((prev) => ({ ...prev, "token": token }))
    }, [token])


    const resetPassword = async (e) => {
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
                url: 'auth/reset',
                data: {
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.passwordConfirmation,
                    token: formData.token
                }
            }).then((response) => {
                console.log(response)
                toast.success(response.data.message)
                navigate('/login', { replace: true })
                return
            }).catch((error) => {
                console.log(error)
                toast.error(error.response.data.error)
            }).finally(() => {
                setLoagind(false)
                setFormData({
                    email: "",
                    password: "",
                    passwordConfirmation: "",
                    token: ""
                })
            })
        }
    }

    return (
        <section className="min-h-screen flex items-center">
            <form onSubmit={resetPassword} className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Redefinir senha</h1>
                <div className="flex flex-col gap-2 items-center">
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
                    <InputField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Confirme sua senha'}
                        value={formData.passwordConfirmation}
                        action={setFormData}
                        name={'passwordConfirmation'}
                    />
                    <div className="w-full mt-2 flex justify-center">
                        <Button
                            text={'Continuar'}
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

export default Reset