import Banner from "../../components/Banner/index"
import Banimgabout from "../../assets/ban-img-about.png"
import Collapse from "../../components/Collapse";
import Databout from "../../servay/databout.json";

const databout = Databout;


function About() {
  return (
    <>
      <Banner img={Banimgabout} />
      <div className="container-collapse">
        {databout.map((data) => (
          <Collapse
            title={data.title}
            content={data.description}
            key={data.id} />
        ))}
      </div>
    </>
  );
}

export default About;
