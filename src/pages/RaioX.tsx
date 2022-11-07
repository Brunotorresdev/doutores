import BaseLayout from '../components/BaseLayout'
import styled from 'styled-components'
import RaioX from '../assets/images/RaioX.png'
import RaioXLogo from '../assets/images/RaioX logo.png'
import BGContainer from '../assets/images/raio-x-examples-background.png'
import HeartIcon from '../assets/images/heart-icon.png'
import { useNavigate } from 'react-router-dom'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import { ScrollTop } from 'components/ScrollTop'

const Raiox: React.FC = () => {
   const navigate = useNavigate()
   ScrollTop()
   return (
      <BaseLayout>
         <Body>
            <DescriptionsContainer>
               <div>
                  <TitleImg src={RaioXLogo} />
                  <Subtitle>Retrato da estrutura e das atividades</Subtitle>

                  <Space />

                  <SubtitleDoutores>DOUTORES DA ALEGRIA</SubtitleDoutores>
                  <P>
                     Fundada em 1991 por Wellington Nogueira, a associação atua
                     no universo da saúde pública e propõe a cultura como um
                     direito de todos:
                  </P>
                  <P>
                     - Reconhecida pelo Prêmio Criança (Fundação Abrinq), pelo
                     Prêmio Cultura e Saúde (Ministério da Cultura e Ministério
                     da Saúde) e pelo Prêmio Melhores ONGs (Instituto Doar);{' '}
                     <br /> - Atua em São Paulo, Recife e Rio de Janeiro e
                     inspirou mais de 1.500 iniciativas pelo país; <br /> -
                     Atendeu cerca de 2,3 milhões de crianças hospitalizadas;{' '}
                     <br /> - Alcançou mais de 140 mil pessoas com o Plateias
                     Hospitalares.
                  </P>
               </div>
               <img src={RaioX} />
            </DescriptionsContainer>
            <ExamplesContainer>
               <Example>
                  <h2>Palhaço</h2>
                  <p>
                     Artista profissional com repertório dedicado ao ambiente
                     hospitalar.
                  </p>
                  <ul>
                     <li>
                        <b>46 palhaços e palhaças em 2021;</b>
                     </li>
                     <li>
                        <b>65% estão no elenco há pelo menos 15 anos.</b>
                     </li>
                  </ul>
               </Example>
               <Example>
                  <h2>HOSPITAL</h2>
                  <p>
                     Parceria com hospitais públicos que tenham ao menos 50
                     leitos infantis.
                  </p>
                  <ul>
                     <li>
                        <b>
                           8 hospitais em São Paulo, 4 em Recife e 7 no Rio de
                           Janeiro (com Plateias Hospitalares);
                        </b>
                     </li>
                     <li>
                        <b>Parceria de 27 anos </b>com Instituto da Criança
                        (HCFMUSP-SP) e de 19 anos com Hospital da Restauração
                        (PE), entre outras iniciativas longevas.
                     </li>
                  </ul>
               </Example>
               <Example>
                  <h2>ESCOLA</h2>
                  <p>
                     Escola de arte, com pedagogia própria no ensino da máscara
                     do palhaço.
                  </p>
                  <ul>
                     <li>
                        Promove palestras, aulas e debates sobre arte, cultura,
                        filosofia e assistência social, entre outras temas
                        <b> relevantes para a sociedade.</b>
                     </li>
                     <li>
                        <b>
                           Formou 280 jovens em situação de vulnerabilidade
                           social
                        </b>
                        , além de profissionais de saúde, estudantes e
                        profissionais da arte e curiosos.
                     </li>
                     <li>
                        A cada R$ 1 investido no programa de formação, R$ 2,61
                        retornam em <b>benefícios sociais com a inclusão produtiva de
                           artistas periféricos.
                        </b>
                     </li>
                  </ul>
               </Example>
               <Example>
                  <h2>Criações Artísticas</h2>
                  <p>
                     Espetáculos e intervenções urbanas inspiradas na
                     experiência do hospital.
                  </p>
                  <ul>
                     <li>
                        <b> Repertório único:</b> Aquele Momento Em Que,
                        Numvaiduê, O Médico é o Monstro?, O Homem que Fala,
                        Palhaços em ConSerto, Roda Besteirológica, Conta Causos,
                        entre outros;
                     </li>
                     <li>
                        <b>Três blocos de carnaval que desfilam</b> em hospitais
                        e o Bloco do Miolo Mole, que sai no Recife Antigo desde
                        2007.
                     </li>
                  </ul>
               </Example>
               <Example>
                  <h2>Geração de Recursos</h2>
                  <p>
                     Atividades que trazem receita para manter projetos que são
                     oferecidos gratuitamente à sociedade e ao SUS
                  </p>
                  <ul>
                     <li>
                        Palestras, espetáculos e outras intervenções em
                        empresas;
                     </li>
                     <li>Campanhas de marketing relacionado à causa.</li>
                  </ul>
               </Example>
            </ExamplesContainer>
            <Footer>
               <FooterContainer>
                  <div onClick={() => navigate('/abertura')}>
                     <img src={ImgArrowLeft} alt="" />
                     <p>ABERTURA</p>
                  </div>
                  <div onClick={() => navigate('/nossa-bandeira')}>
                     <p>NOSSA BANDEIRA</p>
                     <img src={ImgArrowRight} alt="" />
                  </div>
               </FooterContainer>
            </Footer>
         </Body>
      </BaseLayout>
   )
}

