import styled from 'styled-components'
import FooterComponent from './FooterComponent'
import { useState } from 'react'
import ImgLogo from '../assets/images/logo-doutores-header.png'
import ImgMenu from '../assets/images/menubar.png'
import ModalMenu from './ModalMenu'
import HeaderImg from '../assets/images/header-image.png'
import { useNavigate } from 'react-router-dom'

type Props = {
   children?: JSX.Element | JSX.Element[]
}

const BaseLayout: React.FC<Props> = ({ children }: Props) => {
   const [modal, setModal] = useState(false)

   const navigate = useNavigate()

   const onClose = () => {
      setModal(false)
   }

   return (
      <BodyComponents>
         <HeaderContainer>
            <Header>
               <img onClick={() => navigate('/')} src={ImgLogo} alt="" />
               <img onClick={() => setModal(!modal)} src={ImgMenu} alt="" />
            </Header>
            {modal && <ModalMenu onClose={onClose} />}
         </HeaderContainer>
         {children}
         <FooterComponent />
      </BodyComponents>
   )
}

export default BaseLayout

const BodyComponents = styled.div`
   display: flex;
   flex-direction: column;
`

const HeaderContainer = styled.div`
   padding: 50px 50px 230px 50px;
   background: url(${HeaderImg});
   background-repeat: none;
   background-size: cover;
   position: relative;
   width: 100%;
   z-index: 3;
   box-sizing: border-box;
   cursor: pointer;
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
