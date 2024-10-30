import { Link } from "react-router-dom";
import './css/Ending.css';

function TopPage() {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="balloon-007">
              <p className="output">
                今日は来てくれてありがとニャン！
                <br />
                またあそびに来て欲しいニャン！
              </p>
            </div>
          </div>
          <div className="col-4">
            <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/img/catGoodBye.png`} alt="GoodBye" />
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <Link to="/" className="btn btn-primary">最初に戻る</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPage;
