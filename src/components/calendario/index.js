import { Container, Header, Section } from './style';
import { FaBars, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Img from '../img/Pedro Franco.jpg'
import pedroImg from '../img/pedroFanco.jpg';
import waltImg from '../img/walt.jpg';
import lazaroImg from '../img/lAazaro.jpg';

function Calendario() {
    return(
        <Container>
            <section>
                <Header classeName='top-view'>
                    <div id='fundo-cor'>
                        <nav>
                            <button>
                                <FaBars />
                            </button>

                            <button>
                                <FaSearch />
                            </button>
                        </nav>

                        <div id='img'>
                            <h1>Boa noite!</h1>
                            <img src={Img} />
                        </div>

                        <div id='mes'>
                            <button type='button'>
                                <FaChevronLeft />
                            </button>

                            <h2>Fevereiro</h2>

                            <button type='button'>
                            <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </Header>

                <Section classeName='botton-view'>
                    <ul>
                        <li>S</li>
                        <li>T</li>
                        <li>Q</li>
                        <li>Q</li>
                        <li>S</li>
                        <li>S</li>
                        <li>D</li>
                    </ul>

                    <ul id='dias'>
                        <li>7</li>
                        <li id='circlo'>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>

                    <div>
                        <img src={pedroImg} />

                        <footer>
                            <strong>Pedro Franco</strong>
                            <span>8-20am</span>
                        </footer>
                    </div>

                    <div>
                        <img src={lazaroImg} />

                        <footer>
                            <strong>Lázaro Manuel</strong>
                            <span>10-10am</span>
                        </footer>
                    </div>
                    
                    <div>
                        <img src={waltImg} />

                        <footer>
                            <strong>Walt De Jesus</strong>
                            <span>11-2am</span>
                        </footer>
                    </div>
                </Section>
            </section>
        </Container>
    );
}

export default Calendario;