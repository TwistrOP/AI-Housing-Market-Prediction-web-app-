import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000';

export const fetchPredictedPriceDataset1 = async (features) => {
    const response = await axios.post(`${baseURL}/predict_price/linear_regression`, features);
    return response.data.price;
};

export const fetchClassifiedPriceDataset2 = async (features) => {
    const response = await axios.post(`${baseURL}/classify_price`, features);
    return response.data.classification;
};
