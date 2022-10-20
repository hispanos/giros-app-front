import axios from "axios";

export const getTransferSends = async (senderId) => {
    const URL_API = 'http://localhost:5000/transfers';
    try {
        const response = await axios.get(`${URL_API}?senderId=${senderId}`)
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getTransferReceipts = async (receiptId) => {
    const URL_API = 'http://localhost:5000/transfers';
    try {
        const response = await axios.get(`${URL_API}?receiptId=${receiptId}`)
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}