import styled from 'styled-components'
import ImgTitleSection from '../assets/images/title-imagina.png'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgAlegria from '../assets/images/image-alegria.png'
import BaseLayout from 'components/BaseLayout'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from 'components/ScrollTop'

const Imagine: React.FC = () => {
   const navigate = useNavigate()

   ScrollTop()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <ImgTitle src={ImgTitleSection} alt="Imagina imaginar?" />
                  <h1>
                     Superação de desafios impostos pela pandemia e campanha
                     pública
                  </h1>
                  <p>
                     Em maio, lançamos uma{' '}
                     <a
                        href="https://doutoresdaalegria.org.br/blog/voce-ja-imaginou-o-hospital-sem-doutores-da-alegria/"
                        target="blank"
                     >
                        campanha virtual para arrecadar recursos
                     </a>{' '}
                     e dar luz ao momento inédito vivenciado pela organização.{' '}
                     <br />
                     <br /> À espera da tramitação do Plano Anual na Lei de
                     Incentivo à Cultura, já estávamos há cinco meses usando o
                     fundo de reserva financeiro, construído durante quinze anos
                     para situações emergenciais. Ele se esgotaria em pouco
                     tempo. <br />
                     <br /> A sociedade reagiu. Influenciadores digitais se
                     engajaram na causa, assim como pessoas que fizeram doações
                     e ajudaram a manter o trabalho que é gratuito para{' '}
                     hospitais.
                  </p>
               </div>
               <ImgPalhacos src={ImgAlegria} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/emergencia')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Emergência</p>
               </div>
               <div onClick={() => navigate('/tudo-virtual')}>
                  <p>Tudo virtual</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default Imagine

const Body = styled.div`
   background-color: #ffef00;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 150px;
   @media (max-width: 1320px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 15px;

   h1 {
      font-family: 'Roboto Condensed';
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

   div {
      max-width: 664px;
      width: 100%;
   }

   div > p {
      margin-top: 50px;
      max-width: 676px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
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
   margin-top: 200px;
   max-width: 500px;

   @media (max-width: 1050px) {
      display: none;
   }
`
const ImgTitle = styled.img`
   max-width: 476px;

   @media (max-width: 480px) {
      max-width: 300px;
   }
`
