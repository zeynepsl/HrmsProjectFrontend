import axios from "axios";

export default class CvService{
    getCVs(){
        return axios.get("http://localhost:8080/api/candidatecvs/getAll")
    }
}