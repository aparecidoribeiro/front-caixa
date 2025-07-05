

const Button = ({ text, action, style, icon }) => {
    return (
        <>
            <button
                className={`w-full flex flex-row justify-center py-2 bg-primary text-white rounded-standard text-lg font-normal ${style}`}
                onClick={action}
                type="submit"
            >
                <span className="flex items-center">
                    {icon}
                    {text}
                </span>
            </button>
        </>
    )
}

export default Button