export default Raiox

const Body = styled.div`
   background: #2ec1d7;
   position: relative;
   width: 100%;
   margin-top: -16%;
   padding-top: 16%;
   min-height: 600px;
   padding-right: 10px;
   @media (max-width: 1270px) {
      margin-top: -20%;
      padding-top: 20%;
   }
   @media (max-width: 630px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`

const DescriptionsContainer = styled.div`
   max-width: 1441px;
   width: 100%;
   margin: auto;
   display: flex;
   justify-content: space-between;
   padding: 0 15px;

   > img {
      width: 60%;
      height: 60%;
      max-height: 628px;
      max-width: 586px;
      @media (max-width: 500px) {
         width: 100%;
         margin-right: 0;
      }
   }

   @media (max-width: 1000px) {
      flex-direction: column-reverse;
      align-items: center;
   }
`

const TitleImg = styled.img`
   @media (max-width: 500px) {
      height: 70px;
   }
`

const Subtitle = styled.h2`
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 34px;
   color: #000000;
`

const SubtitleDoutores = styled.h2`
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 34px;
   color: #000000;

   @media(max-width: 500px){
      font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 10px;
    text-transform: lowercase;
    ::first-letter{
      text-transform: uppercase;
    }
   }
`

const P = styled.p`
vertical-align: middle;
font-family: 'Roboto Condensed';
font-style: normal;

font-size: 20px;
line-height: 32px;
color: #000000;
`

const Space = styled.div`
   width: 100%;
   margin-bottom: 60px;
`

const ExamplesContainer = styled.div`
   width: 100%;
   margin-top: 60px;
   background-image: url(${BGContainer});
   background-size: contain;
   background-repeat: no-repeat;
   min-height: 600px;
   padding: 0 16%;
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 140px;

   @media (max-width: 1369px) {
      background-size: contain;
   }

   @media (max-width: 1000px) {
      flex-direction: column-reverse;
      align-items: center;
      background-image: none;
      padding: 0 10px;
   }
`

const Example = styled.div`
   width: 45%;
   margin: 20px;

   h2 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 26px;
      color: #ffffff;
      margin-bottom: 10px;
      @media (max-width: 500px) {
        margin-top: 30px;
        margin-bottom: 20px;
      }
   }

   p {
      vertical-align: middle;
      font-family: 'Roboto Condensed';
      font-style: normal;

      font-size: 20px;
      line-height: 32px;
      color: #000000;
   }

   ul {
      margin-top: 10px;
      list-style-image: url(${HeartIcon});
      display: table;
      list-style-position: inside;
   }

   li {
      margin-top: 10px;
      vertical-align: middle;
      font-family: 'Roboto Condensed';
      font-style: normal;

      font-size: 20px;
      line-height: 32px;
      color: #000000;

      > b {
         font-weight: 700;
      }
   }

   @media (max-width: 1000px) {
      width: 100%;
      margin: 0;
   }
`

const Footer = styled.div`
   width: 100%;
   background-color: #2ec1d7;
   padding: 0 5px;
   border-top: 2px solid black;
   margin-top: 80px;
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
