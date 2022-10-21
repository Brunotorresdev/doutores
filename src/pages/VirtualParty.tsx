import styled from 'styled-components'
import ImgTitleSection from '../assets/images/img-festa-virtual.png'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgAlegria from '../assets/images/img-fest-virtual.png'
import ImgTable from '../assets/images/img-table-30anos.png'
import { useNavigate } from 'react-router-dom'

const VirtualParty: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <div>
                     <ImgTitle src={ImgTitleSection} alt="Imagina imaginar?" />

                     <h1>Documentário e Festival Miolo Mole celebram marco</h1>
                     <p>
                        A{' '}
                        <a
                           href="https://www.youtube.com/watch?v=1setaV-sbgY"
                           target="blank"
                        >
                           edição virtual do Conta Causos
                        </a>{' '}
                        marcou o início da festa, com palhaços narrando ao vivo
                        histórias significativas da nossa trajetória.
                        <a> Assista aqui.</a>
                        <br />
                        <br />
                        Depois veio a segunda edição do{' '}
                        <a
                           href="https://www.youtube.com/watch?v=eDcRxSPUXVE"
                           target="blank"
                        >
                           Festival Miolo Mole
                        </a>
                        , que combinou entretenimento e conteúdo educativo para
                        celebrar os 30 anos e arrecadar recursos para a causa.{' '}
                        <br />
                        <br />E o{' '}
                        <a
                           href="https://www.youtube.com/watch?v=F6ETt11TD4M"
                           target="blank"
                        >
                           documentário ‘O Ano em Que a Terra Parou’
                        </a>{' '}
                        mostra os bastidores da Doutores da Alegria durante a
                        pandemia, em 25 minutos que equilibram momentos
                        emocionantes com ações práticas que mostraram o
                        protagonismo da associação naquele ano.
                     </p>
                     <h1>Um balanço de 30 anos</h1>
                     <p>
                        O impacto alcançado em três décadas pela organização
                        pode ser traduzido em números. Conheça nossos principais
                        resultados em termos de público nos hospitais, teatros,
                        nas ruas, em empresas e outros palcos improváveis.
                     </p>
                  </div>
                  <TableImg src={ImgTable} alt="" />
               </div>
               <ImgPalhacos src={ImgAlegria} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/trintamos')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Trintamos</p>
               </div>
               <div onClick={() => navigate('/impacto-social')}>
                  <p>Impacto social</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default VirtualParty

const Body = styled.div`
   background-color: #2ec1d7;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 150px;
   @media (max-width: 1150px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 15px;
   @media (max-width: 1150px) {
      flex-direction: column-reverse;
   }

   div {
      div {
         max-width: 676px;
      }
   }

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      margin-top: 40px;
      margin-bottom: 20px;
   }

   a {
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
   }
   div > p {
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
   background-color: #2ec1d7;
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
   max-width: 500px;
   @media (max-width: 1150px) {
      position: relative;
      max-width: 475px;
      width: 100%;
      max-height: 443px;
      height: 100%;
      margin-bottom: 40px;
   }
`
const TableImg = styled.img`
   margin-top: 40px;
   max-width: 1064px;
   width: 100%;
`
const ImgTitle = styled.img`
   max-width: 600px;

   @media (max-width: 610px) {
      max-width: 500px;
   }
   @media (max-width: 510px) {
      max-width: 350px;
   }
`
