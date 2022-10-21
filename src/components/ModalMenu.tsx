import styled from 'styled-components'
import ImgModalPanel from '../assets/images/panel-modal.png'
import ImgMenuClose from '../assets/images/menu-close.png'
import ImgMenuCloseTwo from '../assets/images/button-close-two.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
   onClose: () => void
}

const ModalMenu: React.FC<Props> = ({ onClose }) => {
   const [mouseTwo, setMouseTwo] = useState(false)
   const navigate = useNavigate()

   return (
      <BackgroundModal>
         <Modal>
            <img src={ImgModalPanel} alt="" />

            <ModalText>
               <DivMenuClose
                  onClick={onClose}
                  onMouseOver={() => setMouseTwo(!mouseTwo)}
                  src={mouseTwo ? ImgMenuClose : ImgMenuCloseTwo}
               />

               <div>
                  <Welcome onClick={() => navigate('/')}>Boas-vindas</Welcome>
                  <a onClick={() => navigate('/abertura')}>Colaboração</a>
                  <a onClick={() => navigate('/raio-x')}>Raio-X</a>
                  <a onClick={() => navigate('/nossa-bandeira')}>
                     Nossa bandeira
                  </a>
                  <a onClick={() => navigate('/dentro-pra-fora')}>
                     De dentro para fora
                  </a>
                  <a onClick={() => navigate('/emergencia')}>Emergência</a>
                  <a onClick={() => navigate('/imaginar')}>Imagina imaginar?</a>
               </div>
               <div>
                  <a onClick={() => navigate('/tudo-virtual')}>
                     Enquanto a vacina não vinha
                  </a>
                  <a onClick={() => navigate('/meio-a-meio')}>
                     Retorno meio a meio
                  </a>
                  <a onClick={() => navigate('/nosso-encontro')}>
                     Nosso encontro
                  </a>
                  <a onClick={() => navigate('/pensando-em-voz-alta')}>
                     Pensando em voz alta
                  </a>
                  <a onClick={() => navigate('/trintamos')}>Trintamos</a>
                  <a onClick={() => navigate('/festa-virtual')}>
                     Festa virtual{' '}
                  </a>
                  <a onClick={() => navigate('/impacto-social')}>
                     Impacto social
                  </a>
               </div>
               <div>
                  <a onClick={() => navigate('/abrace-a-causa')}>
                     Abrace a causa
                  </a>
                  <a onClick={() => navigate('/contas')}>
                     1+1 Prestação de contas
                  </a>
                  <a onClick={() => navigate('/equipe')}>Equipe</a>
                  <a onClick={() => navigate('/parceiros')}>Parceiros</a>
                  <a onClick={() => navigate('/socios')}>Sócios</a>
                  <a onClick={() => navigate('/expediente')}>Expediente</a>
               </div>
            </ModalText>
         </Modal>
      </BackgroundModal>
   )
}

const BackgroundModal = styled.div`
   width: 100%;
   height: 100%;
   background-color: #2ec1d7;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 1001;
`

const Modal = styled.div`
   position: relative;
   margin: auto;
   margin-top: 12%;
   max-width: 1071px;
   width: 100%;
   max-height: 471px;
   height: 100%;

   @media (max-width: 1095px) {
      img {
         display: none;
      }
   }
`

const ModalText = styled.div`
   position: absolute;
   top: 0;
   max-width: 1071px;
   width: 100%;
   max-height: 471px;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 25px;
   justify-content: center;
   padding-left: 50px;
   padding-top: 80px;

   @media (max-width: 920px) {
      max-width: 500px;
      justify-content: left;
      padding-top: 00px;
      gap: 00px;
   }

   div {
      max-width: 320px;
      display: flex;
      flex-direction: column;
      a {
         font-family: 'Rubik', sans-serif;
         font-style: normal;
         font-weight: 600;
         font-size: 23px;
         line-height: 26px;
         cursor: pointer;
         color: #000000;
         margin-bottom: 14px;

         @media (max-width: 1095px) {
            color: #fff;
         }
      }
   }
`

const DivMenuClose = styled.img`
   position: absolute;
   cursor: pointer;
   top: -10px;
   right: -10px;

   @media (max-width: 1095px) {
      display: block !important;
      top: 0px;
      right: 10px;
   }
`

// const DivMenuCloseMobile = styled.img`
//    top: 0;
//    right: 0;
// `

const Welcome = styled.a`
   color: #ef6aa7 !important;
`

export default ModalMenu
