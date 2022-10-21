import styled from 'styled-components'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgEmergency from '../assets/images/title-pensando-em-voz-alta.png'
import ImgDoutora from '../assets/images/doutora.png'
import BaseLayout from 'components/BaseLayout'
import { useNavigate } from 'react-router-dom'

const ThinkingOutLoud: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <img src={ImgEmergency} alt="" />
                  <h1>
                     PODCAST E BOCA LARGA ABORDAM ARTE E SAÚDE MENTAL EM TEMPOS
                     DE PANDEMIA
                  </h1>

                  <p>
                     As experiências de produção artística vividas no
                     confinamento da pandemia foram processadas de maneiras
                     diferentes pelos palhaços e palhaças. E também pela equipe
                     de profissionais que atuam nos diversos projetos da
                     associação.
                     <br />
                     <br />
                     Dois projetos foram lançados no final de 2021 como maneira
                     de trazer à tona e compartilhar com o público essas
                     vivências: o <a href='https://doutoresdaalegria.org.br/blog/doutores-da-alegria-lanca-podcast-o-palhaco-o-que-e/' target='blank'> podcast ‘O Palhaço, O Que É?’</a> e
                     o <a href='https://doutoresdaalegria.org.br/blog/da-melancolia-a-utopia/' target='blank'>Boca Larga.</a>
                  </p>
               </div>
               <ImageFest src={ImgDoutora} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/nosso-encontro')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Nosso encontro</p>
               </div>
               <div onClick={() => navigate('/trintamos')}>
                  <p>Trintamos</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default ThinkingOutLoud

const Body = styled.div`
   margin-top: -16%;
   padding-top: 20%;
   padding-bottom: 400px;
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   align-items: center;
   padding: 0 15px;

   @media (max-width: 1270px) {
      flex-direction: column-reverse;
   }

   h1 {
      max-width: 600px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;

      color: #303030;
   }

 
   a{
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
   }
   div {
      width: 100%;
      p {
         margin-top: 30px;
         max-width: 700px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 28px;
         color: #000;
      }
   }

   div > img {
      @media (max-width: 510px) {
         width: 90%;
      }
   }
`
const Footer = styled.div`
   width: 100%;
   background-color: #ffffff;
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

const ImageFest = styled.img`
   position: absolute;
   right: 0;
   max-height: 881px;
   height: 100%;
   margin-top: 100px;
   @media (max-width: 1430px) {
      width: 491px;
   }
   @media (max-width: 1270px) {
      position: relative;
      max-width: 491px;
      width: 100%;
      margin-bottom: 20px;
      margin-top: 0;
   }
`
