import styled from 'styled-components'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgEmergency from '../assets/images/title-pensando.png'
import ImgGraphicOne from '../assets/images/grafico1.png'
import ImgFest from '../assets/images/img-fest-prestacao.png'
import BaseLayout from 'components/BaseLayout'
import { useNavigate } from 'react-router-dom'
import ImgGraphicTwo from '../assets/images/grafico2.png'
import ImgGraphicThree from '../assets/images/grafico3.png'
import ImgGraphicFour from '../assets/images/grafico4.png'
import ImgGraphicFive from '../assets/images/grafico5.png'
import ImgGraphicSix from '../assets/images/grafico6.png'
import ImgGraphicSeven from '../assets/images/grafico7.png'
import ImgGraphicEight from '../assets/images/grafico8.png'
import ImgPalhacoMobile from '../assets/images/doutor-mobile.png'

const Accountability: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <img src={ImgEmergency} alt="" />
                  <h1>RECURSOS ARRECADADOS</h1>
                  <h3>
                     Nossas contas são auditadas anualmente por auditorias
                     independentes. <br />
                     Em 2020, a Singolare Consultoria e Auditoria realizou este
                     trabalho.
                  </h3>
                  <p>
                     * Em 2016, o evento Gala Doutores da Alegria mobilizou
                     empresas e pessoas, gerando recursos pela
                     <br /> venda de convites, cotas de patrocínio e leilão. Os
                     recursos foram utilizados na produção do próprio
                     <br /> evento e seu superávit foi integralmente aplicado
                     nos projetos da associação.
                  </p>
                  <ContainerImgPalhacos>
                     <PalhacosImg src={ImgGraphicOne} />
                  </ContainerImgPalhacos>
                  <h1>ORIGEM DOS RECURSOS</h1>
                  <h3>Período de janeiro a dezembro de 2021</h3>
                  <InfosGraphics>
                     <GraphicTwoImg src={ImgGraphicTwo} alt="" />
                     <PalhacoMobile src={ImgPalhacoMobile} alt="" />
                     <GraphicThreeImg src={ImgGraphicThree} alt="" />
                  </InfosGraphics>
                  <InfosGraphicsTwo>
                     <div>
                        <h1>APLICAÇÃO DOS RECURSOS</h1>

                        <ImgDoutora src={ImgGraphicFour} alt="" />
                     </div>
                     <div>
                        <h1>Projetos %</h1>
                        <GraphicFiveImg src={ImgGraphicFive} alt="" />
                        <GraphicSevenImg src={ImgGraphicSeven} />
                        <h1>Adm/Operacional</h1>
                        <GraphicSixImg src={ImgGraphicSix} alt="" />
                        <GraphicEightImg src={ImgGraphicEight} />
                     </div>
                  </InfosGraphicsTwo>
               </div>
               <ImageFest src={ImgFest} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/abrace-a-causa')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Abrace a causa</p>
               </div>
               <div onClick={() => navigate('/equipe')}>
                  <p>EQUIPE</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default Accountability

const ImgDoutora = styled.img`
   @media (max-width: 1085px) {
      display: none;
   }
`

const PalhacoMobile = styled.img`
   display: none;
   @media (max-width: 1085px) {
      display: block;
      margin-bottom: 20px;
   }
`

const GraphicTwoImg = styled.img`
   @media (max-width: 1085px) {
      display: none;
   }
`

const GraphicThreeImg = styled.img`
   display: none;
   max-width: 550px;
   @media (max-width: 1085px) {
      display: block;
      width: 100%;
      margin: 20px 0 20px 20px !important;
   }
`

const Body = styled.div`
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 100px;
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   align-items: center;
   padding: 0 15px;

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: #000000;
      margin-top: 50px;
      margin-bottom: 15px;

      @media (max-width: 400px) {
         margin: 15px 0 0 0;
      }
   }
   h3 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
      margin-bottom: 20px;
   }
   div {
      width: 100%;
      p {
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 550;
         font-size: 14px;
         line-height: 20px;
         color: #231f20;
         margin-bottom: 30px;
      }
   }

   div > img {
      @media (max-width: 510px) {
         width: 100%;
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

const ContainerImgPalhacos = styled.div`
   display: flex;
   align-items: center;
`

const PalhacosImg = styled.img`
   margin: 30px 0;
   max-width: 782px;
   width: 100%;
   max-height: 569px;
`

const ImageFest = styled.img`
   position: absolute;
   right: 0;
   top: 420px;

   @media (max-width: 1035px) {
      display: none;
   }
`
const InfosGraphics = styled.div`
   display: flex;
   flex-wrap: wrap;
   max-width: 855px;
   width: 100%;
   img {
      :first-child {
         margin-right: 10px;
      }
      :last-child {
         max-height: 461px;
      }
      @media (max-width: 400px) {
         max-width: 310px;
         margin: auto;
      }
   }
`
const InfosGraphicsTwo = styled.div`
   display: flex;
   flex-wrap: wrap;
   max-width: 1900px;
   width: 100%;
   h1 {
      font-size: 20px;
      font-weight: 700;
   }
   div {
      :first-child {
         max-width: 306px;
         width: 100%;
      }
   }
   div {
      :last-child {
         display: flex;
         flex-direction: column;
         max-width: 750px;
         width: 100%;
      }
   }
`

const GraphicFiveImg = styled.img`
   max-width: 794px;
   width: 100%;
   max-height: 243px;

   @media (max-width: 500px) {
      display: none;
   }
`

const GraphicSixImg = styled.img`
   max-width: 794px;
   width: 100%;
   @media (max-width: 500px) {
      display: none;
   }
`

const GraphicSevenImg = styled.img`
   display: none;
   @media (max-width: 500px) {
      display: block;
      width: 100%;
   }
`

const GraphicEightImg = styled.img`
   display: none;
   @media (max-width: 500px) {
      display: block;
      width: 100%;
   }
`
