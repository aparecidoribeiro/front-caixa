

const InputField = ({ label, type, placeholder }) => {
    return (
        <div className="flex flex-col w-full max-w-[300px]">
            <label>{label}</label>
            <input
                className="border-standard border-black-one rounded-standard px-3 py-1 focus:outline-none placeholder-black-one text-sm"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField