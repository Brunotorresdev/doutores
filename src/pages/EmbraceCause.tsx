import styled from 'styled-components'
import ImgTitleSection from '../assets/images/abrace-a-causa.png'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import ImgAlegria from '../assets/images/palhaco-balls.png'
import ImgHeart from '../assets/images/heart.png'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from 'components/ScrollTop'

const EmbraceCause: React.FC = () => {
   const navigate = useNavigate()

   ScrollTop()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <ImgTitle src={ImgTitleSection} alt="Imagina imaginar?" />

                  <p>
                     Nossas ações são destinadas a públicos em situação de
                     vulnerabilidade e risco social. Doutores da Alegria
                     conta com a doação de empresas e de pessoas para manter
                     seus projetos nas áreas de saúde, cultura e
                     assistência social. <br />
                     <br />
                     Como uma organização da sociedade civil sem fins
                     lucrativos, atuamos com transparência na prestação
                     de contas, cumprindo com a legislação brasileira e
                     priorizando o bom uso dos recursos públicos e
                     privados. Recebemos auditoria externa de todas as contas
                     anualmente.
                     <br /> <br />
                  </p>

                  <div>
                     <HeaderImg src={ImgHeart} />
                     <p>
                        <a
                           href="https://doar.doutoresdaalegria.org.br/ajude"
                           target="blank"
                        >
                           Faça uma doação única ou torne-se sócio mantenedor
                        </a>
                     </p>
                  </div>
                  <div>
                     <HeaderImg src={ImgHeart} />
                     <p>
                        <a
                           href="https://doutoresdaalegria.org.br/abrace-a-causa/doar/?tipo=pj"
                           target="blank"
                        >
                           Patrocine como empresa
                        </a>{' '}
                        ou{' '}
                        <a
                           href="https://doutoresdaalegria.org.br/abrace-a-causa/leve-doutores-para-a-sua-empresa/"
                           target="blank"
                        >
                           contrate intervenções e palestras
                        </a>
                     </p>
                  </div>
                  <div>
                     <HeaderImg src={ImgHeart} />
                     <p>
                        Entre em contato para informações sobre doações e
                        parcerias: <br />{' '}
                        <a
                           href="parcerias@doutoresdaalegria.org.br"
                           target="blank"
                        >
                           parcerias@doutoresdaalegria.org.br.
                        </a>
                     </p>
                  </div>
                  <PartnersOfJoy>
                     <h1>SÓCIOS DA ALEGRIA</h1>
                     <p>
                        Para conhecer quem ajuda Doutores da Alegria, <br />{' '}
                        <a onClick={() => navigate('/socios')}>
                           acesse a lista de sócios.
                        </a>
                     </p>
                  </PartnersOfJoy>
               </div>
               <ImgPalhacos src={ImgAlegria} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/impacto-social')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>IMPACTO SOCIAL</p>
               </div>
               <div onClick={() => navigate('/contas')}>
                  <p>1+1 PRESTAÇÃO DE CONTAS</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default EmbraceCause

const Body = styled.div`
   background-color: #ffef00;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 150px;
   @media (max-width: 1100px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 10px;
   @media (max-width: 1050px) {
      flex-direction: column-reverse;
   }
   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
   }
   a {
      padding: 5px 0;
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
   }
   div > p {
      margin-top: 50px;
      max-width: 676px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
   }
   div > div {
      display: flex;
      margin-bottom: 30px;
      p {
         margin: 0;
      }
   }
`
const Footer = styled.div`
   width: 100%;
   background-color: #ffef00;
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

   @media (max-width: 1050px) {
      position: relative;
      max-width: 600px;
      width: 100%;
      margin-bottom: 20px;
   }
`
const HeaderImg = styled.img`
   max-height: 28px;
   margin-right: 15px;
`

const PartnersOfJoy = styled.div`
   margin-top: 40px;
   flex-direction: column;
   h1 {
      margin-bottom: 15px;
   }
`
const ImgTitle = styled.img`
   max-width: 600px;

   @media (max-width: 610px) {
      max-width: 500px;
   }
   @media (max-width: 510px) {
      max-width: 350px;
      height: 47px;
   }
`
