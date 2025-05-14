import { useDispatch } from "react-redux"
import { logout } from "@features/auth"

const Avatar = () => {

    const dispatch = useDispatch()

    return (
        <img
            className="w-9 h-9 rounded-[50%] object-cover cursor-pointer"
            src={"./public/perfil.jpg"}
            alt="Foto de perfil"
            onClick={() => {
                dispatch(logout())
            }}
        />
    )
}

export default Avatar