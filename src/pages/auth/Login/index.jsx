import InputField from "../../../components/inputs/InputField"
import AuthLink from "../../../components/links/AuthLink"

const Login = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium">Fazer login</h1>
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
                    <div className="text-left w-full">
                        <AuthLink
                            text={'Esqueci senha?'}
                            route={'../register'}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login