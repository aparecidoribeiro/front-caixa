
const LoadinBlock = () => {

    return (
        <div className='w-full h-full fixed p-0 ml-[-20px] bg-background flex justify-center items-center pb-14'>
            <div className="flex justify-center space-x-1">
                <div className="w-[10px] h-[10px] bg-black rounded-full animate-bounceDots [animation-delay:-0.3s]"></div>
                <div className="w-[10px] h-[10px] bg-black rounded-full animate-bounceDots [animation-delay:-0.15s]"></div>
                <div className="w-[10px] h-[10px] bg-black rounded-full animate-bounceDots"></div>
            </div>
        </div >
    )

}

export default LoadinBlock