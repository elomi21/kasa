import Gmlogobw from '../../assets/logokasaB-bw.svg'
import "../../styles/index.scss";


function Footer() {
    return (
      <footer className="k-f">
        <div className='k-f-c'>
          <img src={Gmlogobw} alt="logo-kasa" className="k-f-c-img" />
          <p className="k-f-c-p">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
}
 
export default Footer