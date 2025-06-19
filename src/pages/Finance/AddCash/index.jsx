import { X } from 'lucide-react';
import { useState } from 'react';
import useNavigation from '@hooks/useNavigation';
import InputNumber from '@components/inputs/InputNumber';
import InputSelect from '@components/inputs/InputSelect';
import InputField from '@components/inputs/InputField';
import InputNumberAlt from '@components/inputs/InputNumberAlt';
import Button from '@components/inputs/Button'
import { putCaixa } from './actions/putCaixa';
import { useSelector } from 'react-redux';

//Features loading
import { setLoading } from '@features/loading.js'
import { useDispatch } from "react-redux";
import { loadData } from '@utils/loadData';
import { toast } from 'react-toastify';

const AddCash = () => {

    const [valueSheet, setValueSheet] = useState(false)
    const { goHome } = useNavigation()

    const [data, setData] = useState({
        addCaixa: 0.00,
        payment_type: null,
        client: null,
        addSheet: "",
        description: ""
    })

    function clearInputs() {
        setData({
            addCaixa: 0,
            payment_type: null,
            client: null,
            addSheet: "",
            description: ""
        })
    }


    const optionsPaymentType = [
        { value: 'money', label: 'Dinheiro' },
        { value: 'pix', label: 'Pix' },
        { value: 'card', label: 'Cartão' }
    ]

    const optionsClients = [
        { id: '1', label: 'Aparecido' },
        { id: '2', label: 'Luiza' },
        { id: '3', label: 'Fabiana' }
    ]

    const user = useSelector(state => state.auth.user)

    const dispatch = useDispatch()

    const verifyInputs = () => {
        if (!valueSheet) {
            if (data.addCaixa === 0 || data.payment_type === null) {
                return "Preencha todos os campos."
            }
            return true
        } else {
            if (data.addCaixa === 0 || data.payment_type === null || data.client === null || data.addSheet === "" || data.description === "") {
                return "Preencha todos os campos."
            }
            return true
        }
    }


    const addCash = async (e) => {
        e.preventDefault();

        const result = verifyInputs()

        if (result != true) {
            return toast.error(result)
        }
        dispatch(setLoading(true))

        const response = await putCaixa(user, data)
        await loadData(dispatch, user)

        if (response) {
            toast.success("Valor adicionado ao caixa")
        } else {
            toast.error("Erro ao adicionar valor")
        }

        clearInputs()
        dispatch(setLoading(false))
    }


    return (
        <section className='flex flex-col gap-5 pt-5'>
            <form onSubmit={addCash}>
                <div>
                    <X
                        size={28}
                        className='cursor-pointer'
                        onClick={() => {
                            goHome()
                        }}
                    />
                    <h1 className='text-[22px] mt-4 leading-tight'>Qual é o valor que irá entrar no caixa?</h1>
                </div>
                <div className='flex flex-col justify-center gap-5 mt-5'>
                    <InputNumber
                        value={data.addCaixa}
                        name={'addCaixa'}
                        action={setData}
                        placeholder={"false"}
                    />
                    <InputSelect
                        label={"Forma de pagamento"}
                        placeholder={"Dinheiro, Pix ou Cartão"}
                        options={optionsPaymentType}
                        value={data.payment_type}
                        name={'payment_type'}
                        action={setData}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='mt-4'>
                        <input
                            type="checkbox"
                            id="ficha"
                            onChange={() => {
                                if (valueSheet) {
                                    setValueSheet(false)
                                } else {
                                    setValueSheet(true)
                                }
                            }}
                        />
                        <label
                            for='ficha'
                            className='ml-1'
                        >Adicionar valor a ficha do cliente</label>
                    </div>
                    {/* Parte display:none */}
                    {valueSheet && (
                        <div className='flex flex-col gap-3'>
                            <InputSelect
                                label={"Escolha a cliente"}
                                placeholder={"Selecione a cliente"}
                                options={optionsClients}
                                value={data.client}
                                name={'client'}
                                action={setData}
                            />
                            <InputNumberAlt
                                label={"Quanto irá pra ficha"}
                                placeholder={"R$0,00"}
                                value={data.addSheet}
                                name={'addSheet'}
                                action={setData}
                            />
                            <InputField
                                label={"Descrição"}
                                placeholder={"Descreva sobre esse valor"}
                                value={data.description}
                                name={'description'}
                                action={setData}
                            />
                        </div>)}
                    <Button
                        text={"Adicionar ao caixar"}
                        style={"mt-[30px]"}
                    />

                </div>
            </form>
        </section>
    )
}

export default AddCash