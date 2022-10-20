import { useState } from 'react'
import styled from 'styled-components'
import ImgLogo from '../assets/images/logo-doutores-header.png'
import ImgMenu from '../assets/images/menubar.png'
import ModalMenu from 'components/ModalMenu'
import HeaderImg from '../assets/images/header-image.png'
import ImgLuizVieira from '../assets/images/img-luiz-vieira.png'
import ImgTextAbertura from '../assets/images/abertura-text.png'
import FooterComponent from 'components/FooterComponent'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import { useNavigate } from 'react-router-dom'

const Opening: React.FC = () => {
   const [modal, setModal] = useState(false)

   const navigate = useNavigate()

   const onClose = () => {
      setModal(false)
   }

   return (
      <>
         <HeaderContainer>
            <Header>
               <img src={ImgLogo} alt="" />
               <img onClick={() => setModal(!modal)} src={ImgMenu} alt="" />
            </Header>
            {modal && <ModalMenu onClose={onClose} />}
         </HeaderContainer>
         <Body>
            <BodyLeftSide>
               <ImgTitle src={ImgTextAbertura} alt="" />
               <p>
                  O Balanço dos Doutores da Alegria é uma publicação anual que
                  apresenta os resultados e impacto do trabalho realizado pela
                  associação. <br /> <br /> Em 2021, completamos 30 anos de
                  existência com o desafio de sobreviver em um momento de
                  aprofundamento da pandemia e de recursos escassos na área
                  cultural. <br /> <br /> Atravessar o ano foi tal qual aquela
                  música: “A esperança dança na corda bamba de sombrinha”.{' '}
                  <br /> <br /> Lendo esta publicação, você descobrirá como a
                  organização de palhaços inovou no digital para superar o
                  distanciamento de crianças internadas e profissionais na linha
                  de frente com a saúde mental abalada. <br /> <br /> Também
                  entenderá como mobilizamos a sociedade para nos apoiar
                  enquanto aguardávamos o parecer da Secretaria Especial de
                  Cultura. Foram seis meses em que precisamos usar nossas
                  reservas financeiras para manter as atividades. <br /> <br />{' '}
                  Por fim, você verá como comemoramos nossos 30 anos com o
                  Festival Miolo Mole e por meio de histórias e depoimentos
                  emocionantes. Boa leitura!
               </p>

               <h1>COLABORAÇÃO</h1>

               <p>
                  A arte pode amparar o trabalho de profissionais da saúde,
                  deixar boas memórias do período de internação para as
                  crianças, curar feridas emocionais e abrir janelas invisíveis,
                  mas o legado da pandemia que terá que ser enfrentado com
                  políticas públicas. <br /> <br /> Cada um tem seu papel neste
                  momento decisivo e apenas com a colaboração de todos teremos
                  um país que ofereça um futuro com mais dignidade para crianças
                  e adolescentes brasileiros. <br /> <br /> Leia o texto do
                  nosso diretor presidente, Luis Vieira da Rocha, na íntegra
                  aqui.
               </p>
            </BodyLeftSide>
            <ImgLuiz src={ImgLuizVieira} />
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>HOME</p>
               </div>
               <div onClick={() => navigate('/raio-x')}>
                  <p>RAIO X</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
         <FooterComponent />
      </>
   )
}

export default Opening

const HeaderContainer = styled.div`
   padding: 50px 50px 200px 50px;
   background: url(${HeaderImg});
   background-repeat: none;
   background-size: cover;
`

const Header = styled.div`
   max-width: 1441px;
   margin: auto;
   display: flex;
   justify-content: space-between;

   img {
      :last-of-type {
         width: 32px;
         height: 27px;
         cursor: pointer;
      }
   }
`

const Body = styled.div`
   max-width: 1441px;
   margin: auto;
   display: flex;
   padding: 20px;

   img {
      width: 488px;
      height: 623px;
   }

   @media (max-width: 911px) {
      flex-direction: column-reverse;
      align-items: center;

      > img {
         margin-bottom: 20px;
      }
   }
`
const BodyLeftSide = styled.div`
   max-width: 712px;
   width: 100%;

   p {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
   }
   img {
      width: 407px;
      height: 83px;
   }

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;

      color: #000000;
      margin: 30px 0;
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

const ImgLuiz = styled.img`
   max-width: 489px;
   width: 100%;
   max-height: 623px;
   height: 100%;

   @media(max-width: 515px){
      max-width: 350px;
   width: 100%;
   max-height: 480px;
   height: 100%;
   }
`
const ImgTitle = styled.img`
max-width: 407px;
width: 100%;
@media(max-width: 515px){
      max-width: 350px;
  
   }
`