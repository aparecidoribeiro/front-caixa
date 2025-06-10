import Avatar from "@components/others/Avatar"

const Header = () => {
    return (
        <header className="relative flex items-center pt-5 mb-5 gap-3 z-20">
            <Avatar />
            <span className="text-lg font-normal">Caixa</span>
        </header>
    )
}

export default Header