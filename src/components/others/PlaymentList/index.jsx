import TypeCard from "@components/others/TypeCard"


const PlaymentList = () => {
    return (
        <div className="w-full bg-white p-5 rounded-lg flex flex-col gap-2 mb-5">
            <h3 className="text-base">Histórico</h3>
            <div className="flex flex-col gap-2">
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
            </div>
        </div>
    )
}

export default PlaymentList