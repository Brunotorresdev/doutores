import { useState } from 'react'
import styled from 'styled-components'
import ImgLogo from '../assets/images/logo-doutores-header.png'
import ImgMenu from '../assets/images/menubar.png'
import ModalMenu from 'components/ModalMenu'
import HeaderImg from '../assets/images/header-image.png'
import ImgText from '../assets/images/title-dentro-fora.png'
import FooterComponent from 'components/FooterComponent'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import { useNavigate } from 'react-router-dom'
import ImgQuatroPalhacos from '../assets/images/img-quatro-palhacos.png'
import { ScrollTop } from 'components/ScrollTop'

const InsideAuto: React.FC = () => {
   const [modal, setModal] = useState(false)

   ScrollTop()

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
               <img src={ImgText} alt="" />

               <div>
                  <h1>O novo código de ética e nosso jeito de ser</h1>

                  <p>
                     Duas ações estratégicas lideradas pela diretoria se
                     concretizaram nos últimos anos. São diretrizes internas,
                     construídas coletivamente sob a luz da tarefa e dos valores
                     institucionais, que orientam a gestão de pessoas e a ética
                     comum empregada em todas as nossas ações.
                  </p>

                  <h1>Jeito de Ser</h1>

                  <p>
                     A publicação estabelece uma base comum para processos de
                     gestão de pessoas. Iniciado em 2019 com a construção de
                     competências e comportamentos, em parceria com a
                     Arquitetura RH, o processo se desenvolveu com a
                     participação de um grupo multidisciplinar. O documento
                     ganhou versão final em setembro de 2020. <br />
                     <br />O Jeito de Ser estabelece condutas e reúne seis
                     competências que são esperadas dos colaboradores da
                     associação. São elas: respeito à diversidade, cuidado,
                     coerência, diálogo, cocriação e “mais é menos e menos é
                     mais”.
                  </p>

                  <h1>Código de Integridade e Conduta Ética</h1>

                  <p>
                     Fruto de construção coletiva, o documento reflete
                     discussões internas iniciadas em 2019 eestabelece
                     parâmetros e comportamentos aplicados ao ambiente da
                     Doutores da Alegria. O código debate temas como direitos
                     autorais, recursos públicos, humor na atualidade, ações
                     afirmativas, conflito de interesses e relações de trabalho.{' '}
                     <br />
                     <br />
                     No item ‘O Palhaço e o Humor’, por exemplo, a associação
                     espera que palhaços não utilizem o humor para reforçar
                     preconceitos e não criem piadas de conteúdos machista,
                     racista ou sexista. <br />
                     <br />
                     Em ‘Crianças e Adolescentes: Público Prioritário”, o
                     documento reforça que os colaboradores da associação têm o
                     compromisso de respeitar e promover a defesa dos direitos
                     de crianças eadolescentes, em especial as em situação de
                     hospitalização, em consonância com a Declaração Universal
                     dos Direitos da Criança. <br />
                     <br />
                     Em “Direitos Humanos e Ações Afirmativas”, a associação se
                     compromete a adotar políticas éticas e transparentes para
                     preenchimento de vagas e de representatividade em todos os
                     seus segmentos. <br />
                     <br />
                     Neste sentido, busca contemplar a maior diversidade e
                     pluralidade de pessoas possível entre negros, mulheres,
                     pessoa com deficiência, idosos, imigrantes e pessoas que se
                     reconheçam como membros da comunidade LGBTQIA+. <br />
                     <br />
                     Também pretende criar políticas internas para garantir e
                     resguardar a igualdade de salários e de benefícios para
                     cargos e funções com atribuições semelhantes, entre outras
                     ações afirmativas.
                  </p>
               </div>
            </BodyLeftSide>
            <QuatroPalhacosImg src={ImgQuatroPalhacos} />
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/nossa-bandeira')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Nossa Bandeira</p>
               </div>
               <div onClick={() => navigate('/emergencia')}>
                  <p>Emergência</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
         <FooterComponent />
      </>
   )
}

export default InsideAuto

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
   max-width: 800px;
   width: 100%;

   p {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      color: #000000;
      max-width: 664px;
      width: 100%;
   }
div{
   max-width: 690px;
}

   img {
      max-width: 800px;
      width: 100%;
      height: 83px;
      @media (max-width: 710px) {
         height: 60px;
      }
   }

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      color: #303030;
      margin: 25px 0 15px 0;
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

const QuatroPalhacosImg = styled.img`
   position: absolute;
   right: 0;
   margin-top: 170px;
   max-width: 380px;
      width: 100%;

   @media (max-width: 1250px) {
      position: relative;
      margin: 0;
   }

   @media (max-width: 500px) {
      max-width: 370px;
      width: 100%;
   }
`
