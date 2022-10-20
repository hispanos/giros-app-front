import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';
import { getLogin } from '../../services/users';
import './style.scss'
import Swal from 'sweetalert2';
import {useNavigate, Link} from 'react-router-dom'
import { redirectUser } from '../../utils/session';

const Login = () => {

    const navigate = useNavigate();
    const [dataForm, handleChangeInput, reset] = useForm({
        user: '',
        password: ''
    });

    useEffect(() => {
        //redirect if not session
        redirectUser(navigate);
    }, [])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (dataForm.user !== '' && dataForm.password !== '') {
            const response = await getLogin(dataForm.user, dataForm.password);
            if (response.length) {
                sessionStorage.setItem('user', JSON.stringify(response[0]));
                navigate('home');
            }else {
                Swal.fire('Usuario o coontraseña incorrecta');
                reset();
            }
        }
    }

    return (
        <div className="login__container">
            <form onSubmit={handleSubmit}>
                <h1>Iniciar Sesion</h1>
                <label>
                    Usuario:
                    <input
                        type="text"
                        placeholder='Escriba su usuario'
                        name='user'
                        onChange={handleChangeInput}
                        value={dataForm.user}
                        required
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        placeholder='Escriba su contraseña'
                        name='password'
                        onChange={handleChangeInput}
                        value={dataForm.password}
                        required
                    />
                </label>
                <button type='submit'>
                    Ingresar
                </button>
                <span>¿No tienes cuenta?
                    <Link to="register">Regístrate</Link>
                </span>
            </form>
        </div>
    )
}

export default Login