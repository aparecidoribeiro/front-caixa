import { NumericFormat } from "react-number-format"


const InputNumber = ({ value, action, name }) => {
    return (
        <>
            <NumericFormat
                className='text-5xl font-extrabold w-full text-center
                outline-none bg-transparent placeholder:text-black-one'
                prefix={"R$"}
                decimalSeparator={","}
                thousandSeparator={"."}
                fixedDecimalScale
                decimalScale={2}
                allowNegative={false}
                inputMode="numeric"
                allowLeadingZeros={false}
                value={value}
                onValueChange={(values) => {
                    action((prev) => ({ ...prev, [name]: values.floatValue }))
                }}
                placeholder={value == undefined && "R$0,00"}
            />
        </>
    )
}


export default InputNumber