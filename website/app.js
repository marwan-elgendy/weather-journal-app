
/* Global Variables */
const baseURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=';
const key = 'da228f79948f36fdf122ea422ade6296';

function performAction(e) {
  const ZIP = document.getElementById('zip').value;
  const fellings = document.getElementById('feelings').value;
  console.log(`${baseURL}${ZIP},us&appid=${key}`);
  getWeather(baseURL, ZIP, key,).then((data) => {
       postData('/addweather', {temperature: data.main.temp ,date:newDate, userResponse: fellings });
  }).then(
    updateUI()
  )
}



const postData = async ( url = '', data = {}) => {
    console.log(`This is what we fetch ${data.temperature}`);
    console.log(`This is what we fetch ${data.date}`);
    console.log(`This is what we fetch ${data.userResponse}`);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        console.log(`This is the new Data ${newData.temperature}`);
        return newData;
    }catch(error){
      console.log("error", error);
    }
  }


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



const getWeather = async(baseURL, ZIP, key) => {
    let URL = `${baseURL}${ZIP}&appid=${key}`;
    const res = await fetch(URL)
    try{
        const data = await res.json();
        return data;
    }catch(error){
        console.log("error", error);
    }
}


document.getElementById('generate').addEventListener('click', performAction);



const updateUI = async () => {
    const request = await fetch('/getweather');
    try{
      const allData = await request.json();
      console.log('Get request');
            document.getElementById('date').innerHTML = allData.date;
            document.getElementById('temp').innerHTML = allData.temperature;
            document.getElementById('content').innerHTML = allData.userResponse;
    }catch(error){
      console.log("error", error);
    }
  }
  