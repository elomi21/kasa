import Banner from "../../components/Banner/index";
import Banimgabout from "../../assets/ban-img-about.png";
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
            key={data.id}
            content={<li>{data.description}</li>}
          />
        ))}
      </div>
    </>
  );
}

export default About;
