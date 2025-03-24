import Avatar from "@components/surfaces/Avatar"

const Header = () => {
    return (
        <header className="flex items-center mt-5 gap-3">
            <Avatar />
            <span className="text-lg font-normal">Caixa</span>
        </header>
    )
}

export default Header