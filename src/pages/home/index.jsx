import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index";
import Banimg from "../../assets/ban-img-home.png";

function Home() {
  return (
    <main>
      <>
        <Banner title="Chez vous, partout et ailleurs" img={Banimg} />
        <Card />
      </>
    </main>
  );
}

export default Home;
