import { X } from 'lucide-react';
import { useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Add = () => {

    const [valueSheet, setValueSheet] = useState(false)
    const user = useSelector(state => state.auth.user)
    const clients = useSelector(state => state.clients.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data, setData] = useState({
        addCaixa: 0,
        otherAmount: null,
        payment_type: null,
        client: null,
        addSheet: null,
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


    const verifyInputs = () => {
        if (!valueSheet) {
            if (data.addCaixa === 0 || data.payment_type === null) {
                return "Preencha todos os campos."
            }
            return true
        } else {
            if (data.addCaixa === 0 || data.payment_type === null || data.client === null || data.addSheet === null || data.description === "") {
                return "Preencha todos os campos."
            }
            return true
        }
    }


    const optionsClients = clients.map(item => ({
        id: item.id,
        label: item.name
    }))

    //Rota de produtos
    const location = useLocation().pathname
    const isRoute = location == '/produtos/adicionar_caixa'

    const cartAmount = useSelector(state => state.cart.amount)

    const [dataCart, setDataCart] = useState({
        addCaixa: cartAmount,
        payment_type: null,
        client: null,
        addSheet: null,
        description: ""
    })

    const [otherAmount, setOtherAmount] = useState({
        amount: null
    })

    useEffect(() => {

        if (otherAmount.amount != null || otherAmount.amount != undefined) {

            const newAmount = otherAmount.amount + cartAmount

            setDataCart(prev => ({
                ...prev,
                addCaixa: newAmount
            }))
        } else if (otherAmount.amount == null) {
            const newAmount = 0 + cartAmount
            setDataCart(prev => ({
                ...prev,
                addCaixa: newAmount
            }))
        }

    }, [otherAmount])


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
            clearInputs()
            toast.success("Valor adicionado ao caixa")
        } else {
            toast.error("Erro ao adicionar valor")
        }

        dispatch(setLoading(false))
    }

    // useEffect(() => {
    //     if (data.addSheet > dataCart.addCaixa) {
    //         toast.error("O valor da ficha supera o que irá entrar no caixa")
    //         setData(prev => ({
    //             ...prev, 
    //             addSheet: null
    //         }))
    //     }
    // }, [data.addSheet])

    return (
        <section className='flex flex-col gap-5 pt-5'>
            <form onSubmit={addCash}>
                <div>
                    <X
                        size={28}
                        className='cursor-pointer'
                        onClick={() => {
                            navigate(-1)
                        }}
                    />
                    <h1 className='text-[22px] mt-4 leading-tight'>Qual é o valor que irá entrar no caixa?</h1>
                </div>
                <div className='flex flex-col justify-center gap-3 mt-5'>
                    <InputNumber
                        value={
                            isRoute ? dataCart.addCaixa : data.addCaixa
                        }
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
                    {isRoute && (
                        <InputNumberAlt
                            label={"Valor de outro procedimento"}
                            placeholder={"R$0,00"}
                            value={otherAmount.amount}
                            name={'amount'}
                            action={setOtherAmount}
                        />
                    )}
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
                                label={"Quanto irá pra ficha?"}
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

export default Add