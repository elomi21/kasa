import Banimg from "../assets/ban-img.png";

function Banner() {
  return (
    <div className="k-b">
      <img src={Banimg} alt="photo banner" className="k-b-img" />
      <h1 className="k-b-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}
export default Banner;
