import { useNavigate } from "react-router-dom"
import { Plus } from 'lucide-react';

import { NumericFormat } from 'react-number-format';

import Button from "@components/inputs/Button"
import PlaymentList from "@components/others/PlaymentList"

const Today = () => {

    const Navigate = useNavigate()

    return (
        <section className="flex flex-col gap-3">
            <div className="bg-white flex flex-col justify-center items-center gap-2 px-standard h-52 rounded-lg">
                <h3 className="font-normal text-sm mb-[-10px]">Valor no caixa hoje</h3>
                <NumericFormat
                    className="font-bold text-[42px] w-full text-center"
                    value={10.49}
                    prefix="R$"
                    thousandSeparator="."
                    decimalSeparator=","
                    displayType="text"
                />
                <Button
                    text="Adicionar Caixa"
                    icon={<Plus />}
                    style="!w-[180px]"
                    action={() => Navigate('/add')}
                />
            </div>
            <div>
                <PlaymentList />
            </div>
        </section>
    )
}

export default Today