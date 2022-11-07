import styled from 'styled-components'
import ImgPalhaco from '../assets/images/palhaco-2.png'
import ImgTitleSection from '../assets/images/title-nosso-titulo.png'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from 'components/ScrollTop'

const OurFlag: React.FC = () => {
   const navigate = useNavigate()
   ScrollTop()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <TitleImg
                     src={ImgTitleSection}
                     alt="Nossa Bandeira: cultura como direito de todos"
                  />
                  <p>
                     <a
                        href="https://doutoresdaalegria.org.br/blog/cultura-como-direito/"
                        target="blank"
                     >
                        Leia aqui o manifesto dos Doutores da Alegria{' '}
                     </a>{' '}
                     que levanta a bandeira da cultura como um direito de todos.{' '}
                     <br /> E conheça a{' '}
                     <a
                        href="https://doutoresdaalegria.org.br/conheca/sobre-doutores/"
                           target="blank"
                     >
                        tarefa institucional e os valores
                     </a>{' '}
                     que orientam a organização.
                  </p>
               </div>
               <PalhacoImg src={ImgPalhaco} alt="" />
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/raio-x')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>RAIO X</p>
               </div>
               <div onClick={() => navigate('/dentro-pra-fora')}>
                  <p>DE DENTRO PRA FORA</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default OurFlag

const Body = styled.div`
   background-color: #ffef00;
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 30px;

   @media (max-width: 1240px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: 0 auto;
   max-width: 1441px;
   display: flex;
   padding: 0 15px;

   @media (max-width: 1370px) {
      flex-direction: column-reverse;
   }

   div {
      max-width: 640px;
   }

   div p > a {
      background-color: #f162a5;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
   }
   div > p {
      margin-top: 79px;
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
   background-color: #ffef00;
   padding: 0 5px;
   border-top: 2px solid black;
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

const PalhacoImg = styled.img`
   max-width: 570px;
   width: 100%;
   max-height: 720px;
   height: 100%;
`
const TitleImg = styled.img`
   max-width: 640px;
   width: 100%;
`
