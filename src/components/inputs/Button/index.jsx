

const Button = ({ text }) => {
    return (
        <>
            <button className="w-full py-1 bg-primary text-white rounded text-lg font-normal max-w-[300px]">
                {text}
            </button>
        </>
    )
}

export default Button