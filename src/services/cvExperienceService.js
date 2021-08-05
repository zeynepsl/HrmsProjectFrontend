import axios from "axios";

export default class CvExperienceService{
    getCvExperiences(){
        return axios.get("http://localhost:8080/api/experiences/getAll")
    }
}