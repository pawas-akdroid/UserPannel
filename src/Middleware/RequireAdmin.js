import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTokenSuccess } from "../action/Token";
import GeoLocation from "../components/Location";
import { TokenUrl } from "../Utilities/Urls";


const RequireAdmin = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(p => p?.authToken?.authToken)
    
    if (token) {
        useEffect(() => {
            TokenUrl().get('/verify').catch((err) => {
                console.log(err?.response?.status)
                if (err?.response?.status === 401) {
                    navigate('/login')
                    dispatch(fetchTokenSuccess(null))
                }
            }).then((res)=>null)
        }, [])
    }else{
        navigate('/login')
        dispatch(fetchTokenSuccess(null))
    }
   

    return (
        token !== (null|| undefined) ? <GeoLocation><Outlet /> </GeoLocation> : <Navigate to={'/login'} replace />
    )
}

export default RequireAdmin;