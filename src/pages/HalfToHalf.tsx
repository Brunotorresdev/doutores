import styled from 'styled-components'
import BaseLayoult from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import Title from '../assets/images/half-to-half-title.png'
import Palhacos from '../assets/images/half-to-half-image.png'
import ImageDepoiments from '../assets/images/half-to-half-depoiments-bg.png'
import HeartIcon from '../assets/images/heart-icon.png'
import { useNavigate } from 'react-router-dom'
import TopicoImg from '../assets/images/topico.png'

const HalfToHalf: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayoult>
         <Body>
            <Section>
               <div>
                  <img src={Title} alt="Imagina imaginar?" />
                  <p>
                     Foi em agosto que palhaços imunizados com duas doses
                     vacinais contra a Covid-19 finalmente iniciaram a retomada
                     presencial aos hospitais. Uma conquista emocionante para
                     quem estava desde março de 2020 atendendo a distância.
                  </p>
                  <p>
                     O modelo era híbrido: enquanto um artista atendia in loco,
                     carregando o tablet pelo hospital, sua dupla ficava em
                     casa, evitando aglomeração nos quartos e corredores.
                  </p>
                  <p>
                     O protocolo adotado no retorno, tanto em São Paulo quanto
                     no Recife, incluiu uso permanente da máscara cirúrgica (com
                     o nariz de palhaço sobre ela), higienização com álcool em
                     gel, distanciamento e proibição da entrada em áreas de
                     isolamento.
                  </p>
               </div>
               <ImgPalhacos src={Palhacos} alt="" />
            </Section>
            <SectionDepoiments>
               <Depoiment>
                  “É UM NOVO TEMPO, UMA NOVA CONDUTA. O VÍRUS NOS COLOCA EM
                  OUTRA PERSPECTIVA DIANTE DOS ENCONTROS, COM USO DE MÁSCARA,
                  DISTÂNCIA, ATENÇÃO ONDE ENCOSTAR AS MÃOS E O CORPO. A
                  DELICADEZA E O CUIDADO COM O PRÓXIMO SÃO APRENDIZADOS
                  OBRIGATÓRIOS DESSA JORNADA.”
                  <span>Suzana Aragão / Dra. Bolot’s</span>
               </Depoiment>
               <ImgDepoimentsBG src={ImageDepoiments} />
            </SectionDepoiments>
            <Section>
               <div>
                  <p>
                     No Rio de Janeiro, onde habitualmente convidamos companhias
                     artísticas locais a adaptarem seus espetáculos para o
                     ambiente hospitalar, criamos o projeto “Plateias
                     Hospitalares Convida”.
                  </p>
                  <p>
                     Números artísticos foram apresentados de maneira virtual
                     para funcionários dos hospitais com o propósito de manter o
                     vínculo e o projeto vivo.
                  </p>
               </div>
            </Section>
            <SectionDepoiments>
               <Depoiment>
                  “FOI A MANEIRA QUE ENCONTRAMOS DE PROPORCIONAR MOMENTOS DE
                  DESCONTRAÇÃO E RELAXAMENTO AOS PROFISSIONAIS DE SAÚDE. A CADA
                  EDIÇÃO CONVIDAMOS ARTISTAS QUE CRIARAM JUNTOS, SOB DIREÇÃO
                  ARTÍSTICA DA DOUTORES DA ALEGRIA, UMA APRESENTAÇÃO EXCLUSIVA
                  PARA ESSE PÚBLICO.”
                  <span>
                     Silvia Contar <br />
                     Coordenadora da Unidade Rio de Janeiro
                  </span>
               </Depoiment>
               <ImgDepoimentsBGLeft src={ImageDepoiments} />
            </SectionDepoiments>
            <Section>
               <div>
                  <LastP>
                     <a href='https://doutoresdaalegria.org.br/hospitais/palhacos-nos-hospitais/' target="blank">Veja aqui a lista de hospitais atendidos </a>
                     pelos Doutores da Alegria em São Paulo, Recife e
                     <a href='https://doutoresdaalegria.org.br/hospitais/plateias-hospitalares/' target="blank">no Rio de Janeiro.</a> <br />
                     Total de pessoas beneficiadas com ações presenciais ou
                     híbridas:
                  </LastP>
               </div>
            </Section>

            <Section>
               <NumberStates>
                  <div>
                     <div>
                        <img src={HeartIcon} alt="Coração rosa" />
                        <h1>São Paulo</h1>
                     </div>
                     <p>
                        <span>
                           <img src={TopicoImg} /> 12.561
                        </span>
                        (público direto – crianças) e <span>24.997</span>
                        (público indireto – acompanhantes, profissionais de
                        saúde e outros públicos).
                     </p>
                  </div>
                  <div>
                     <div>
                        <img src={HeartIcon} alt="Coração rosa" />
                        <h1>Recife</h1>
                     </div>
                     <p>
                        <span>
                           <img src={TopicoImg} /> 5.147
                        </span>
                        (público direto – crianças) e <span>11.107</span>
                        (público indireto – acompanhantes, profissionais de
                        saúde e outros públicos).
                     </p>
                  </div>
                  <div>
                     <div>
                        <img src={HeartIcon} alt="Coração rosa" />
                        <h1>Rio de Janeiro</h1>
                     </div>
                     <p>
                        <span>
                           <img src={TopicoImg} /> 240
                        </span>
                        pessoas e
                     </p>
                     <p>
                        <span>
                           <img src={TopicoImg} /> 220
                        </span>
                        pessoas. (Plateias e Convida)
                     </p>
                  </div>
               </NumberStates>
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/tudo-virtual')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Tudo virtual</p>
               </div>
               <div onClick={() => navigate('/nosso-encontro')}>
                  <p>Nosso encontro</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayoult>
   )
}

