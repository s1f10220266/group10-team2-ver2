import { Link } from 'react-router-dom';
import './css/TopPage.css';


function TopPage() {
  const backgroundStyle = {
    backgroundImage: `/static/img/uranaiBackGround.jpg)`,
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
              <h1 className='appName'>URAN<span className='ai'>AI</span></h1>
            </div>
          </div>
          <div className='row justify-content-center text-center intro-area'>
            <div className='col-auto'>
              <p className='intro'>
                "URANAI"は、近年注目されている生成AIを利用した就活サービスです<br />
                現在も開発中のサービスです！お楽しみいただけたら幸いです！
              </p>
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
