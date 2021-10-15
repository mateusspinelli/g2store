import axios from "axios";

const instance = axios.create({



    // firebase deploy --only functions
     baseURL: 'https://us-central1-g2store-f6710.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/g2store-f6710/us-central1/api'  // API URL TESTE


    
});

export default instance;