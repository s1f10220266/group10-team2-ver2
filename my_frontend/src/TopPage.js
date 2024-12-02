import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './css/TopPage.css';


function TopPage() {
  const backgroundStyle = {
    backgroundImage: `url('/static/img/uranaiBackGround.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    height: '100vh'
  };

  const [action, setAction] = useState(null);

  const handleIntroBtnClick = (n) => {
    setAction(n);
  }

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

          <div className='row justify-content-center text-center'>
            <div className='col-auto'>
              <p className='intro'>
                "URANAI"は、近年注目されている生成AIを活用した就活サービスです。<br />
                現在も開発中のサービスです！お楽しみいただけたら幸いです！<br />
                現在は、PC環境での利用を推奨いたします。
              </p>
            </div>
          </div>

          <div className='row justify-content-center test-center introBtn'>
            <div className='col-auto'>    
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio1" onClick={() => handleIntroBtnClick("abouturanai")}>URANAIとは？</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio2" onClick={() => handleIntroBtnClick("howtouranai")}>URANAIのはじめ方</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio3" onClick={() => handleIntroBtnClick("aboutus")}>開発者について</label>
              </div>
            </div>
          </div>

          <div className='row justify-content-center test-center intro-box'>
            {action === "abouturanai" && (
              <div className='col-auto'>
                <strong className='intro-title'>URANAIとは？</strong>
                <p className='intro-text'>
                  URANAIとは、ChatGPT-4o miniを活用した就活を支援するWebアプリです。<br />
                  調査を行った結果、"早期離職"が社会問題となっていることがわかりました。<br />
                  データから見ても、およそ3割の人が3年以内に離職しており、<br />
                  また、退職した理由としては、"仕事が自分に合わない"が全体の4割と最も多いことがわかりました。<br />
                  そこで私たちは、柔軟な生成力、分析力をもつ生成AIを活用し、最終的にミスマッチを減らすことを目的としたURANAIの開発を始めました。<br />
                  URANAIの名前の由来は、生成AIの"<span className='ai'>AI</span>"と、"将来を<span className='ai'>占う</span>ようなアプリ"をもじって考案しました^^。
                </p>
              </div>
            )}
            {action === "howtouranai" && (
              <div className='col-auto'>
                <strong className='intro-title'>URANAIのはじめ方</strong>
                <p className='intro-text'>
                  URANAIでは、まず、性格診断を行います。<br />
                  性格診断の結果は最近話題の16タイプでお返しします。<br />
                  その後、あなたのなりたい職業をお聞きします。<br />
                  あなたの性格と、なりたい職業から、有名占い師のuranaiCatさんが将来のシナリオを作成してくれます。<br />
                  シナリオには、あなたが希望する職業に就いた際に、どうなるのか書かれています。<br />
                  uranaiCatさんの占いでも、アタリ・ハズレはあるので参考程度にお読みください。<br />
                </p>
                <strong className='intro-ul'>1. 質問数を選択し、質問に回答</strong><br />
                <strong className='intro-ul'>2. 性格タイプを確認し、なりたい職業を入力</strong><br />
                <strong className='intro-ul'>3. 占いを開始する</strong><br />
                <strong className='intro-ul'>4. uranaiCatさんのシナリオを読む</strong><br />
              </div>
            )}
            {action === "aboutus" && (
              <div className='col-auto'>
                <strong className='intro-title'>開発者について</strong>
                <p className='intro-text'>以下のサイトにアプリや、チームの紹介をまとめております。</p>
                <a className='intro-text' href='https://sites.google.com/iniad.org/1002/%E3%83%9B%E3%83%BC%E3%83%A0' target='_blank'>Google Site</a>
              </div>
            )}
          </div>

          <div className='row justify-content-center test-center'>
            <div className='col-auto'>

            </div>
          </div>

          <div className='row startBtn'>
            <div className='col'>
              <Link to="/uranai" className="btn btn-primary uranaiStart">URANAIをはじめる</Link>
            </div>
          </div>

        </div>

      </div>
      </div>
    </>
  );
}

export default TopPage;
