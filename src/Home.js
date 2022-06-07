import axios from "axios";
const EMPLOYEE_API_BASE_URL = 'https://jsonplaceholder.typicode.com'
class Home{
    getAllProducts(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/users');
    }
    createProduct(product){
        return axios.post(EMPLOYEE_API_BASE_URL +'/users' ,product);
    }
    deleteProduct(delproduct){
        return axios.post(EMPLOYEE_API_BASE_URL+'/users',delproduct);
    }
}
export default new Home();