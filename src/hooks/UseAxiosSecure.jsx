import axios from "axios";


 const  useAxios=axios.create({
    baseURL: 'http://localhost:5000/'
})
const UseAxiosSecure = () => {
    return useAxios
    
};

export default UseAxiosSecure;