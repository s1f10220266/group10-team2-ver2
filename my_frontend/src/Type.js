import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Type.css';

function Type() {
    const apiUrl = "https://uranai-iniad.onrender.com";
    const typeApiUrl = `${apiUrl}/api/type`;
    const scenarioApiUrl = `${apiUrl}/api/scenario`;

    const [typeResult, setTypeResult] = useState('');
    const [typeExplain, setTypeExplain] = useState('');
    const [job, setJob] = useState('');
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchTypeResult = async () => {
            try {
                const response = await fetch(typeApiUrl);
                if (response.ok) {
                    const data = await response.json();
                    setTypeResult(data.typeResult);
                    setTypeExplain(data.typeExplain);
                } else {
                    console.error("結果が見つかりません");
                }
            } catch (error) {
                console.error("エラーが発生しました:", error);
            }
        };
        fetchTypeResult();
    }, []);

    const handleScenarioGenerate = async (e) => {
        e.preventDefault();
        setClicked(true);
        try {
            const receive = await fetch(scenarioApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ job }),
            });
            const result = await receive.json();
            if (result.scenarioReady) {
                navigate("/scenario");
            } else {
                console.error("シナリオの準備に失敗しました");
            }

        } catch (error) {
            console.error("エラーが発生しました:", error);
        }
    };

  return (
    <>
    <div className="container-fluid text-center">

        <div className='row justify-content-center pageTop'>
            <div className='col-auto'>
                <p id='title'>性格チェック</p>
            </div>
        </div>

        <div className='row justify-content-center judge'>
            <div className='col-auto'>
                {typeResult ? (
                        <p className='yourTypeIs'>あなたの性格タイプは <strong className='type'>{typeResult}</strong> です！</p>
                    ) : (
                        <p className='yourTypeIs'>分析中...</p>
                )}
            </div>
        </div>

        <div className='row justify-content-center explain'>
            <div className='col-auto'>
                {typeExplain ? (
                    <div style={{whiteSpace: 'pre-line'}}><p className='output'>{typeExplain}</p></div>
                ) : (<p className='yourTypeIs'>分析中...</p>

                )}
            </div>
        </div>

        <div className='row justify-content-center text-center attention'>
            <div className='col-auto'>
                <strong className='attentionTxt'>この結果は、あくまで性格タイプの特徴を表現したものです。<br />
                個人の性格を完全に表現するものではありません。<br />
                参考程度にお読みいただき、あなた自身の性格を大切にしてください。
                </strong>
            </div>
        </div>

        <div className='row justify-content-center txt'>
            <div className='col-auto'>
                <p className='system'>次になりたい職業を入力して、シナリオを生成しましょう！</p>
            </div>
        </div>

        {clicked ? (
            <div className='row justify-content-center text-center'>
                <div className='col-auto'>
                    <p className='genStart'>
                        uranaiCatちゃんが占いを開始しました！！<br />
                        少々お待ちください...
                    </p>
                </div>
            </div>
        ) : (
            <p></p>
        )}

        <div className="row justify-content-center userInput">
            <div className="col-4">
                <form onSubmit={handleScenarioGenerate}>
                    <div className='input-group'>
                        <input autoComplete='off' className='form-control form-control-sm text-center' type="text" name="userJob" value={job} onChange={(e) => setJob(e.target.value)} placeholder='例) プログラマー' />
                        <button type="submit" className="btn btn-outline-primary">占い開始！</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>
  );
}

export default Type;
