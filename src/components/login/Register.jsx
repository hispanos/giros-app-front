import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';
import { createUser } from '../../services/users';
import './style.scss'
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom'
import { redirectUser } from '../../utils/session';

const Register = () => {
    const navigate = useNavigate()

    useEffect(() => {
        //redirect if not session
        redirectUser(navigate);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (dataForm.user !== '' && dataForm.password !== '' && dataForm.name !== '') {
            const response = await createUser(dataForm)
            if (response?.id) {
                Swal.fire(
                    'Excelente!',
                    'Usuario creado con éxito!',
                    'success'
                )
                navigate('/')
            }
        }
    }

    const [dataForm, handleChangeInput, reset] = useForm({
        user: '',
        password: '',
        name: ''
    })

    return (
        <div className="login__container">
            <form onSubmit={handleSubmit}>
                <h1>Crear Cuenta</h1>
                <label>
                    Nombre:
                    <input
                        type="text"
                        placeholder='Escriba su Nombre'
                        name='name'
                        onChange={handleChangeInput}
                        value={dataForm.name}
                        required
                    />
                </label>
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
                    Registrar
                </button>
                <span>¿Ya tienes cuenta?
                    <Link to="/">Inicia Sesión</Link>
                </span>
            </form>
        </div>
    )
}

export default Register