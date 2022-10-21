import BaseLayout from 'components/BaseLayout'
import styled from 'styled-components'
import ImgParceiros from '../assets/images/parceiros.png'
import ImgLogo1 from '../assets/images/logo1.png'
import ImgLogo2 from '../assets/images/logo2.png'
import ImgLogo3 from '../assets/images/logo3.png'
import ImgLogo4 from '../assets/images/logo4.png'
import ImgLogo5 from '../assets/images/logo5.png'
import ImgLogo6 from '../assets/images/logo6.png'
import ImgLogo7 from '../assets/images/logo7.png'
import ImgLogo8 from '../assets/images/logo8.png'
import ImgLogo9 from '../assets/images/logo9.png'
import ImgLogo10 from '../assets/images/logo10.png'
import ImgLogo11 from '../assets/images/logo11.png'
import ImgLogo12 from '../assets/images/logo12.png'
import ImgLogo13 from '../assets/images/logo13.png'
import ImgLogo14 from '../assets/images/logo14.png'
import ImgLogo15 from '../assets/images/logo15.png'
import ImgLogo16 from '../assets/images/logo16.png'
import ImgLogo17 from '../assets/images/logo17.png'
import ImgLogo18 from '../assets/images/logo18.png'
import ImgLogo19 from '../assets/images/logo19.png'
import ImgLogo20 from '../assets/images/logo20.png'
import ImgLogo21 from '../assets/images/logo21.png'
import ImgLogo22 from '../assets/images/logo22.png'
import ImgLogo23 from '../assets/images/logo23.png'
import ImgLogo24 from '../assets/images/logo24.png'
import ImgLogo25 from '../assets/images/logo25.png'
import ImgLogo26 from '../assets/images/logo26.png'
import ImgLogo27 from '../assets/images/logo27.png'
import ImgLogo28 from '../assets/images/logo28.png'
import ImgLogo29 from '../assets/images/logo29.png'
import ImgLogo30 from '../assets/images/logo30.png'
import ImgLogo31 from '../assets/images/logo31.png'
import ImgLogo32 from '../assets/images/logo32.png'
import ImgLogo33 from '../assets/images/logo33.png'
import ImgLogo34 from '../assets/images/logo34.png'
import ImgLogo35 from '../assets/images/logo35.png'
import ImgLogo36 from '../assets/images/logo36.png'
import ImgLogo37 from '../assets/images/logo37.png'
import ImgLogo38 from '../assets/images/logo38.png'
import ImgLogo39 from '../assets/images/logo39.png'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import { useNavigate } from 'react-router-dom'

