import Select from 'react-select'

const InputSelect = ({ label, placeholder, options, value, name, action }) => {

    const customStyles = {
        control: (baseStyles) => ({
            ...baseStyles,
            boxShadow: "none",
            outline: "none",
            borderColor: "#CCC",
            backgroundColor: 'transparent',
        })
    }

    return (
        <div className="flex flex-col w-full">
            <label>{label}</label>
            <Select
                options={options}
                styles={customStyles}
                placeholder={placeholder}
                noOptionsMessage={() => 'Nenhuma opção encontrada'}
                value={value}
                onChange={(e) => {
                    action((prev) => ({ ...prev, [name]: e }))
                }}
            />
        </div>
    )
}

export default InputSelect