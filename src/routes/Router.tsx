import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Opening from 'pages/Opening'
import Raiox from 'pages/RaioX'
import Emergency from 'pages/Emergency'
import Imagine from 'pages/Imagine'
import ThinkingOutLoud from 'pages/ThinkingOutLoud'
import InsideAuto from 'pages/InsideAuto'
import VirtualParty from 'pages/VirtualParty'
import SocialImpact from 'pages/SocialImpact'
import OurFlag from 'pages/OurFlag'
import EmbraceCause from 'pages/EmbraceCause'
import AllVirtual from 'pages/AllVirtual'
import HalfToHalf from 'pages/HalfToHalf'
import OurMeeting from 'pages/OurMeeting'
import Partners from 'pages/Partners'
import Associates from 'pages/Associates'
import OfficeHour from 'pages/OfficeHour'
import ThirtyYears from 'pages/ThirtyYears'
import Team from 'pages/Team'
import Accountability from 'pages/Accountability'


const Router: React.FC = () => {
   
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abertura" element={<Opening />} />
            <Route path="/raio-x" element={<Raiox />} />
            <Route path="/nossa-bandeira" element={<OurFlag />} />
            <Route path="/dentro-pra-fora" element={<InsideAuto />} />
            <Route path="/emergencia" element={<Emergency />} />
            <Route path="/imaginar" element={<Imagine />} />
            <Route path="/tudo-virtual" element={<AllVirtual />} />
            <Route path="/meio-a-meio" element={<HalfToHalf />} />
            <Route path="/nosso-encontro" element={<OurMeeting />} />
            <Route path="/contas" element={<Accountability />} />
            <Route path="/pensando-em-voz-alta" element={<ThinkingOutLoud />} />
            <Route path="/trintamos" element={<ThirtyYears />} />
            <Route path="/festa-virtual" element={<VirtualParty />} />
            <Route path="/impacto-social" element={<SocialImpact />} />
            <Route path="/abrace-a-causa" element={<EmbraceCause />} />
            <Route path="/parceiros" element={<Partners />} />
            <Route path="/socios" element={<Associates />} />
            <Route path="/expediente" element={<OfficeHour />} />
            <Route path="/equipe" element={<Team />} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router
