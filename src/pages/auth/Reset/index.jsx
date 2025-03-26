import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../../../components/inputs/Button"
import InputField from "../../../components/inputs/InputField"
import { useEffect } from "react"

const Reset = () => {

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token, navigate])

    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Redefinir senha</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite seu email'}
                    />
                    <InputField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Digite sua senha'}
                    />
                    <InputField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Confirme sua senha'}
                    />
                    <div className="w-full mt-2 flex justify-center">
                        <Button
                            text={'Continuar'}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Reset