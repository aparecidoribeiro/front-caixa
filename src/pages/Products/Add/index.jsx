import InputField from "@components/inputs/InputField"
import { useState } from "react"
import InputNumberAlt from "@components/inputs/InputNumberAlt"
import Button from "@components/inputs/Button"

const Add = () => {

    const [data, setData] = useState({
        name: "",
        description: "",
        price: null,
        quantity: 0
    })

    return (
        <section className=" mt-5 pb-[54px] flex flex-col gap-5">
            <h2 className="text-xl text-center mt-3">Adicione um novo produto</h2>
            <div className="flex flex-col gap-5">
                <input type="file" className="file-input file-input-ghost file-input-md" />
                <div className="flex flex-col gap-2">
                    <InputField
                        type={"text"}
                        label={"Nome"}
                        placeholder={"Informe o nome do produto ou kit"}
                        name={"name"}
                        value={data.name}
                        action={setData}
                    />
                    <InputField
                        type={"text"}
                        label={"Descrição"}
                        placeholder={"Breve descrição do produto ou kit"}
                        name={"description"}
                        value={data.description}
                        action={setData}
                    />
                    <InputNumberAlt
                        label={"Preço"}
                        placeholder={"Informe o preço"}
                        name={"price"}
                        value={data.price}
                        action={setData}
                    />
                    <InputField
                        type={"number"}
                        label={"Estoque"}
                        placeholder={"Informe a quantidade em estoque"}
                        name={"quantity"}
                        value={data.quantity}
                        action={setData}
                    />
                    <Button
                        text={"Salvar"}
                        style={"mt-5"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Add