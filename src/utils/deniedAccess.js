import { Link } from "react-router-dom"
import accessdenied from '../images/gallery/access-denied.png'

export const DeniedAccess = (props) => {
    const { response } = props
    return(
      <>
        <div className="container mt-5 mb-5">
            <div className="denied" style={{height: '80vh'}}>
                <div className="wrapper mb-4">
                    <img src={accessdenied}
                        alt="imagen de confirmación" 
                        height={100}
                        width={100}/>
                </div>
                <div className="mt-1 mb-3 congrats">
                    {
                        response === 403 ? 'SU SESIÓN HA EXPIRADO' : 'ACCESO DENEGADO'
                }
                </div>
                <Link className="ud-btn btn-thm add-joining" to="/login">
                        Iniciar Sesión
                </Link>
            </div>
        </div>
      
    </>
    )
    
}