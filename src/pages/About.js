import React from 'react';
import {servicos, equipe} from '../helpers/about';
import './About.css';

function About() {
  return (
    <main className="page-container">
      <section>
        <h2>Nossos serviços</h2>
        <ul>
          {
            (servicos.sort()).map((servico) => (
              <li key={ servico }>{servico}</li>
            ))
          }
        </ul>
      </section>
      <section>
        <h2>Nossa equipe</h2>
        <div id="equipe-container">
          {
            equipe.map((colaborador, index) => {
              const titulos = colaborador.titulos;
              return (
              <div className="colaborador-card" key={ `${colaborador.name}-${index}` }>
                <img src={ colaborador.thumb } alt={ colaborador.name } className="colaborador-thumb" />
                <h3 className="colaborador-nome">{ colaborador.name }</h3>
                <h4 className="colaborador-cargo">{ colaborador.cargo }</h4>
                <details className="colaborador-detalhes">
                  <summary>Detalhes</summary>
                  {
                    titulos.map((titulo) => (
                      <p key={ titulo } className="detalhes-text">{ titulo }</p>
                    ))
                  }
                  <p className="detalhes-text">{ colaborador.email }</p>
                  <p className="detalhes-text">{ colaborador.telefone }</p>
                </details>
              </div>
            )})
          }
        </div>
      </section>
    </main>
  )
}

export default About;
