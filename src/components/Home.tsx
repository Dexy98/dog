import React, { useState } from 'react'
import { useRandomDogQuery, useCercaInBaseLaRazzaQuery, useListaRazzeQuery } from '../Redux/Features/apiSlice'


const Home: React.FC = () => {
    const [selectedBreed, setSelectedBreed] = useState<string>('');

    const { data: random } = useRandomDogQuery('');
    const { data: razze } = useListaRazzeQuery('');
    const { data: cerca, isLoading: caricoCerca } = useCercaInBaseLaRazzaQuery(selectedBreed);

    const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBreed = event.target.value;
        setSelectedBreed(selectedBreed);
    };


    return (
        <section className='mx-auto w-full max-w-5xl mt-5'>
            <select
                className='rounded-md p-2 text-black'
                value={selectedBreed}
                onChange={handleBreedChange}
            >
                <option value="">Seleziona una razza</option>
                {razze?.message && Object.keys(razze.message).map((breed, index) => (
                    <option key={index} value={breed}>{breed}</option>
                ))}
            </select>

            {caricoCerca ? (
                <h1 className="text-center mt-6">Caricamento...</h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6">
                    {cerca?.message ? (
                        cerca.message.map((img, index) => (
                            <div key={index} className=''>
                                <img src={img} alt="cane" className='w-full h-full object-cover' />
                            </div>
                        ))
                    ) : (
                        random?.message && random.message.map((img, index) => (
                            img === null ? null : (
                                <div key={index} className=''>
                                    <img src={img} alt="cane" className='w-full h-full object-cover' />
                                </div>
                            )
                        ))
                    )}
                </div>
            )}

        </section>
    );


}
export default Home