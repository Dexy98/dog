// import axios, {AxiosResponse} from 'axios';
// export interface response {
//   message: string[];
//   status:  number;
// }

// export const Casuali = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random/20';
//     try {
//         const response:AxiosResponse<response> = await axios.get(url);

//         if (response.status !== 200) {
//             throw new Error('Errore chiamata Api');
//         }

//         return response.data.message;
//     } catch (error) {
//         console.error('Errore : ', error);
//         throw error;
//     }
// }


// export const fetchDogBreeds = async () => {
//     try {
//         const response:AxiosResponse<response> = await axios.get('https://dog.ceo/api/breeds/list/all');

//         if (response.status !== 200) {
//             throw new Error('Errore nella richiesta API');
//         }

//         const breeds = Object.keys(response.data.message);
//         return breeds;
//     } catch (error) {
//         console.error('Errore:', error);
//         throw error;
//     }
// };



// export const fetchDogByBreeds = async (razza:string) => {
//     try {
//         const response:AxiosResponse<response> = await axios.get(`https://dog.ceo/api/breed/${razza}/images`);
      
//         if (response.status !== 200) {
//             throw new Error('Errore nella richiesta API');
//         }

//         return response.data.message;
//     } catch (error) {
//         console.error('Errore:', error);
//         throw error;
//     }
// };
