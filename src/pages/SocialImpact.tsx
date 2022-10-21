import styled from 'styled-components'
import ImgTitleSection from '../assets/images/impacto-social.png'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgAlegria from '../assets/images/img-palhaco-brincar.png'
import ImgDeclaracao from '../assets/images/img-declaracao.png'
import Img96 from '../assets/images/96%.png'
import { useNavigate } from 'react-router-dom'

const SocialImpact: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <ImgTitle src={ImgTitleSection} alt="Imagina imaginar?" />

                  <FristP>
                     Criada em 1991 pelo ator Wellington Nogueira, a partir de
                     uma experiência pioneira nos Estados Unidos, Doutores da
                     Alegria inaugurou uma tecnologia social que expandiu o
                     campo de atuação de artistas, fortaleceu a humanização na
                     saúde pública e propôs um circuito de artes nos hospitais.
                  </FristP>
                  <h1>EXPERIÊNCIA PIONEIRA E ÚNICA</h1>
                  <p>
                     Essa proposta genuinamente brasileira, que combina arte e
                     saúde pública, é única no mundo. Única porque atua em um
                     dos maiores sistemas de saúde do mundo, o SUS. <br />
                     <br />
                  </p>
                  <li>
                     Única porque lida, dentro de hospitais periféricos, com
                     questões sociais que são reflexo de uma sociedade pobre,
                     racista e com oportunidades desiguais. Única porque defende
                     a cultura como direito básico em um país que desmerece seu
                     valor.
                     <br />
                     <br />
                  </li>
                  <li>
                     Única porque inspirou outras 1.500 iniciativas
                     nacionalmente. <br />
                     <br />
                  </li>
                  <li>
                     Única porque desenvolveu uma metodologia para formar jovens
                     artistas. Única porque transpôs sua experiência para a
                     sociedade na forma de espetáculos, formações,
                     documentários, vídeos e palestras.
                     <br />
                     <br />
                  </li>
                  <h1>DIREITO DE BRINCAR GARANTIDO</h1>
                  <DeclaracaoImg src={ImgDeclaracao} alt="" />
               </div>
               <ImgPalhacos src={ImgAlegria} alt="" />
            </Section>
            <SectionInfos>
               <div>
                  <p>
                     Para uma criança ou adolescente, enfrentar um tratamento no
                     hospital pode trazer carga elevada de estresse físico e
                     psicológico, ainda mais em longas internações. Essa
                     experiência pode ter implicações no apetite, sono,
                     desempenho cognitivo e comportamento social.
                  </p>
                  <p>
                     Brincar é uma maneira de recuperar o bem-estar dos pequenos
                     pacientes. Diversos especialistas apontam o papel do
                     brincar na compreensão e na adaptação da criança a
                     procedimentos médicos invasivos e a um maior nível de
                     cooperação nos tratamentos e exames médicos (Araújo &
                     Guimarães, 2009; Azevedo et al., 2008; Fernandes & Arriaga,
                     2010, Masetti, 2003; Motta & Enumo, 2004).
                  </p>
                  <p>
                     Nos encontros semanais com pacientes, os palhaços subvertem
                     a rotina hospitalar e propõem novos sentidos para a
                     experiência de internação.
                  </p>
                  <br />
                  <p>
                     Assim, a associação contribui para o desenvolvimento
                     integral da criança no ambiente hospitalar por meio de
                     estímulos culturais, da brincadeira, do resgate do lúdico e
                     estímulo ao fortalecimento dos vínculos afetivos entre as
                     crianças e seus pais e acompanhantes.
                  </p>
               </div>
               <div>
                  <ContainerPorcentagem>
                     <img src={Img96} alt="" />

                     <p>
                        dos profissionais de saúde afirmam que as crianças ficam
                        mais à vontade com o ambiente do hospital.
                        <br />
                        <br />
                     </p>
                  </ContainerPorcentagem>
                  <ContainerPorcentagem>
                     <img src={Img96} alt="" />
                     <p>
                        dos profissionais de saúde afirmam que as crianças ficam
                        mais à vontade com o ambiente do hospital.
                        <br />
                        <br />
                     </p>
                  </ContainerPorcentagem>
                  <ContainerPorcentagem>
                     <img src={Img96} alt="" />
                     <p>
                        dos profissionais de saúde afirmam que as crianças{' '}
                        ficam mais à vontade com o ambiente do hospital.
                        <br />
                        <br />
                     </p>
                  </ContainerPorcentagem>
                  <ContainerPorcentagem>
                     <img src={Img96} alt="" />
                     <p>
                        dos profissionais de saúde afirmam que as crianças{' '}
                        ficam mais à vontade com o ambiente do hospital.
                        <br />
                        <br />
                     </p>
                  </ContainerPorcentagem>
                  <MsgFont>
                     * fonte: Avaliação do resultado do trabalho dos Doutores da
                     Alegria em hospitais / Instituto Fonte
                  </MsgFont>
               </div>
            </SectionInfos>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/festa-virtual')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>FESTA VIRTUAL</p>
               </div>
               <div onClick={() => navigate('/abrace-a-causa')}>
                  <p>ABRACE A CAUSA</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default SocialImpact

const Body = styled.div`
   background-color: #fff;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 150px;
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 10px;
   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 800;
      font-size: 28px;
      line-height: 34px;
      margin-top: 50px;
      margin-bottom: 30px;
   }
 
   a{
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
   }
   div {
      max-width: 650px;
      width: 100%;
   }
   div > p,
   li {
      max-width: 475px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
   }
   div > img {
      margin-bottom: 30px;
      :first-of-type{
         height: 60px;
      }
   }
`
const FristP = styled.p`
   max-width: 685px !important;
`

const Footer = styled.div`
   width: 100%;
   background-color: #fff;
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

   max-width: 993px;
   width: 100%;
   @media (max-width: 1619px) {
      max-width: 800px;
      width: 100%;
   }
   @media (max-width: 1355px) {
      max-width: 600px;
      width: 100%;
      margin-top: 100px;
   }
   @media (max-width: 1144px) {
      display: none;
   }
`
const DeclaracaoImg = styled.img`
   margin-top: 40px;
   max-width: 687px;
   width: 100%;
`
const SectionInfos = styled.div`
   max-width: 1440px;
   margin: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 0 20px;
   padding: 0 10px;
   p {
      max-width: 690px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      color: #000000;
      font-size: 16px;
      line-height: 28px;
      color: #000000;
      margin-bottom: 15px;
   }
`
const ContainerPorcentagem = styled.div`
   display: flex;
   margin-bottom: 10px;
   max-height: 84px;
   align-items: center;
   justify-content: center;
   img {
      margin-right: 15px;
   }
   p {
      max-width: 384px;
      margin: 0;
      margin-top: 25px;
      @media (max-width: 486px) {
         font-size: 15px;
         line-height: 15px;
      }
   }
`

const MsgFont = styled.div`
max-width: 400px;
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 650;
   font-size: 14px;
   line-height: 20px;
   color: #000000;
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
