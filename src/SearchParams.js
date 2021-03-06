import {useState, useEffect} from 'react';
import Pet from './Pet';
import useBreedList from './useBreedList';
import Results from './Results';

const ANIMALS =['dog', 'cat', 'fish', 'rabbit', 'fox'];
const BREEDS =[];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [BREEDS] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
            );
        const json = await res.json();
        // console.log(json);
        setPets(json.pets)

    }

    return (
        <div className = "search-params">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}
            >
            
            
                <label htmlfor="location">
                    Location
                    <input 
                    id="location"
                    onChange = {(e) => setLocation(e.target.value)}
                    value={location}
                    placeholder="Location" />
                </label>
                <label htmlfor="animal">
                Animals 
                <select
                    id="animal"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                    onBlur={ (e) => setAnimal(e.target.value)}
                    >
                        <option value=""></option> 
                            {
                                ANIMALS.map((animal) => (
                                    <option value={animal}
                                    key={animal}>
                                    {animal}
                                    </option>
                                ))
                            }
                        

                </select>
                </label>

                <label htmlfor="breed">
                Breed 
                <select
                    id="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    onBlur={ (e) => setBreed(e.target.value)}
                    >
                    <option value=""></option> 
                        {
                            BREEDS.map((breed) => (
                                <option value={breed}
                                key={breed}>
                                {breed}
                                </option>
                            ))
                        }
                    

                </select>
                </label>

                <button>submit</button> 
            </form>
            <Results pets={pets}/>                
        </div>
    )
};

export default SearchParams; 