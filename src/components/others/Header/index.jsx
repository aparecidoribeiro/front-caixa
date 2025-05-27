import Avatar from "@components/others/Avatar"

const Header = () => {
    return (
        <header className="flex items-center gap-3 mb-5">
            <Avatar />
            <span className="text-lg font-normal">Caixa</span>
        </header>
    )
}

export default Header