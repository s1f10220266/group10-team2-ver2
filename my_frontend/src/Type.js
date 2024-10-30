import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Type.css';

function Type() {
    const [typeResult, setTypeResult] = useState('');
    const [typeExplain, setTypeExplain] = useState('');
    const [job, setJob] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const fetchTypeResult = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5001/api/type');
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
        const receive = await fetch('http://127.0.0.1:5001/api/scenario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({job}),
        });
        const result = await receive.json(); 
        if (result.scenarioReady) {
            navigate("/scenario");
        }
    }



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
                        <p>あなたの性格タイプは <strong className='type'>{typeResult}</strong> です！</p>
                    ) : (
                        <p>分析中...</p>
                )}
            </div>
        </div>

        <div className='row justify-content-center explain'>
            <div className='col-auto'>
                {typeExplain ? (
                    <div style={{whiteSpace: 'pre-line'}}><p className='output'>{typeExplain}</p></div>
                ) : (<p>分析中...</p>

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
