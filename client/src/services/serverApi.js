import axios from 'axios';

const baseURL = 'http://,localhost:9000';
const axiosServerRest = axios.create({
    baseURL: baseURL,
});


const getAction = () =>{

};

const postAction = () =>{

};


async function fetchQuery(action) {


    try {

        const response = await axiosServerRest.get(`http://localhost:9000/apples/allapples`);

        return response.data;

    } catch (error) {
        console.error(error);
        return []
    }

}

export default fetchQuery;
