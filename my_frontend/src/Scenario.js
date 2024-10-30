import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Scenario.css';

function Scenario() {
    const apiUrl = "https://uranai-iniad.onrender.com";
    const scenarioApiUrl = `${apiUrl}/api/scenario`;
    const [userScenario, setUserScenario] = useState('');
    const [userJob, setUserJob] = useState('');
    const [userType, setUserType] = useState('');
    useEffect(() => {
        const fetchScenario = async () => {
            try {
                const response = await fetch(scenarioApiUrl);
                if (response.ok) {
                    const data = await response.json();
                    setUserScenario(data.scenario);
                    setUserType(data.type);
                    setUserJob(data.job);
                } else {
                    console.error("シナリオが見つかりません");
                }
            } catch (error) {
                console.error("エラーが発生しました:", error);
            }
        };
        fetchScenario();
    }, []);
  return (
    <>
    <div className='container-fluid'>
        <div className='row justify-content-center text-center pageTop'>
            <div className='col-5'>
                {userType ? (
                    <p className='output'>
                    キミの性格タイプ<br />
                    {userType}
                    </p>
                ): (
                    <p></p>
                )}
            </div>
            <div className='col-2'>
                <p className='output'>
                    |<br />|
                </p>
            </div>
            <div className='col-5'>
                {userJob ? (
                    <p className='output'>
                    キミのなりたい職業<br />
                    {userJob}
                    </p>
                ) : (
                    <p></p>
                )}
            </div>
        </div>

        <div className='row justify-content-center text-center ans'>
            <div className='col-8 d-flex justify-content-center'>
                <div className='balloon-007'>
                    {userScenario ? (
                        <div style={{ whiteSpace: 'pre-line' }}><p className='output'>{userScenario}</p></div>
                    ) : (
                        <p className='output'>うーん...</p>
                    )}
                </div>
            </div>
            <div className='col-4'>
                <img className='img-fluid w-100' src="/static/img/catFortuneTelling.gif" alt="占い中" />
            </div>
        </div>

        <div className='row justify-content-center text-center attention'>
            <div className='col-auto'>
                <strong className='attentionTxt'>uran<span className='ai'>ai</span>Catちゃんの占いにもアタリハズレがあります。参考程度にお読みください。</strong>
            </div>
        </div>

        <div className='row justify-content-center btnArea'>
            <div className='col-auto'>
                <Link to="/ending" className="btn btn-primary">おしまい</Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default Scenario;
