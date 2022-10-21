import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/users';
import useForm from '../../hooks/useForm';
import { parseDate } from '../../utils/stringFuntions';
import { saveTransfer } from '../../services/transfers';
import Swal from 'sweetalert2';

const NewTransfer = () => {

  const [users, setUsers] = useState([]);
  const [userSession, setUserSession] = useState({});

  const [dataForm, handleChangeInput, reset] = useForm({
    receiptId: '',
    value: ''
  });

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await getUsers();
    const dummieUser = JSON.parse(sessionStorage.getItem('user'));
    setUserSession(dummieUser);
    const result = response.filter(e => e.id !== dummieUser.id);
    setUsers(result);
  }

  const handleSubmit = async (e) => {
    const date = new Date();
    e.preventDefault();
    const senderObject = {
      receiptId: Number(dataForm.receiptId),
      value: Number(dataForm.value),
      date: parseDate(date),
      senderId: userSession.id
    }
    const response = await saveTransfer(senderObject);
    if (response?.id) {
      Swal.fire(
        'Excelente!',
        'Giro enviado con éxito!',
        'success'
      )
    } else {
      Swal.fire(
        'Oops!',
        'Hubo un error al enviar tu giro!',
        'error'
      )
    }
    reset();
  }

  return (
    <div className="transfer__new">
      <form className='transfer__form' onSubmit={handleSubmit}>
        <label>
          Destinatario
          <select
            name="receiptId"
            value={dataForm.receiptId}
            onChange={handleChangeInput}
          >
            <option value="">Seleccione el Destinatario</option>
            {
              users.map((user, index) => (
                <option key={index} value={user.id}>{user.name}</option>
              ))
            }
          </select>
        </label>

        <label>
          Monto
          <input
            type="number"
            name='value'
            value={dataForm.value}
            onChange={handleChangeInput}
            placeholder='Escriba la cantidad a enviar'
          />
        </label>

        <button type='submit'>Enviar</button>

      </form>
    </div>
  )
}

export default NewTransfer