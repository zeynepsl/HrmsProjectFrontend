import axios from "axios";

export default class CvEducationService{
    getCvEducations(){
        return axios.get("http://localhost:8080/api/educations/getAll")
    }
}