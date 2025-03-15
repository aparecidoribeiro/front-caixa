import { Link } from "react-router-dom"


const AuthLink = ({ text, route }) => {
    return (
        <>
            <Link
                className="text-xs text-primary font-semibold"
                to={route}
            >
                {text}
            </Link>
        </>
    )
}

export default AuthLink