import axios from "axios";

const BASE_URL = "http://192.168.100.6:1337/api";

const API_KEY = "1046b29f2bdef1e1babda432e23b9c23b017f08f2ba843d3a5b4b2403a5906ee9813c289db499d0d530f3d3d160236cfe67d748d91cbdd3221e6397e142438d9f71db4f9e453f8a5f5b37cf63aa6d8794b61b8996c59c114052e36065c31521833c2c463ab23fda8ba0791f941367f27119051a7cb701fb93ad415183e192837";

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': "Bearer " + API_KEY
    }
})

const getSlider = () => AxiosInstance.get("/sliders?populate=* ");

export default {
    getSlider
}