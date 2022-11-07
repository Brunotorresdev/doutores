import styled from 'styled-components'
import ImgLogo from '../assets/images/logo-doutores.png'
import ImgLogo2 from '../assets/images/img-logo-2.png'
import ImgMenu from '../assets/images/menubar.png'
import ImgMain from '../assets/images/main.png'
import ImgPalhaco from '../assets/images/palhaco.png'
import ImgPalhacoMobile from '../assets/images/img-palhaco-mobal.png'
import ImgMainBottom from '../assets/images/main-bottom.png'
import ModalMenu from 'components/ModalMenu'
import { useState } from 'react'
import FooterComponent from 'components/FooterComponent'
import ImgArrowRight from '../assets/images/arrow-right.png'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from 'components/ScrollTop'

const App = (): JSX.Element => {
   const [modal, setModal] = useState(false)

   ScrollTop()

   const navigate = useNavigate()

   const onClose = () => {
      setModal(false)
   }

   return (
      <Body>
         <HeaderContainer>
            <Header>
               <LogoImg src={ImgLogo} alt="" />
               <img onClick={() => setModal(!modal)} src={ImgMenu} alt="" />
            </Header>
            {modal && <ModalMenu onClose={onClose} />}
         </HeaderContainer>
         <Main>
            <img src={ImgMain} alt="" />
            <LogoImg2 src={ImgLogo2} alt="" />
            <ImgPalhacoDiv2 src={ImgPalhacoMobile} />

            <ImgPalhacoDiv src={ImgPalhaco} />
         </Main>
         <MainBottom>
            <img src={ImgMainBottom} alt="" />
         </MainBottom>
         <Footer>
            <FooterContainer>
               <div>
                  <p>abertura</p>
                  <img
                     onClick={() => navigate('/abertura')}
                     src={ImgArrowRight}
                     alt=""
                  />
               </div>
            </FooterContainer>
         </Footer>
         <FooterComponent />
      </Body>
   )
}

const Body = styled.div`
   margin: 0;
   padding: 0;
   background-color: #ef6aa7;
`

const HeaderContainer = styled.div`
   margin: auto;
   max-width: 1441px;
   padding: 30px 50px;
`

const Header = styled.div`
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

const Main = styled.div`
   max-width: 1441px;
   margin: auto;

   img {
      :first-of-type {
         @media (max-width: 1460px) {
            width: 100%;
            height: 917px;
         }
         @media (max-width: 1360px) {
            width: 100%;
            height: 850px;
         }
         @media (max-width: 1200px) {
            width: 100%;
            height: 780px;
         }
         @media (max-width: 1100px) {
            width: 100%;
            height: 650px;
         }
         @media (max-width: 850px) {
            width: 100%;
            height: 550px;
         }
         @media (max-width: 600px) {
            width: 100%;
            height: 400px;
         }
         @media (max-width: 500px) {
            display: none;
         }
      }
   }
`

const MainBottom = styled.div`
   background-color: #ffffff;
   width: 100%;
   margin: auto;
   img {
      width: 100%;
      margin-top: -200px;
      max-height: 470px;
      border-bottom: 2px solid black;
      @media (max-width: 600px) {
         display: none;
      }
   }
`

const ImgPalhacoDiv2 = styled.img`
   display: none;
   background-color: #ffffff;
   @media (max-width: 600px) {
      display: block;
      width: 100%;
   }
`

const ImgPalhacoDiv = styled.img`
   position: absolute;
   width: 665px;
   height: 539px;
   top: 838px;
   left: 47%;

   @media (max-width: 1310px) {
      left: 40%;
      width: 400px;
      height: 400px;
   }
   @media (max-width: 1140px) {
      left: 35%;
   }
   @media (max-width: 1050px) {
      left: 30%;
      width: 300px;
      height: 300px;
   }
   @media (max-width: 980px) {
      left: 20%;
      top: 700px;
   }
   @media (max-width: 800px) {
      top: 600px;
   }
   @media (max-width: 600px) {
      display: none;
   }
`
const Footer = styled.div`
   width: 100%;
   background-color: #ffffff;
   padding: 0 5px;
   @media(max-width: 600px){
      border-top: 2px solid #000000;
   }
`

const FooterContainer = styled.div`
   max-width: 1441px;
   margin: auto;
   background-color: #ffffff;
   display: flex;
   align-items: center;
   display: flex;
   justify-content: flex-end;
   padding: 30px 0px;
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
      margin-right: 15px;
   }
`
const LogoImg = styled.img`
   @media (max-width: 600px) {
      padding-bottom: 150px;
   }
   @media (max-width: 500px) {
      padding-bottom: 50px;
   }
`
const LogoImg2 = styled.img`
   display: none;
   @media (max-width: 500px) {
      display: block;
      width: 100%;
   }
`

export default App