export default HalfToHalf

const Body = styled.div`
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 250px;
   background-color: #2ec1d7;
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

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
   }

   div {
      > img {
         max-width: 428px;
         @media (max-width: 500px) {
            max-width: 370px;
         }
      }

      > p {
         margin-top: 30px;
         max-width: 620px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 28px;
         color: #000000;

         @media (max-width: 400px) {
            margin-top: 30px;
            max-width: 350px;
         }

         > a {
            background-color: #f162a5;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
         }
      }
   }
`
const Footer = styled.div`
   width: 100%;
   border-top: 2px solid black;
   background-color: #2ec1d7;
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
      display: none;
   }
`
const SectionDepoiments = styled(Section)`
   min-height: 262px;
   margin-top: 100px;
   margin-bottom: 50px;

   @media (max-width: 1050px) {
      margin-top: 50px;
   }

   @media (max-width: 400px) {
      margin-bottom: 0px;
   }
`
const ImgDepoimentsBG = styled.img`
   position: absolute;
   height: 262px;
   right: -100px;
   z-index: 1;

   @media (max-width: 990px) {
      display: none;
   }
`

const ImgDepoimentsBGLeft = styled(ImgDepoimentsBG)`
   left: 0;

   @media (max-width: 1217px) {
      display: none;
   }
`

const Depoiment = styled.p`
   max-width: 500px;
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

   @media (max-width: 500px) {
      margin-top: -60px;
   }
`
const NumberStates = styled.div`
   max-width: 1158px;
   width: 100%;
   margin-top: 40px;
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
   justify-content: space-between;

   > div {
      width: 30%;
      max-width: 370px;
      min-width: 250px;
      margin: 5px;

      div {
         width: 100%;
         display: flex;
         align-items: center;
         text-align: center;
         max-height: 35px;
         h1 {
            font-family: 'Roboto Condensed';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            color: #ffffff;
         }

         img {
            width: 30px;
            margin-right: 10px;
         }
      }

      p {
         margin-top: 10px;
         font-style: normal;
         font-size: 22px;
         color: #000000;
      }
      span {
         font-weight: bold;
         margin-top: 10px;
         font-style: normal;
         font-size: 22px;
         color: #000000 !important;
         background: none !important;
      }
   }
`

const LastP = styled.p`
   max-width: 491px !important;
   width: 100%;

   span{

   }

   @media (max-width: 500px) {
      margin-top: 80px !important;
   }
`
