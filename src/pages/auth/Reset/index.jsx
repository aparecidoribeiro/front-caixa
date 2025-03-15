import Button from "../../../components/inputs/Button"
import InputField from "../../../components/inputs/InputField"
import AuthLink from "../../../components/links/AuthLink"

const Reset = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Redefinir senha</h1>
                <div className="flex flex-col gap-2 items-center">
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
                    <div className="w-full mt-2">
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