const Partners:React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <img src={ImgParceiros} alt="" />
            <Title>Patrocinadores e Parceiros Balanço 2021</Title>
            <TitleSection>LEI DE INCENTIVO À CULTURA</TitleSection>
            <TitleCenter>Alegria</TitleCenter>
            <ContainerLogos>
               <img src={ImgLogo1} alt="" />
               <img src={ImgLogo2} alt="" />
               <img src={ImgLogo3} alt="" />
               <img src={ImgLogo4} alt="" />
            </ContainerLogos>
            <div>
               <ContainerTitles>
                  <TitleCenter>GARGALHADA</TitleCenter>
                  <TitleCenterRight>PATROCINADOR RISADA</TitleCenterRight>
               </ContainerTitles>
               <ContainerLogos>
                  <img src={ImgLogo5} alt="" />
                  <ImgBig src={ImgLogo6} alt="" />
               </ContainerLogos>
            </div>
            <TitleCenter>SORRISO</TitleCenter>
            <ContainerLogosCenter>
               <img src={ImgLogo7} alt="" />
            </ContainerLogosCenter>
            <TitleCenter>NARIGADA</TitleCenter>

            <ContainerLogosTwo>
               <img src={ImgLogo8} alt="" />
               <img src={ImgLogo9} alt="" />
               <img src={ImgLogo10} alt="" />
               <img src={ImgLogo11} alt="" />
            </ContainerLogosTwo>
            <ContainerLogosThree>
               <img src={ImgLogo12} alt="" />
               <img src={ImgLogo13} alt="" />
            </ContainerLogosThree>
            <TitleCenter>PATROCINADOR CÓCEGA</TitleCenter>
            <ContainerPatrocinador>
               <div>
                  <ul>
                     <li>COMBUSTRAN</li>
                     <li>WICKBOLD & NOSSO PÃO</li>
                     <li>TRANSUNION</li>
                     <li>SANTA LUZIA</li>
                  </ul>
               </div>
               <div>
                  <ul>
                     <li>ETAMUSSINO</li>
                     <li>EMBRAST</li>
                     <li>CABOT</li>
                     <li>CORRECTA</li>
                  </ul>
               </div>
               <div>
                  <ul>
                     <li>GALZERANO</li>
                     <li>JAL INDUSTRIA</li>
                     <li>EXPRESSO SÃO MIGUEL</li>
                     <li>WLM / SCANIA</li>
                  </ul>
               </div>
            </ContainerPatrocinador>
            <ContainerTitles>
               <TitleCenter>PATROCINADOR GENTILEZA</TitleCenter>
            </ContainerTitles>
            <ContainerGentileza>
               
               <ul>
                  <li>COMBUSTRAN</li>
                  <li>WICKBOLD & NOSSO PÃO</li>
                  <li>TRANSUNION</li>
                  <li>SANTA LUZIA</li>
               </ul>
            </ContainerGentileza>
            <TitleSection>PROMAC/SP 2020/2021</TitleSection>
            <TitleCenter>narigada</TitleCenter>
            <ContainerLogosTwo>
               <img src={ImgLogo14} alt="" />
               <img src={ImgLogo15} alt="" />
               <img src={ImgLogo16} alt="" />
            </ContainerLogosTwo>
            <ContainerPatrocinadorGentileza>
               <div>
                  <h1>PATROCINADOR CÓCEGA</h1>
                  <ul>
                     <li>INTERMED</li>
                     <li>CATUPIRY</li>
                  </ul>
               </div>
               <div>
                  <h1>PATROCINADOR GENTILEZA</h1>
                  <ul>
                     <li>JULIO OKUBO BUFALO</li>
                     <li>SUPERMERCADP BARBOSA</li>
                     <li>BUFALO</li>
                  </ul>
               </div>
            </ContainerPatrocinadorGentileza>
            <TitleSection>PROAC</TitleSection>
            <TitleCenter>GARGALHADA</TitleCenter>
            <ContainerLogosCenter>
               <img src={ImgLogo17} alt="" />
            </ContainerLogosCenter>
            <TitleSection>FESTIVAL MIOLO MOLE</TitleSection>
            <TitleCenter>PATROCINADORES</TitleCenter>
            <ContainerLogosThree>
               <img src={ImgLogo18} alt="" />
               <img src={ImgLogo19} alt="" />
            </ContainerLogosThree>
            <TitleCenter>APOIO</TitleCenter>
            <ContainerLogosTwo>
               <img src={ImgLogo20} alt="" />
               <img src={ImgLogo21} alt="" />
               <img src={ImgLogo22} alt="" />
               <img src={ImgLogo23} alt="" />
               <img src={ImgLogo24} alt="" />
            </ContainerLogosTwo>
            <TitleCenter>PARCEIROS GOVERNAMENTAIS</TitleCenter>
            <ContainerLogosCenter>
               <img src={ImgLogo25} alt="" />
            </ContainerLogosCenter>
            <ContainerLogosTwo>
               <img src={ImgLogo26} alt="" />
               <img src={ImgLogo27} alt="" />
               <img src={ImgLogo28} alt="" />
               <img src={ImgLogo29} alt="" />
            </ContainerLogosTwo>
            <ContainerLogosTwo>
               <img src={ImgLogo30} alt="" />
               <img src={ImgLogo31} alt="" />
               <img src={ImgLogo32} alt="" />
            </ContainerLogosTwo>
            <ContainerLogosTwo>
               <img src={ImgLogo33} alt="" />
               <ImgBig src={ImgLogo34} alt="" />
            </ContainerLogosTwo>
            <ContainerLogos>
               <img src={ImgLogo35} alt="" />
               <img src={ImgLogo36} alt="" />
               <img src={ImgLogo37} alt="" />
               <img src={ImgLogo38} alt="" />
            </ContainerLogos>
            <ContainerLogosTwo>
               <ImgBig src={ImgLogo39} alt="" />
            </ContainerLogosTwo>
            <TitleCenter>MARKETING RELACIONADO À CAUSA </TitleCenter>
            <ContainerPatrocinadorTwo>
               <div>
                  <TitleCenter>CAMPANHAS REGULARES </TitleCenter>
                  <ul>
                     <li>Atacadão</li>
                     <li>Visa Causas</li>
                     <li>Arredondar</li>
                     <li>Clicksign</li>
                     <li>Colgate - Pontual em 2021</li>
                  </ul>
               </div>
               <div>
                  <TitleCenter>PROGRAMAS DE MILHAGEM </TitleCenter>
                  <ul>
                     <li>Latampass</li>
                     <li>Livelo</li>
                     <li>Itaucard/IUPP</li>
                  </ul>
               </div>
               <div>
                  <TitleCenter>NOTA FISCAL PAULISTA </TitleCenter>
                  <ul>
                     <li>Sorveteria Oggi (5 franquias)</li>
                  </ul>
               </div>
            </ContainerPatrocinadorTwo>
            <TitleSection>APOIO TÉCNICO</TitleSection>
            <ContainerPatrocinadorGentileza>
               <div>
                  <h1>APOIOS REGULARES - SÃO PAULO</h1>
                  <ul>
                     <li>Ambiente</li>
                     <li>Apis 3</li>
                     <li>Arcabuzz consultoria</li>
                     <li>Artur Restaurante</li>
                     <li>Bit Defender</li>
                     <li>Site Blindado</li>
                     <li>Clipping Service</li>
                     <li>Cultura Inglesa</li>
                     <li>Gusmão & Labrunie</li>
                     <li>Handtalk</li>
                     <li>Hostgator</li>
                     <li>Kasi</li>
                     <li>Microsoft</li>
                     <li>QS do Brasil</li>
                     <li>Symantec</li>
                     <li>Trama</li>
                  </ul>
               </div>
               <div>
                  <h1>APOIOS REGULARES - Recife </h1>
                  <ul>
                     <li>Transportadora Asa de Prata</li>
                  </ul>
               </div>
            </ContainerPatrocinadorGentileza>
         </Body>
         <Footer>
            <FooterContainer>
               <div>
                  <img onClick={() => navigate('/equipe')} src={ImgArrowLeft} alt="" />
                  <p>EQUIPE</p>
               </div>
               <div>
                  <p>SÓCIOS</p>
                  <img
                     onClick={() => navigate('/socios')}
                     src={ImgArrowRight}
                     alt=""
                  />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default Partners

