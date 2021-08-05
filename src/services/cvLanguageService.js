import axios from "axios";

export default class CvLanguageService{
    getCvLanguages(){
        return axios.get("http://localhost:8080/api/languages/getAll")
    }
}