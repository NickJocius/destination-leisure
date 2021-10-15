import axios from 'axios';

export const getTopDest = async () => {return await axios.get(`../dummyData/topDestinations.json`)};