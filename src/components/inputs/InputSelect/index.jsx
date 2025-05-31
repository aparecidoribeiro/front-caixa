import Select from 'react-select'

const InputSelect = ({ label, placeholder, options, value, name, action }) => {

    const customStyles = {
        control: (baseStyles) => ({
            ...baseStyles,
            boxShadow: "none",
            outline: "none",
            borderColor: "#CCC",
            backgroundColor: 'transparent',
        }), input: (baseStyles) => ({
            ...baseStyles,
            zIndex: 2,
            position: 'relative',
            boxShadow: "none",
            outline: "none",
        })
    }

    return (
        <div className="flex flex-col w-full z-2">
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