const Body = styled.div`
   max-width: 1440px;
   width: 100%;
   margin: auto;
   padding: 0 10px;
`

const Title = styled.h1`
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 34px;
   color: #303030;
   margin-top: 15px;
   margin-bottom: 50px;
`

const TitleSection = styled.div`
   width: 100%;
   border-bottom: 2px solid #f073ac;
   padding-bottom: 5px;
   color: #f073ac;
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 34px;
   text-align: center;
   margin-bottom: 30px;
`

const TitleCenter = styled.h1`
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 34px;
   color: #303030;
   margin-top: 15px;
   margin-bottom: 27px;
   text-align: center;
`

const TitleCenterRight = styled.h1`
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 34px;
   color: #303030;
   margin-top: 15px;
   margin-bottom: 27px;
   text-align: center;

   @media(max-width: 830px){
      display: none;
   }
`

const ContainerLogos = styled.div`
   max-width: 930px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;
   margin-bottom: 100px;
`

const ContainerLogosTwo = styled.div`
   max-width: 703px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;
   margin-bottom: 50px;
   :first-child {
      margin-bottom: 100px;
   }
`

const ContainerLogosThree = styled.div`
   max-width: 500px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;
   margin-bottom: 100px;
`

const ContainerPatrocinadorGentileza = styled.div`
   max-width: 650px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-bottom: 100px;

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 34px;
      color: #303030;
   }

   li {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      color: #303030;
      margin-bottom: 4px;
   }
`

const ContainerPatrocinador = styled.div`
   max-width: 600px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 100px;

   li {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      color: #303030;
      margin-bottom: 4px;
   }
`

const ContainerPatrocinadorTwo = styled.div`
   max-width: 901px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   margin-bottom: 60px;
   h1 {
      text-align: left;
      font-size: 20px;
   }

   li {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      color: #303030;
      margin-bottom: 4px;
   }
`

const ContainerLogosCenter = styled.div`
   max-width: 930px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   max-height: 82px;
   align-items: center;
   margin-bottom: 120px;
`

const ContainerTitles = styled.div`
   max-width: 930px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   max-height: 82px;
   align-items: center;
`

const ContainerGentileza = styled.div`
   max-width: 880px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 100px;

   li {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      color: #303030;
      margin-bottom: 4px;
   }
`

const Footer = styled.div`
   width: 100%;
   background-color: #ffffff;
   border-top: 2px solid black;
   margin-top: 80px;
   padding: 0 5px;
`

const FooterContainer = styled.div`
   max-width: 1441px;
   margin: auto;
   background-color: #ffffff;
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

const ImgBig = styled.img`
   max-width: 700px;

   @media(max-width: 710px){
      max-width: 500px;
   }
   @media(max-width: 510px){
      max-width: 350px;
   }
`