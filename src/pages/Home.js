import React, { useState } from 'react'
import { esocial, documentacoes, penalidades, adequacoes } from '../helpers/texts';
import './Home.css';

function Home() {

  const [showDocs, setShowDocs] = useState(false);
  const [showPenalidades, setShowPenalidades] = useState(false);
  const [showAdequacoes, setShowAdequacoes] = useState(false);

  const generateText = (string) => {
    const newArray = string.split('//n');
    return newArray.map((paragraph, index) => (
      <p className="description-text" key={ index }>{ paragraph }</p>
    ));
  }

  const handleClick = (stateName) => {
    if (stateName === 'showDocs') {
      switch (showDocs) {
        case true:
          setShowDocs(false);
          break;      
        default:
          setShowDocs(true);
          break;
      }
    }
    if (stateName === 'showPenalidades') {
      switch (showPenalidades) {
        case true:
          setShowPenalidades(false);
          break;      
        default:
          setShowPenalidades(true);
          break;
      }
    }
    if (stateName === 'showAdequacoes') {
      switch (showAdequacoes) {
        case true:
          setShowAdequacoes(false);
          break;      
        default:
          setShowAdequacoes(true);
          break;
      }
    }
  }
  
  return (
    <div className="page-container">
      <main>
        <section className="presentation">
          { generateText(esocial) }
        </section>
        <section className="documentation" onClick={ () => handleClick('showDocs') }>
          <div className="items-section">
            <button>
              Quais documentações de segurança do trabalho são necessárias para o eSocial?
            </button>
            <article>
              {
                showDocs ? generateText(documentacoes) : null
              }
            </article>
          </div>
        </section>
        <section className="penalidades" onClick={ () => handleClick('showPenalidades') }>
          <div className="items-section">
            <button>
              O que acontece se eu não cumprir com as obrigações do e-Social? 
            </button>
            <article>
              {
                showPenalidades ? generateText(penalidades) : null
              }
            </article>
          </div>
        </section>
        <section className="adequacoes" onClick={ () => handleClick('showAdequacoes') }>
          <div className="items-section">
            <button>
              O que eu preciso para me adequar ao e-Social? 
            </button>
            <article>
              {
                showAdequacoes ? generateText(adequacoes) : null
              }
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
