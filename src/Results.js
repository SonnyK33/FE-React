import Pet from './Pet'

const Results = ({pets}) => { //pets being destructured 
    return (
        <div className="search">
            {!pets.length ? (
                <h2>no pets found</h2> 
            ) : (
                pets.map((pet) => (
                <Pet
                    animal={pet.animal}
                    key={pet.id}
                    name={pet.name}                    
                    breed={pet.breed}
                    images={pet.images}
                    locaiton={`${pet.city}, ${pet.state}`}
                    id={pet.id}                    
                />
            ))
            )
            }
        </div>
    )
        }
        


export default Results