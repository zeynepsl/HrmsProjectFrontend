import axios from "axios";

export default class CvLinkService{
    getCvLinks(){
        return axios.get("http://localhost:8080/api/links/getAll")
    }
}