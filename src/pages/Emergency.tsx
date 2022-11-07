import styled from 'styled-components'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgEmergency from '../assets/images/title-emergency.png'
import BaseLayout from 'components/BaseLayout'
import { useNavigate } from 'react-router-dom'
import ImgLeftSide from '../assets/images/left-emergencia.png'
import ImgLeftSideMobile from '../assets/images/left-emergencia-mobile.png'
import ImgRightSide from '../assets/images/right-emergencia.png'
import { ScrollTop } from 'components/ScrollTop'

const Emergency: React.FC = () => {
   const navigate = useNavigate()

   ScrollTop()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <TitleImg src={ImgEmergency} alt="" />
                  <p>
                     2021 foi desafiador para todas as organizações da sociedade
                     civil. Seja pelo cenário de incertezas, pelo aprofundamento
                     da crise sanitária ou pelo esgotamento de recursos, o ano
                     veio com um aperto na garganta. O Brasil se tornava um país
                     com mais pessoas em vulnerabilidade social, assombrado por
                     fome, inflação, evasão escolar e endividamento das
                     famílias, entre outras mazelas.
                  </p>
                  <p>
                     Como organização que busca o direito à cultura, tendo a lei
                     federal de incentivo como principal financiadora, Doutores
                     da Alegria lidou com a insegurança jurídica de não ter
                     recursos liberados para realização das nossas atividades.
                  </p>
                  <ContainerImgPalhacos>
                     <PalhacosImg src={ImgLeftSide} />
                     <PalhacosImgMobile src={ImgLeftSideMobile} />
                  </ContainerImgPalhacos>
                  <p>
                     Leia o texto da diretoria na íntegra{' '}
                     <a
                        href="https://doutoresdaalegria.org.br/blog/emergencia/"
                        target="blank"
                     >
                        aqui.
                     </a>
                  </p>
               </div>
               <ImageFest src={ImgRightSide} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/dentro-pra-fora')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>De dentro pra fora</p>
               </div>
               <div onClick={() => navigate('/imaginar')}>
                  <p>Imagina Imaginar</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default Emergency

const Body = styled.div`
   background-color: #000;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 100px;
   @media (max-width: 1320px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   align-items: center;
   padding: 0 15px;

   a {
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
   }
   div {
      width: 100%;
      p {
         margin-top: 30px;
         max-width: 676px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 28px;
         color: #fff;

         :first-of-type {
            margin-top: 79px;
         }
      }
   }

   div > img {
      @media (max-width: 510px) {
         width: 90%;
      }
   }
`

const TitleImg = styled.img`
   @media (max-width: 500px) {
      height: 70px;
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

const ContainerImgPalhacos = styled.div`
   display: flex;
   align-items: center;
`

const PalhacosImg = styled.img`
   margin: 30px 0;
   max-width: 830px;
   width: 100%;
   max-height: 810px;
   height: 100%;
   @media (max-width: 500px) {
      display: none;
   }
`

const ImageFest = styled.img`
   position: absolute;
   right: 0;
   top: 550px;
   max-width: 531px;
   width: 100%;
   max-height: 516px;
   height: 100%;
   margin-top: 200px;

   @media (max-width: 1550px) {
      max-width: 431px;
      width: 100%;
      max-height: 416px;
      height: 100%;
   }

   @media (max-width: 1385px) {
      max-width: 331px;
      width: 100%;
      max-height: 316px;
      height: 100%;
   }

   @media (max-width: 1250px) {
      display: none;
   }
`
const PalhacosImgMobile = styled.img`
   display: none;
   @media (max-width: 500px) {
      display: block;
   }
`
