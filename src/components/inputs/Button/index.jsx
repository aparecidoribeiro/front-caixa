

const Button = ({ text, action }) => {
    return (
        <>
            <button
                className="w-full py-1 bg-primary text-white rounded text-lg font-normal max-w-[300px]"
                onClick={action}
                type="submit"
            >
                {text}
            </button>
        </>
    )
}

export default Button