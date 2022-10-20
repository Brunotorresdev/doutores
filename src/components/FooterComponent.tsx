import styled from 'styled-components'
import ImgLogoBottom from '../assets/images/logo-footer.png'
import ImgFest from '../assets/images/img-fest.png'

const FooterComponent: React.FC = () => {
   return (
      <FooterBottom>
         <FooterContainerBottom>
            <div>
               <img src={ImgLogoBottom} alt="" />
            </div>
            <ImgFestFooter src={ImgFest} />
            <div>
               <p>balanço 2021</p>
            </div>
         </FooterContainerBottom>
      </FooterBottom>
   )
}

export default FooterComponent

const FooterBottom = styled.div`
   width: 100%;
   background-color: #000000;
   position: relative;
   bottom: 0;
`

const FooterContainerBottom = styled.div`
   max-width: 1441px;
   margin: auto;
   background-color: #000000;
   padding: 30px 0;
   display: flex;
   align-items: center;
   display: flex;
   justify-content: space-between;
   position: relative;

   div {
      display: flex;
      align-items: center;
   }
   p {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: right;
      text-transform: uppercase;
      color: #ffffff;
      margin-right: 15px;
   }
`
const ImgFestFooter = styled.img`
   height: 80%;
   position: absolute;
   bottom: 0;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;

   @media (max-width: 674px) {
      height: 60%;
   }

   @media (max-width: 532px) {
      height: 50%;
   }
`
