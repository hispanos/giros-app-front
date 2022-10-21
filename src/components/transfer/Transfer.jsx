import React, { useEffect, useState } from 'react'
import './style.scss'
import { getTransferReceipts, getTransferSends } from '../../services/transfers'
import { getUsers } from '../../services/users';
import { numberToMoney } from '../../utils/stringFuntions';

const Transfer = () => {

  const [transfersSends, setTransfersSends] = useState([]);
  const [users, setUsers] = useState([]);
  const [transferReceipts, setTransferReceipts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    const [dataSends, dataReceipts, dataUsers] = await Promise.all([
      getTransferSends(user.id),
      getTransferReceipts(user.id),
      getUsers()
    ]);

    setTransferReceipts(dataReceipts);
    setTransfersSends(dataSends);
    setUsers(dataUsers);

    setLoading(false)

    // .then(([
    //   dataSends, dataReceipts, dataUsers
    // ]) => {
    //   setTransferReceipts(dataReceipts);
    //   setTransfersSends(dataSends);
    //   setUsers(dataUsers);
    // })
    // .finally((resp) => {
    //   setLoading(false)
    // })
  }

  return (
    <div className="transfer">
      <div className="transfer__list">
        <h3>Transferencias enviadas</h3>
        <table className='transfer__table'>
          <thead>
            <tr>
              <th className='transfer__table__row'>Id</th>
              <th className='transfer__table__row'>Fecha</th>
              <th className='transfer__table__row'>Receptor</th>
              <th className='transfer__table__row'>Valor</th>
            </tr>
          </thead>
          <tbody>
            {
              !loading ? (
                transfersSends.map((element, index) => {
                  const receipt = users.find(user => user.id === element.receiptId)
                  return (
                    <tr key={index}>
                      <td className='transfer__table__row'>{element.id}</td>
                      <td className='transfer__table__row'>{element.date}</td>
                      <td className='transfer__table__row'>{
                        receipt.name
                      }</td>
                      <td className='transfer__table__row'>{numberToMoney(element.value)}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td>Cargando...</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className="transfer__list">
        <h3>Transferencias recibidas</h3>
        <table className='transfer__table'>
          <thead>
            <tr>
              <th className='transfer__table__row'>Id</th>
              <th className='transfer__table__row'>Fecha</th>
              <th className='transfer__table__row'>Remitente</th>
              <th className='transfer__table__row'>Valor</th>
            </tr>
          </thead>
          <tbody>
            {
              !loading ? (
                transferReceipts.map((element, index) => {
                  const sender = users.find(user => user.id === element.senderId)
                  return (
                    <tr key={index}>
                      <td className='transfer__table__row'>{element.id}</td>
                      <td className='transfer__table__row'>{element.date}</td>
                      <td className='transfer__table__row'>{
                        sender.name
                      }</td>
                      <td className='transfer__table__row'>{numberToMoney(element.value)}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td>Cargando...</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transfer