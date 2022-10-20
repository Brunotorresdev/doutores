import styled from 'styled-components'
import ImgTitleSection from '../assets/images/abrace-a-causa.png'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgAlegria from '../assets/images/palhaco-balls.png'
import ImgHeart from '../assets/images/heart.png'
import { useNavigate } from 'react-router-dom'

const EmbraceCause: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <ImgTitle src={ImgTitleSection} alt="Imagina imaginar?" />

                  <p>
                     Nossas ações são destinadas a públicos em situação de
                     vulnerabilidade e risco social. Doutores <br /> da Alegria
                     conta com a doação de empresas e de pessoas para manter
                     seus projetos nas áreas <br /> de saúde, cultura e
                     assistência social. <br />
                     <br />
                     Como uma organização da sociedade civil sem fins
                     lucrativos, atuamos com transparência na <br /> prestação
                     de contas, cumprindo com a legislação brasileira e
                     priorizando o bom uso dos <br /> recursos públicos e
                     privados. Recebemos auditoria externa de todas as contas
                     anualmente. <br />
                     <br /> <br />
                  </p>

                  <div>
                     <HeaderImg src={ImgHeart} />
                     <p>
                        <span>
                           Faça uma doação única ou torne-se sócio mantenedor
                        </span>
                     </p>
                  </div>
                  <div>
                     <HeaderImg src={ImgHeart} />
                     <p>
                        <span>Patrocine como empresa</span> ou{' '}
                        <span>contrate intervenções e palestras</span>
                     </p>
                  </div>
                  <div>
                     <HeaderImg src={ImgHeart} />
                     <p>
                        Entre em contato para informações sobre doações e
                        parcerias: <br />{' '}
                        <span>parcerias@doutoresdaalegria.org.br.</span>
                     </p>
                  </div>
                  <PartnersOfJoy>
                     <h1>SÓCIOS DA ALEGRIA</h1>
                     <p>
                        Para conhecer quem ajuda Doutores da Alegria, <br />{' '}
                        <span>acesse a lista de sócios.</span>
                     </p>
                  </PartnersOfJoy>
               </div>
               <ImgPalhacos src={ImgAlegria} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/impacto-social')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>IMPACTO SOCIAL</p>
               </div>
               <div onClick={() => navigate('/contas')}>
                  <p>1+1 PRESTAÇÃO DE CONTAS</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default EmbraceCause

const Body = styled.div`
   background-color: #ffef00;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 150px;
   @media(max-width: 1100px){
      margin-top: -26%;
   padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 10px;
   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
   }
   span {
      padding: 5px 0;
      background-color: #f162a5;
      color: #fff;
   }
   div > p {
      margin-top: 50px;
      max-width: 676px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
   }
   div > div {
      display: flex;
      margin-bottom: 30px;
      p {
         margin: 0;
      }
   }
`
const Footer = styled.div`
   width: 100%;
   background-color: #ffef00;
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

   @media (max-width: 1050px) {
      display: none;
   }
`
const HeaderImg = styled.img`
   max-height: 28px;
   margin-right: 15px;
`

const PartnersOfJoy = styled.div`
   margin-top: 40px;
   flex-direction: column;
   h1 {
      margin-bottom: 15px;
   }
`
const ImgTitle = styled.img`
max-width: 600px;

@media(max-width: 610px){
   max-width: 500px;
}
@media(max-width: 510px){
   max-width: 350px;
}
`