import { NumericFormat } from "react-number-format"


const InputNumberAlt = ({ label, placeholder, value, name, action }) => {
    return (
        <div className="relative flex flex-col w-full">
            <label>{label}</label>
            <NumericFormat
                className="w-full min-h-[38px] border-standard border-border-color rounded-[4px] px-[10px] py-1 bg-transparent 
                    outline-none placeholder-placerhold-color text-base "
                placeholder={placeholder}
                prefix="R$"
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
            />
        </div >
    )
}

export default InputNumberAlt