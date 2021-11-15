import axios from "axios";

const instance = axios.create({
    //THE API (cloud function) URL
    baseURL:'https://us-central1-fake-clone-a853e.cloudfunctions.net/api'
   // 'http://localhost:5001/fake-clone-a853e/us-central1/api' <<<< for local host debugging
});

export default instance;


