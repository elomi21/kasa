import "../../styles/index.scss";

function Banner({ title, img }) {
  return (
    <div className="container-k-b">
      <img src={img} alt="banner" className="k-b-img" />
      <h1 className="k-b-title">{title}</h1>
    </div>
  );
}
export default Banner;
