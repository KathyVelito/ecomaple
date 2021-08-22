import {useContext} from 'react'
import imgLogin from "../assets/Apple-Innovation-Event-banner.jpeg"
import { AuthContext } from '../context/authContext'

export default function LoginView() {
    const { signIn } = useContext(AuthContext)


    return (
        <div className="row" style={{height:'calc(100vh - 50px)'}}>
            <div className="col-sm-12 col-md-8" style={{height:'100%',overflow:'hidden'}}>
                <img 
                    src={imgLogin} 
                    style={{
                        maxHeight:'100%',
                        objectFit:'cover'
                    }}
                    alt="imagen login"
                />
            </div>
            <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h2>Bienvenido</h2>
                    <button className="btn btn-danger btn-lg" onClick={signIn}>
                        <i classname="fab fa-google me-2"/>
                        Ingresa con google
                    </button>
                </div>
            </div>

        </div>
    )
}