import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MainPage.css';

function MainPage() {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const navigate = useNavigate();  // useNavigate フックに変更

    // 質問内容
    const questions = {
        e_or_i: [
            "人から注目されるのが好きだ",
            "人と関わるのが好きだ",
            "急な予定でも、勢いに任せて出掛ける",
            "休日は誰かとワイワイ過ごす",
            "期間限定のメニューが気になる",
        ],
        s_or_n: [
            "自炊の時に、レシピをしっかりチェックする",
            "恋人に求めるのは中身より見た目",
            "説明書は読む派",
            "集中している時に声をかけられても平気",
            "作文は構成をしっかり決めてから書く",
        ],
        t_or_f: [
            "効率よく物事を進めたい",
            "他人の考えはあまり興味がない",
            "悩んでいる友達には、共感するより解決策を提案する",
            "本を手に取ったら、目次を飛ばして、内容を読み始める",
            "衝動買いはしないタイプ",
        ],
        p_or_j: [
            "計画通りの人生は楽しくない",
            "いつもギリギリで行動する",
            "臨機応変に対応できる",
            "夏休みの宿題は後回し",
            "一度決めた考えは曲げない",
        ]
    }
    const handleQuestionEvent = (e) => {
        setSelectedNumber(Number(e.target.value));
    };

    const handleTypeJudge = async () => {
        const answers = {};
        
        Object.keys(questions).forEach(key => {
            answers[key] = [];
            questions[key].forEach((_, i) => {
                const selectedOption = document.querySelector(`input[name="${key}_${i}"]:checked`);
                if (selectedOption) {
                    answers[key].push(parseInt(selectedOption.value, 10));
                } else {
                    answers[key].push(0); 
                }
            });
        });
    
        try {
            const response = await fetch('http://127.0.0.1:5001/api/type', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });
            const result = await response.json();
            if (result.ready) {
                console.log("診断完了");
                navigate("/type");
            }
        } catch (error) {
            console.error('エラーが発生しました:', error);
        }
    };
    
    return (
        <div className="container-fluid justify-content-center text-center">
            <div className='row justify-content-center pageTop'>
                <div className='col-auto'>
                    <h1>URAN<span className='ai'>AI</span></h1>
                </div>
            </div>

            <div className='row justify-content-center intro'>
                
                <div className='col-6 text-center'>
                    <div className='balloon-007 text-center'>
                        <p className='output'>ようこそ〜<br />
                        ここはURAN<span className='ai'>AI</span>の館だニャン〜<br />
                        キミの性格となりたい職業を教えてくれたら、<br />
                        私が君の将来を占うニャン〜
                        </p>
                        </div>
                </div>
                
                
                <div className='col-4'>
                    <img className='img-fluid' src={`${process.env.PUBLIC_URL}/img/uranaiCat.jpg`} alt="説明" />
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col text-center'>
                    <p id="system">まずは質問数を選んで、質問に回答してください！</p>
                </div>
            </div>
            
            <div className='row justify-content-center btnArea'>
                <div className='col-auto'>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" value="4" className="btn btn-outline-primary" onClick={handleQuestionEvent}>質問数4</button>
                        <button type="button" value="8" className="btn btn-outline-primary" onClick={handleQuestionEvent}>質問数8</button>
                        <button type="button" value="16" className="btn btn-outline-primary" onClick={handleQuestionEvent}>質問数16</button>
                    </div>
                </div>
            </div>

            <div id="quizArea">
                {Object.keys(questions).map((key) =>
                    questions[key]
                        .slice(0, selectedNumber / 4)
                        .map((q, i) => (
                            <fieldset key={`${key}_${i}`}>
                                <div className='row justify-content-center'>
                                    <div className='col-auto'>
                                        <legend>{q}</legend>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className='col-auto radio-2'>
                                        <label>
                                            <input type="radio" name={`${key}_${i}`} value="2" />
                                            <span className='opt'>あてはまる</span>
                                        </label>
                                        <label>
                                            <input type="radio" name={`${key}_${i}`} value="1" />
                                            <span className='opt'>少しあてはまる</span>
                                        </label>
                                        <label>
                                            <input type="radio" name={`${key}_${i}`} value="-1" />
                                            <span className='opt'>あまりあてはまらない</span>
                                        </label>
                                        <label>
                                            <input type="radio" name={`${key}_${i}`} value="-2" />
                                            <span className='opt'>あてはまらない</span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                        ))
                )}
            </div>


            {selectedNumber > 0 && (<div className='row justify-content-center checkBtn'>
                <div className='col-auto'>
                    <button className="btn btn-outline-primary" onClick={handleTypeJudge}>性格をチェックする</button>
                </div>
            </div>)}
        </div>
    );
}

export default MainPage;
