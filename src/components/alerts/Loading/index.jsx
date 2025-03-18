

const Loading = () => {
    return (
        <span className="flex justify-center space-x-1">
            <div className="w-[10px] h-[10px] bg-primary rounded-full animate-bounceDots [animation-delay:-0.3s]"></div>
            <div className="w-[10px] h-[10px] bg-primary rounded-full animate-bounceDots [animation-delay:-0.15s]"></div>
            <div className="w-[10px] h-[10px] bg-primary rounded-full animate-bounceDots"></div>
        </span>
    )
}

export default Loading