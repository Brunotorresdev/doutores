import styled from 'styled-components'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import TitleImage from '../assets/images/our-meeting-title.png'
import Palhacos from '../assets/images/our-meeting-image.png'
import ImageDepoiments from '../assets/images/half-to-half-depoiments-bg.png'
import { useNavigate } from 'react-router-dom'

const OurMeeting: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <img src={TitleImage} alt="Nosso encontro" />
                  <h1>Projetos retornam à sede, aos hospitais e palcos </h1>
                  <p>
                     O arrefecimento da pandemia, no segundo semestre, permitiu
                     que alguns encontros fossem realizados presencialmente.
                  </p>
                  <p>
                     Profissionais da equipe administrativa começaram a circular
                     de maneira intercalada pela sede, que em 2020 havia sido
                     reduzida a apenas um imóvel no bairro de Pinheiros, em São
                     Paulo. No Rio de Janeiro e em Recife, profissionais também
                     passaram a frequentar a sede. Palhaços e palhaças voltaram
                     a se reunir, treinar e dar aulas nas unidades.
                  </p>
                  <h1>Volta à sala de aula e aos palcos</h1>
                  <p>
                     Desde maio com aulas a distância, estudantes da nona turma
                     do Programa de Formação de Palhaço para Jovens retomaram
                     aulas na sede em São Paulo. Os 25 alunos foram divididos em
                     turmas para acompanhar o curso de maneira segura.
                  </p>
                  <p>
                     O primeiro evento que tomou a rua foi a Mocrea - Mostra de
                     Criação Artística dos Alunos e Ex-Alunos, promovida pela
                     Escola Doutores da Alegria. Artistas e estudantes
                     apresentaram cenas de palhaço, com participação de uma
                     banda, na Fábrica de Cultura Cidade Tiradentes e no Centro
                     Cultural Grajaú (SP).
                  </p>
                  <p>
                     Em dezembro, alunos do PFPJ circularam por nove espaços
                     culturais com um exercício cênico inspirado na commedia
                     dell'arte. O grupo criou “Cores e Dores – Uma Ciranda de
                     Amores”, composto de três histórias de amor com trilha
                     sonora do cancioneiro popular.
                  </p>
               </div>
               <ImgPalhacos src={Palhacos} alt="" />
            </Section>

            <SectionDepoiments>
               <Depoiment>
                  “TALVEZ DEMORE UM POUCO MAIS PRA GENTE CONSEGUIR VER DE NOVO A
                  BOCA SORRINDO, MAS TENHO CERTEZA DE QUE NUNCA MAIS
                  DESAPRENDEREMOS DE SORRIR COM OS OLHOS.”
                  <span>Wagner Montegro / Dr. Wago Ninguém</span>
               </Depoiment>
               <ImgDepoimentsBGLeft src={ImageDepoiments} />
            </SectionDepoiments>
            <Section>
               <div>
                  <p>
                     A Escola também ofereceu formação especializada para 24
                     artistas e estudantes de arte, tendo o palhaço como
                     território e expressão. O curso Formação Básica de Palhaço
                     percorreu cinco meses com 189h de formação gratuita.
                  </p>
               </div>
            </Section>
            <Section>
               <div>
                  <Title>NA PONTA DO LÁPIS</Title>
                  <p>
                     276 pessoas assistiram a Mocrea nos espaços de cultura
                     <br /> 874 pessoas assistiram Cores e Dores – Uma Ciranda
                     de Amores
                  </p>
               </div>
            </Section>
         </Body>

         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/meio-a-meio')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Retorno meio a meio</p>
               </div>
               <div onClick={() => navigate('/pensando-em-voz-alta')}>
                  <p>Pensando em voz alta</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default OurMeeting

const Body = styled.div`
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 250px;
   background-color: #ffef00;
   overflow-x: hidden;
   position: relative;
   min-height: 600px;
   @media (max-width: 1320px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   width: 100%;
   display: flex;
   padding: 0 10px;
   position: relative;

   @media (max-width: 1050px) {
      flex-direction: column-reverse;
   }

   div {
      > h1 {
         margin-top: 20px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 700;
         font-size: 28px;
         line-height: 34px;
         color: #303030;
         max-width: 380px;
      }

      > img {
         width: 90%;
         height: 45px;
      }

      > p {
         margin-top: 30px;
         max-width: 550px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 28px;
         color: #000000;

         > span {
            background-color: #f162a5;
            color: #fff;
         }
      }
   }
`
const Footer = styled.div`
   width: 100%;
   border-top: 2px solid black;
   background-color: #ffef00;
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

   @media (max-width: 1050px) {
      position: relative;
   }
`
const SectionDepoiments = styled(Section)`
   min-height: 262px;
   margin-top: 80px;
   margin-bottom: 80px;
`

const ImgDepoimentsBGLeft = styled.img`
   position: absolute;
   height: 262px;
   left: -100px;
   z-index: 1;

   @media (max-width: 990px) {
      display: none;
   }
`

const Depoiment = styled.p`
   max-width: 480px;
   width: 100%;
   top: 30px;
   position: absolute;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   z-index: 2;

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
const Title = styled.div`
   margin-top: 40px;
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
   line-height: 34px;
   color: #000000;
`
