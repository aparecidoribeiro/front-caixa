import Button from "@components/inputs/Button"
import InputField from "@components/inputs/InputField"
import LoadinBlock from "@components/alerts/LoadinBlock"

import { useState } from "react"
import { validateEmail } from "@utils/validate"
import api from "@services/api"
import { toast } from "react-toastify"

const Forgot = () => {

    const [loading, setLoagind] = useState(false)

    const [formData, setFormData] = useState({
        email: ""
    })

    const forgotPassword = async (e) => {
        e.preventDefault()

        if (!validateEmail(formData.email)) {
            toast.error("Preencha todos os campos")
        }
        else {
            setLoagind(true)
            await api({
                method: 'post',
                url: 'auth/forgot',
                data: {
                    email: formData.email
                }
            }).then((response) => {
                console.log(response)
                toast.success(response.data.message)
            }).catch((error) => {
                console.log(error)
                toast.error(error.response.data.error)
            }).finally(() => {
                setLoagind(false)
                setFormData({ email: "" })
            })
        }
    }


    return (
        <section className="min-h-screen flex items-center">
            <form onSubmit={forgotPassword} className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Esqueci senha</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite seu email'}
                        value={formData.email}
                        action={setFormData}
                        name={'email'}
                    />
                    <div className="w-full max-w-[300px] mt-2">
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

export default Forgot