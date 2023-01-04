import React from 'react';
import {servicos, equipe, regioes} from '../helpers/about';
import md5 from 'crypto-js/md5';
import './About.css';

function About() {
  return (
    <main className="page-container">
      <section id="servicos" className="sobre-section">
        <h2 className="secao-titulo">Nossos serviços</h2>
        <ul id="lista-servicos">
          {
            (servicos.sort()).map((servico) => (
              <li key={ servico }>{servico}</li>
            ))
          }
        </ul>
      </section>
      <section id="localidades" className="sobre-section">
        <h2 className="secao-titulo">Localidades</h2>
        <div id="container-localidades">
          {
            regioes.map((regiao, index) => (
              <ul key={ index }>
                <h4 className="regiao-titulo">{ regiao.estado }</h4>
                {
                  (regiao.cidades.sort()).map((cidade) => (
                    <li key={ cidade }>{cidade}</li>
                  ))
                }
              </ul>
            ))
          }
        </div>
      </section>
      <section id="equipe" className="sobre-section">
        <h2 className="secao-titulo">Nossa equipe</h2>
        <div id="equipe-container">
          {
            equipe.map((colaborador, index) => {
              const titulos = colaborador.titulos;
              const hash = md5(colaborador.email).toString();
              const url = `https://www.gravatar.com/avatar/${hash}`;
              return (
              <div className="colaborador-card" key={ `${colaborador.name}-${index}` }>
                <img src={ url } alt={ colaborador.name } className="colaborador-thumb" />
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
