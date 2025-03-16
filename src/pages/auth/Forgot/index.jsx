import Button from "../../../components/inputs/Button"
import InputField from "../../../components/inputs/InputField"
import AuthLink from "../../../components/links/AuthLink"

const Forgot = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full flex-col justify-center">
                <h1 className="text-center text-3xl font-medium mb-2">Esqueci senha</h1>
                <div className="flex flex-col gap-2 items-center">
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Digite seu email'}
                    />
                    <div className="w-full max-w-[300px] mt-2">
                        <Button
                            text={'Continuar'}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Forgot