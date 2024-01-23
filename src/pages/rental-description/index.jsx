import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Dataloc from "../../servay/dataloc.json";

function Rentaldescription() {
  //on récupére l'id qui se trouve dans l'url de la page
  const params = useParams();
  const pageId = params.id;

  // on filtre Dataloc pour récupérer l'object rental correspondant à l'Id de la page
  const rentalObject = Dataloc.filter((rental) => rental.id === pageId);
console.log(rentalObject)
  //on utilise useNavigate pour rediriger vers vers la page error.
  const navigate = useNavigate();

  useEffect(() => {
    if (rentalObject.length === 0) {
      navigate("/error");
    }
  }, [rentalObject, navigate]);

  // si rentalObjet est vide alors ça renvoie vers la page error
  if (rentalObject.length === 0) {
    return null;
  }

  const pictureSlide = rentalObject[0].pictures;

  return (
    <>
      <Slideshow pictures={pictureSlide} alt="photo de la location" />
      <div className="r-d-container">
        <div className="r-d-left">
          <h1 className="r-d-title">{rentalObject[0].title}</h1>
          <h3 className="r-d-subtitle">{rentalObject[0].location}</h3>
          <ul className="r-d-tags">
            {rentalObject[0].tags.map((tag, index) => (
              <li key={index} className="r-d-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="r-d-right">
          <div className="r-d-right-identity">
            <p className="r-d-right-name">{rentalObject[0].host.name}</p>
            <img
              className="r-d-right-img"
              src={rentalObject[0].host.picture}
              alt="identité de l'hôte"
            />
          </div>
        </div>
      </div>
      <div className="container-collapse">
        <Collapse title="Description" content={rentalObject[0].description} />
        <Collapse
          title="Equipements"
          content={rentalObject[0].equipments.map((equipment, i) => (
            <ul>
              <li key={i}>{equipment}</li>
            </ul>
          ))}
        />
      </div>
    </>
  );
}

export default Rentaldescription;
