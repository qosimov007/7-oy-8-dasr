import hero5 from '../assets/1.webp'
function Card() {

  return (
    <>
      <div className="card w-96 bg-base-100 mt-20 shadow-xl transition duration-400 hover:shadow-2xl">
        <figure className="px-5 pt-5">
          <img
            src={hero5}
            alt="Shoes"
            className="rounded-lg"
          />
        </figure>
        <div className="card-body items-center text-center">
            <p className="card-title">Shoes!</p>
            <p className="text-accent-content">$179.99</p>
        </div>
      </div>
    </>
  );
}

export default Card;
