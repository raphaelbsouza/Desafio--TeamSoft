import React from 'react'
import './App.css';


import deliverizelogo1 from '../src/imgs/deliverizelogo1.png';
import deliverizelogo2 from '../src/imgs/deliverizelogo2.png';
import icone1 from '../src/imgs/icones/icone1/account_circle_24px.png';
import icone2 from '../src/imgs/icones/icone2/shopping_cart_24px.png';
import icone3 from '../src/imgs/icones/icone3/Ellipse 10.png';
import PicanhaBacon from '../src/imgs/PicanhaBacon.png';
import line from '../src/imgs/line1.png';
import vector1 from '../src/imgs/vector1.png';
import vector2 from '../src/imgs/vector2.png';
import keyboard from '../src/imgs/keyboard_arrow_down_24px.png';
import arrow_24px from '../src/imgs/arrow_24px.png'
import vector3 from '../src/imgs/vector3.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="nav--logo">
            <img className="nav--button" src={arrow_24px} alt="arrow24px" />
            <div className="nav--logo1"><img alt="" src={deliverizelogo1} /></div>
            <div className="nav--logo2"><img alt="" src={deliverizelogo2} /></div>
          </div>
          <div className="nav__topolinear">
            <div className="nav--background">
              <h1 className="nav--background_entrega">Entrega:</h1>
              <h1 className="nav--background_endereco">R: Antonie Braune, 222</h1>
              <img alt="" src={keyboard} className="__keyboard" />
            </div>
            <div className="nav--inputplaceholder">
              <form>
                <input className="nav--inputplaceholder" type="text" placeholder=" Busque por estabelecimento ou produtos"></input>
              </form>
            </div>
            <div className="div--ul">
              <ul className="nav--ul">
                <div className="ul--1">
                  <div className="nav--icone1"><img alt="" src={icone1} /> </div>
                  <li class="nav--link1"><a href="https://www.deliverize.com.br/">Entrar</a></li>
                </div>
                <div className="ul--2">
                  <div className="nav--icone2"><img alt="" src={icone2} /></div>
                  <div className="nav--ico2part2"><img alt="" src={icone3} /></div>
                  <div className="link--carrinho">
                    <li class="nav--link2"><a href="https://www.deliverize.com.br/">Carrinho</a></li>
                    <p className="ico--numero">1</p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="main--flex-container">
          <section className="main--div_esquerda">
            <div className="main--divpicanha">
              <img className="main--PicanhaBacon" alt="" src={PicanhaBacon} />
            </div>
            <div className="main--Oferta">
              <h1 className="main--text1">Oferta Picanha Cheddar Bacon</h1>
              <h1 className="main--text2">Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</h1>
              <div className="main--preco">
                <div className="main--text3">
                  <h1 className="text3--atual">R$31,99 </h1>
                  <h1 className="text3--antigo">R$34,95</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="main--div_direita">
            <div className="divdireita--box">
              <div className="box--rectangle1">
                <p className="box--text1">Adicionar Ingredientes</p>
                <p className="box--text2">Até 8 ingredientes.</p>
              </div>
              <div className="container--ingredientes">
                <div className="container--rectangle">
                  <div className="container--ingredientes">
                    <div className="rectangle--ingrediente">
                      <div className="ingrediente--nome"><b>Queijo cheddar</b></div>
                      <div className="input--qtd">
                        <div className="rectangle--input">
                          <img src={vector1} alt="" className="__vector1" />
                          <form>
                            <input className="container--inputqtd" type="text" id="qtd" value="  2"></input>
                          </form>
                          <img src={vector2} alt="" className="__vector2" />
                        </div>
                      </div>
                      <div className="ingrediente--valor">+ R$ 4,99</div>
                    </div>
                    <img className="container--line" alt="" src={line} />
                    <div className="rectangle--ingrediente">
                      <div className="ingrediente--nome"><b>Cebola crispy</b></div>
                      <div className="input--qtd">
                        <div className="rectangle--input">
                          <img src={vector3} alt="" className="__vector3" />
                          <form>
                            <input className="container--inputqtd" type="text" id="qtd" value="  0"></input>
                          </form>
                          <img src={vector2} alt="" className="__vector2" />
                        </div>
                      </div>
                      <div className="ingrediente--valor">+ R$1,50</div>
                    </div>
                    <img className="container--line" alt="" src={line} />
                    <div className="rectangle--ingrediente">
                      <div className="ingrediente--nome"><b>Molho cheddar</b></div>
                      <div className="input--qtd">
                        <div className="rectangle--input">
                          <img src={vector3} alt="" className="__vector3" />
                          <form>
                            <input className="container--inputqtd" type="text" id="qtd" value="  0"></input>
                          </form>
                          <img src={vector2} alt="" className="__vector2" />
                        </div>
                      </div>
                      <div className="ingrediente--valor">+ R$3,50</div>
                    </div>
                    <img className="container--line" alt="" src={line} />
                    <div className="rectangle--ingrediente">
                      <div className="ingrediente--nome"><b>Queijo cheddar</b></div>
                      <div className="input--qtd">
                        <div className="rectangle--input">
                          <img src={vector1} alt="" className="__vector1" />
                          <form>
                            <input className="container--inputqtd" type="text" id="qtd" value="  1"></input>
                          </form>
                          <img src={vector2} alt="" className="__vector2" />
                        </div>
                      </div>
                      <div className="ingrediente--valor">+ R$3,50</div>
                    </div>
                    <img alt="" className="container--line" src={line} />
                  </div>
                </div>
              </div>
              <div className="box--rectangle1">
                <h1 className="rectangle1--talher">Precisa de Talher?</h1>
                <div className="resposta--1">
                  <section className="resposta--sim">
                    teste
                  </section>
                  <section className="resposta--nao">
                    teste
                  </section>
                </div>
                <div></div>
              </div>
            </div>
            <div className="__bottom">
              <div className="__add">
                <div className="bottom--rectangle">
                  <img alt="" src={vector1} className="__vector1" />
                  <form>
                    <input className="container--inputqtd" type="text" id="qtd" value="  1"></input>
                  </form>
                  <img alt="" src={vector2} className="__vector2" />
                </div>
              </div>
              <button className="button--add">Adicionar</button>
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}

export default App;
