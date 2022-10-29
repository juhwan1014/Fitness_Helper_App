// import dotenv from "dotenv";
// dotenv.config();

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    // 'X-RapidAPI-Key': '2e7ccd8ed9msh25aee7d213ac7dbp15016bjsn8cad086ea07e'
      
    }
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}   