import axios from 'axios';
const baseURL = 'https://react-test-globacap.herokuapp.com';
const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '123123123123'
};

export default {
    getAll(entityName) {
        return axios.get(`${baseURL}/${entityName}.json`, {headers})
    },

    getById(entityName, Id) {
        return axios.get(`${baseURL}/${entityName}/${Id}.json`, {headers})
    },

    create(entityName, data) {
        const payload = JSON.stringify(data);
        return axios.post(`${baseURL}/${entityName}.json`, payload, {headers})
    },

    updatePUT(entityName, Id, data) {
        const payload = JSON.stringify(data);
        return axios.put(`${baseURL}/${entityName}/${Id}.json`, payload, {headers})
    },

    updatePATCH(entityName, Id, data) {
        const payload = JSON.stringify(data);
        return axios.patch(`${baseURL}/${entityName}/${Id}.json`, payload, {headers})
    },

    deleteById(entityName, Id) {
        return axios.delete(`${baseURL}/${entityName}/${Id}.json`, {headers})
    }
}
