import axios from "axios";
const URL_API = 'http://localhost:5000/transfers';

export const getTransferSends = async (senderId) => {
    try {
        const response = await axios.get(`${URL_API}?senderId=${senderId}`)
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getTransferReceipts = async (receiptId) => {
    try {
        const response = await axios.get(`${URL_API}?receiptId=${receiptId}`)
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const saveTransfer = async (transfer) => {
    try {
        const {data} = await axios.post(URL_API, transfer)
        return data;
    } catch (error) {
        return error;
    }
}