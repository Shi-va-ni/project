import axios from 'axios';

const URL= "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'ff16179719msh984a28b4ccb2c77p1bb363jsnccd0156139d3'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
export const getPlacesData = async () => {
    try {
        const {data:{data}} = await axios.get(URL);
        return data;
    } catch (error) {
        
    }
}