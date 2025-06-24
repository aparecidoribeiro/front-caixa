import { useNavigate } from "react-router-dom"

const useNavigation = () => {

    const navigate = useNavigate()

    return {
        goHome: () => navigate('/'), 
        returnRoute: () => navigate(-1)
    }
}

export default useNavigation