import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index";
import Banimg from "../../assets/ban-img-home.png";
import Dataloc from "../../servay/dataloc.json";

const dataloc = Dataloc;

function Home() {
  return (
    <main>
      <>
        <Banner title="Chez vous, partout et ailleurs" img={Banimg} />
        <div className="container-k-gallery">
          {dataloc.map((data) => (
            <Card key={data.id} cover={data.cover} title={data.title} />
          ))}
        </div>
      </>
    </main>
  );
}

export default Home;
