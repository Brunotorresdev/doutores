import styled from 'styled-components'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgExpediente from '../assets/images/title-expediente.png'
import ImgUltimoPalhaco from '../assets/images/ultimo-palhaco.png'
import BaseLayout from 'components/BaseLayout'
import { useNavigate } from 'react-router-dom'

const OfficeHour: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <img src={ImgExpediente} alt="" />
                  <h1>COORDENAÇÃO</h1>
                  <p>Cristina Cardoso</p>
                  <h1>REDAÇÃO E EDIÇÃO</h1>
                  <p>Gabriela Caseff</p>
                  <h1>
                     PROJETO GRÁFICO, DIAGRAMAÇÃO <br />E DESENVOLVIMENTO DE
                     HOTSITE
                  </h1>
                  <p>Instituto Máquina do Bem</p>
                  <h1>IMPRESSÃO</h1>
                  <p>Piffer Print</p>
                  <h1>COLABORAÇÃO</h1>

                  <p>
                     Arilson Lopes, Carolina Kinoshita, Daiane Carina, Edilene
                     Silva, Luis Vieira da <br /> Rocha, Marcella Castilho, Nice
                     Vasconcelos, Odete Peixoto, Pietra Ferrão,
                     <br /> Ronaldo Aguiar, Silvia Contar, Simone Pimentel,
                     Thamires Silva.
                  </p>
                  <h1>FECHAMENTO DESTA EDIÇÃO:</h1>
                  <p>Agosto 2022</p>
                  <h1>SÃO PAULO</h1>
                  <p>
                     São Paulo Rua Alves Guimarães, 73 Pinheiros – 05410-000 São
                     Paulo – SP (11) 3061-5523
                  </p>
                  <h1>REFICE</h1>
                  <p>
                     Recife Rua Dona Maria César, 170 Edifício Luciano Costa
                     Sala 201B – 2º. Andar Bairro do <br /> Recife – 50030-140
                     Recife – PE (81) 3466-2373, 3463-0866, 99112-4676
                  </p>
                  <h1>RIO DE JANEIRO</h1>

                  <p>
                     Rio de Janeiro Rua Sebastião de Lacerda, 47 Laranjeiras –
                     22240-110 Rio de Janeiro – RJ <br /> (21) 2297-4176
                  </p>
               </div>
               <ImageFest src={ImgUltimoPalhaco} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/parceiros')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>PARCEIROS</p>
               </div>
               <div onClick={() => navigate('/')}>
                  <p>SÓCIOS</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default OfficeHour

const Body = styled.div`
   margin-top: -16%;
   padding-top: 20%;
   padding-bottom: 200px;
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   align-items: center;
   padding: 0 10px;

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;

      color: #303030;
   }

   span {
      background-color: #f162a5;
      color: #fff;
   }
   div {
      width: 100%;
      img {
         margin-bottom: 50px;
      }
      p {
         max-width: 676px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 28px;
         color: #000;
         margin-bottom: 30px;
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
   top: 700px;
   max-width: 700px;
   width: 100%;
   @media (max-width: 1225px) {
      display: none;
   }
`
