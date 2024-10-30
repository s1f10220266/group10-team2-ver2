import { Link } from 'react-router-dom';
import './css/TopPage.css';


function TopPage() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/uranaiBackGround.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    height: '100vh'
  };
  return (
    <>
      <div className='pageAll' style={backgroundStyle}>
      <div className="container-fluid d-flex justify-content-center align-items-center overview">
        <div className="text-center">
          <div className='row'>
            <div className='col'>
              <h1>URAN<span className='ai'>AI</span></h1>
            </div>
          </div>
          <div className='row startBtn'>
            <div className='col'>
              <Link to="/uranai" className="btn btn-primary uranaiStart">はじめる</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default TopPage;
