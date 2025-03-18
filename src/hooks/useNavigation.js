import { useNavigate } from "react-router-dom"

const useNavigation = () => {

    const navigate = useNavigate()

    return {
        goHome: () => navigate('/')
    }
}

export default useNavigation