import styled from 'styled-components'
import BaseLayoult from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import Title from '../assets/images/all-virtual-title.png'
import Palhacos from '../assets/images/all-virtual-image.png'
import ImageData from '../assets/images/all-virtual-data.png'
import ImageDataMobile from '../assets/images/all-virtual-data-mobile (2).png'
import ImageDepoiments from '../assets/images/all-virtual-depoiments-bg.png'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from 'components/ScrollTop'

const AllVirtual: React.FC = () => {
   const navigate = useNavigate()

   ScrollTop()

   return (
      <BaseLayoult>
         <Body>
            <Section>
               <div>
                  <img src={Title} alt="Imagina imaginar?" />
                  <p>
                     Tínhamos uma regra clara: enquanto as palhaças e palhaços
                     não estivessem totalmente imunizados e não fosse seguro
                     —tanto para o hospital quanto para nossos profissionais—
                     retomar as visitas presenciais, seguiríamos com os projetos
                     virtualmente,{' '}
                     <a
                        href="https://doutoresdaalegria.org.br/doutores-em-casa/"
                        target="blank"
                     >
                        como havia sido em 2020.
                     </a>
                  </p>
                  <p>
                     Realizamos cinco edições da live “Conta Causos”, que era
                     uma adaptação do espetáculo teatral com histórias de
                     hospitais contadas pelos artistas. A “Roda Besteirológica
                     Digital” teve edição única, em junho, e apresentou cenas
                     dos palhaços inspiradas nos atendimentos.
                  </p>
                  <p>
                     Na Escola, o Programa de Formação de Palhaço para Jovens
                     (PFPJ) recebeu sua nona turma em maio. Os 25 estudantes
                     selecionados iniciaram as aulas de maneira virtual. Também
                     criamos os “Encontros Culturais”, lives em que convidados
                     batiam papo com a equipe do Doutores da Alegria para tratar
                     de temas como saúde mental, arte, racismo e educação. Entre
                     os participantes, Lala Deheinzelin, Vera Iaconelli, Carlos
                     Barmak, Jaime Carbonell e Cleber Teixeira.
                  </p>
                  <p>
                     E, finalmente, em agosto, o espetáculo “Aquele Momento Em
                     Que” ganhou temporada virtual, com circulação pelo canal
                     dos teatros Alfredo de Mesquita, Arthur de Azevedo e
                     Cacilda Becker no YouTube.
                  </p>
                  <p>
                     Todos os{' '}
                     <a
                        href="https://doutoresdaalegria.org.br/hospitais/palhacos-nos-hospitais/"
                        target="blank"
                     >
                        hospitais públicos atendidos em São Paulo e em Recife
                     </a>{' '}
                     passaram a receber visitas virtuais. A dupla de artistas
                     interagia online com pacientes por meio de tablets, em
                     projeto que começou como piloto em agosto de 2020.
                  </p>
                  <p>
                     Equipes dos hospitais carregavam os aparelhos pelos
                     quartos, convidando crianças e adultos a receberem a visita
                     online dos besteirologistas de plantão.
                  </p>
               </div>
               <ImgPalhacos src={Palhacos} alt="" />
            </Section>
            <SectionDepoiments>
               <DepoimentTop>
                  “É uma emoção "andar" pelos corredores e ver todos trabalhando
                  depois de um ano. Em um tempo tão louco, o contato com o outro
                  é essencial para a saúde e a sanidade.”
                  <Signature>Val Pires / Dr. Valdisney</Signature>
               </DepoimentTop>
               <DepoimentBottom>
                  “Thamirys e Linda fazem com que nossas pernas sejam as delas,
                  nosso olhar chegue através do olhar delas e nossa escuta se
                  misture com a delas.”
                  <Signature>Olga Ferrario / Dra. Muskyta</Signature>
               </DepoimentBottom>
               <ImgDepoimentsBG src={ImageDepoiments} />
            </SectionDepoiments>
            <Section>
               <ImgData src={ImageData} />
               <ImgDataMobile src={ImageDataMobile} />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/imaginar')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Imagina Imaginar</p>
               </div>
               <div onClick={() => navigate('/meio-a-meio')}>
                  <p>Retorno Meio a Meio</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayoult>
   )
}

export default AllVirtual

const Body = styled.div`
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 250px;
   overflow-x: hidden;
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 15px;
   position: relative;

   @media (max-width: 1050px) {
      flex-direction: column-reverse;
   }

   h1 {
      font-family: 'Roboto Condensed', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
   }

   a {
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
   }

   div > p {
      margin-top: 50px;
      max-width: 620px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
   }

   > div > img {
      width: 100%;
      @media (max-width: 500px) {
         width: 111%;
         height: 100px;
      }
   }
`

const Footer = styled.div`
   width: 100%;
   border-top: 2px solid black;
   padding: 0 5px;
`

const FooterContainer = styled.div`
   max-width: 1441px;
   margin: auto;
   display: flex;
   align-items: center;
   display: flex;
   justify-content: space-between;
   padding: 40px 0px;
   div {
      display: flex;
      align-items: center;
      img {
         cursor: pointer;
      }
   }

   p {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: right;
      text-transform: uppercase;
      color: #000000;
      margin: 0 5px;
   }
`

const ImgPalhacos = styled.img`
   position: absolute;
   right: 0;
   width: 35%;
   margin-top: 200px;
   max-width: 500px;

   @media (max-width: 1050px) {
      margin-top: 0px;
      position: relative;
      max-width: 600px;
      width: 100%;
   }
`
const ImgData = styled.img`
   width: 100%;
   height: 100%;
   @media (max-width: 500px) {
      display: none;
   }
`
const ImgDataMobile = styled.img`
   display: none;
   @media (max-width: 500px) {
      display: block;
      width: 100%;
   }
`

const SectionDepoiments = styled(Section)`
   min-height: 262px;
   margin-top: 110px;
   margin-bottom: 110px;
`
const ImgDepoimentsBG = styled.img`
   position: absolute;
   width: 120%;
   height: 262px;
   left: -100px;
   z-index: -1;

   @media (max-width: 990px) {
      display: none;
   }
`
const DepoimentTop = styled.p`
   max-width: 425px;
   width: 100%;
   top: -30px;
   position: absolute;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;

   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 26px;
   color: #000000;

   > span {
      display: block;
      margin-top: 10px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 32px;
      color: #000000;
   }

   @media (max-width: 990px) {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      padding: 0 15px;
   }
`
const DepoimentBottom = styled(DepoimentTop)`
   top: 170px;
   right: -350px;

   @media (max-width: 990px) {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
   }
`
const Signature = styled.p`
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 32px;
   color: #000000;
`
