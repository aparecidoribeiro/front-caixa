import Button from "../../../components/inputs/Button"
import InputField from "../../../components/inputs/InputField"
import AuthLink from "../../../components/links/AuthLink"

const Register = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Criar conta</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Nome'}
                        type={'text'}
                        placeholder={'Nome completo'}
                    />
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite sue email'}
                    />
                    <InputField
                        label={'Senha'}
                        type={'password'}
                        placeholder={'Digite sua senha'}
                    />
                    <InputField
                        label={'Confirmar senha'}
                        type={'password'}
                        placeholder={'Digite sua senha novamente'}
                    />
                    <Button
                        text={'Continuar'}
                    />
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