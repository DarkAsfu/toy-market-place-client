

const ToyCard = ({toy}) => {
    return (
        <div>
            <h1></h1>
            <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2 items-center justify-center">
                <figure className="w-full"><img className="w-full h-56" src={toy.picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;