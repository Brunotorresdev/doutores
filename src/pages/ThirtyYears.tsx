import styled from 'styled-components'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import TitleImage from '../assets/images/thirty-years-title.png'
import Palhacos from '../assets/images/thirty-years-image.png'
import HeartIcon from '../assets/images/heart-icon.png'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from 'components/ScrollTop'

const ThirtyYears: React.FC = () => {
   const navigate = useNavigate()
   ScrollTop()
   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <img src={TitleImage} alt="Nosso encontro" />
                  <h1>Resiliência marca 30 anos da Doutores da Alegria</h1>
                  <p>
                     Doutores da Alegria fez 30 anos em 28 de setembro de 2021.
                  </p>
                  <p>
                     A organização que introduziu o palhaço profissional no
                     universo da saúde e produziu conhecimento a partir disso
                     celebra os avanços do acolhimento hospitalar com a arte
                     agora presente em hospitais em todo o país. E levanta a
                     bandeira da cultura como direito fundamental para o
                     equilíbrio de uma sociedade que lida com desigualdades e
                     distensões sociais.
                  </p>
                  <p>
                     É como a gente sempre diz: as nossas mais sinceras
                     narigadas. Aos mestres palhaços que vieram antes de nós, ao
                     visionário Wellington Nogueira, ao pioneiro Michael
                     Christensen, a todos os profissionais que passaram pela
                     organização, às crianças e profissionais de saúde que dão o
                     tom deste ofício, às empresas e pessoas que abraçam a
                     causa, ao público que sempre marca presença e a todos
                     aqueles que insistem na arte como semeadora de pequenas e
                     grandes descobertas.
                  </p>
               </div>
               <ImgPalhacos src={Palhacos} alt="" />
            </Section>

            <Section>
               <div>
                  <Title>Memórias de quem fez parte dessa história</Title>
                  <SectionDepoiments>
                     <Depoiment>
                        “Uma das marcas mais importantes que Doutores da Alegria
                        vem imprimindo na sociedade é a mudança na visão do que
                        é saúde. Sua atuação faz com que morte e vida, doença e
                        saúde, tristeza e alegria possam conviver no cenário
                        hospitalar, integrando aspectos centrais para o
                        desenvolvimento da saúde."
                        <span>
                           Morgana Masetti, psicóloga hospitalar e associada na
                           Doutores da Alegria
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Com a introdução do tablet, manejado por um de nossos
                        colaboradores, vocês praticaram a besteirologia
                        completamente fora da zona de conforto e, ainda assim,
                        mantendo a leveza e o propósito de ouvir, 'tocar' e
                        trazer cuidado aos pacientes.”
                        <span>
                           Flavio Mitio Takahagi, médico e diretor do Hospital
                           M'Boi Mirim (SP)
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “São muitos os impactos de um circuito de artes dentro
                        de hospitais públicos. Talvez o maior deles seja o
                        afeto, garantido pela acessibilidade. Não no sentido
                        assistencialista, caridoso, mas do compromisso com a
                        própria arte, garantindo que ela vá onde o povo está.
                        Não importa se no corredor ou numa enfermaria, qualquer
                        canto é transformado em palco e a magia se faz.”
                        <span>Juliana Correia, atriz do grupo Baobazinho</span>
                     </Depoiment>

                     <Depoiment>
                        “Eu estava chorando e vocês chegaram. Brinquei e
                        brinquei.”
                        <span>
                           Cauã Soares da Silva, 13, paciente internado do
                           Hospital da Restauração (PE)
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Doutores da Alegria levou o trabalho do Michael
                        Christensen [fundador do The Clown Care Unit] a um
                        próximo passo, fazendo pesquisa, espetáculos e
                        palestras, inovando ao unir arte e ciência a serviço da
                        sociedade. Ousou com método e arte.”
                        <span>
                           Wellington Nogueira, fundador da Doutores da Alegria
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Quando a arte invade os hospitais se torna meio de
                        expressão para profissionais de saúde e pacientes, uma
                        prática de cidadania e de suporte ao SUS."
                        <span>Felipe Haiut, ator do grupo Conexão do Bem</span>
                     </Depoiment>
                     <Depoiment>
                        “Quando essa organização social se instalou em
                        Pinheiros, São Paulo, passou a participar da Rede
                        Intersetorial de Proteção Integral à Crianças e
                        Adolescentes e do fórum regional voltado a esse público.
                        Assim, Doutores da Alegria atua efetivamente na defesa
                        dos direitos da infância e juventude, seja contribuindo
                        na organização desses espaços, seja desenvolvendo ações
                        diretas com crianças, adolescentes, jovens e adultos que
                        trabalham nos setores de assistência social, saúde,
                        educação e cultura.”
                        <span>
                           Miriam Tronnolon, assistente social e integrante do
                           Grupo de Organização da Rede e do Fórum da Criança e
                           do Adolescente de Pinheiros
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Unir propósitos que buscam a construção de uma
                        sociedade melhor e mais inclusiva tem sido um dos nossos
                        maiores motivadores na Visa. A parceria com a Doutores
                        da Alegria é um grande encontro nesse sentido.”
                        <span>
                           Sergio Giorgetti, vice-presidente de marketing da
                           Visa
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Na pandemia, as lives e vídeos foram ótimos para
                        acalentar nossos corações, mas estava ansiosa pelo
                        retorno dos encontros presenciais, que são dias muito
                        felizes no hospital. São inúmeros os benefícios das
                        apresentações do Plateias Hospitalares, como mudanças de
                        comportamento diante da hospitalização e socialização
                        com outros pacientes. Vocês proporcionam a produção de
                        memórias afetivas no período da internação.”
                        <span>
                           Veronica Ferreira, gerente de comunicação do Hospital
                           Municipal Adão Pereira Nunes (RJ)
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “O trabalho dos Doutores da Alegria traz uma leveza
                        encantadora para uma realidade muito densa que é a dos
                        pacientes oncológicos. E ele abrange não só as crianças,
                        mas também acompanhantes e equipes médicas e
                        multidisciplinares.”
                        <span>
                           Laurice Siqueira, médica no Hospital Universitário
                           Oswaldo Cruz (PE)
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Em meio ao caos da pandemia, fui convidada para
                        trabalhar com os Doutores da Alegria, carregando-os para
                        cima e para baixo em um tablet. A cada encontro foi
                        ficando mais divertido entrar na brincadeira e ouvir
                        risos e gargalhadas que amenizavam o sofrimento da
                        internação. Foi gratificante me sentir parte da equipe e
                        receber até um certificado. Vida longa aos melhores
                        besteirologistas do mundo.”
                        <span>
                           Daniella de Oliveira Melo, terapeuta ocupacional no
                           Hospital do Mandaqui (SP)
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Trago em mim ainda a sensação de enxergar da
                        extremidade de um corredor dezenas de portas fechadas e
                        o friozinho na barriga ao imaginar que ao abrir cada uma
                        delas uma nova história começaria. Em um quarto de
                        hospital, pude perceber concretamente, pela primeira
                        vez, o real significado e a importância social da arte.”
                        <span>Angelo Brandini, diretor e palhaço</span>
                     </Depoiment>
                     <Depoiment>
                        “Eu era um jovem negro e periférico que pesquisava artes
                        dramáticas. A Escola Doutores da Alegria foi uma
                        oportunidade de ampliar o olhar para a comicidade como
                        desenvolvimento cênico e artístico. Era um lugar onde eu
                        podia levar tudo o que eu recebia no cotidiano da
                        quebrada para a cena.’
                        <span>
                           Valmir Sant’anna, artista e ex-aluno da turma 5 do
                           Programa de Formação de Palhaço para Jovens
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “Fiz tratamento nos anos de 1997-98, logo no comecinho
                        dos Doutores da Alegria. Após a visita, o clima no
                        hospital muda completamente e percebemos como o riso e
                        alegria podem ter efeitos mágicos nos resultados do
                        tratamento. Eles me influenciaram e posso garantir que
                        até hoje é com esse astral que tento encarar meu dia a
                        dia.”
                        <span>
                           Bela Pulfer, ex-paciente no Hospital AC Camargo (SP)
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “Com o mundo tão dodói, o trabalho dos Doutores da
                        Alegria é uma vacina afetuosa de cuidado e de saúde.”
                        <span>
                           Irandhir Santos, ator e embaixador da campanha 'Você
                           já imaginou o hospital sem Doutores da Alegria?'
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “Corpo, mente e contexto social são partes
                        complementares do indivíduo e sabemos que, através das
                        formações e manifestações artísticas, Doutores da
                        Alegria promove a saúde integral e o bem estar de
                        milhares de crianças. Temos muito orgulho dessa longa e
                        consistente parceria.”
                        <span>
                           Maria Izabel Toro, gerente de investimento social na
                           RD - Raia Drogasil
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “O trabalho do palhaço funciona em via dupla. Sabemos da
                        importância do ofício, o que esta nobre arte transforma
                        nos outros e reconhecemos o prazer que ela também nos
                        causa. Parabéns aos Doutores da Alegria, amigas e amigos
                        talentosos que fazem vibrar alma e corpo de pessoas em
                        momentos sensíveis de suas vidas.”
                        <span>
                           Fernando Sampaio, artista e fundador da Cia La Mínima
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “A White Martins tem orgulho e satisfação de, desde
                        2006, fazer parte da bela trajetória desta organização,
                        reconhecida internacionalmente pelo impacto positivo de
                        suas iniciativas na sociedade. Assim como os Doutores da
                        Alegria, a companhia está presente em hospitais com
                        objetivo de levar mais qualidade de vida e bem-estar
                        para milhares de pacientes em todo o Brasil.”
                        <span>
                           Júlia Lomba, gerente de comunicação e
                           sustentabilidade da White Martins
                        </span>
                     </Depoiment>
                     <Depoiment>
                        “Quando terminei a faculdade, fiz o curso 'Palhaço para
                        Curiosos'. Já era admiradora e simplesmente me
                        apaixonei. Doutores da Alegria leva luz, alegria,
                        esperança e vida, não deixa a peteca cair.”
                        <span>Márcia Vieira de França, sócia da alegria</span>
                     </Depoiment>

                     <Depoiment>
                        “Trabalho fundamental, afinal, rir ainda é o melhor
                        remédio.”
                        <span>
                           Marister Reis, enfermeira do Hospital Oswaldo
                           Cruz/Procape (PE)
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “Os palhaços nos ajudaram a manter a saúde mental dos
                        pacientes e trabalhadores, foram nossas doses diárias de
                        sorriso em dias difíceis.”
                        <span>
                           Thamiris Nascimento, profissional que apoiou nas
                           intervenções com uso de tablets no Hospital Barão de
                           Lucena (PE)
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “A formação cidadã era uma necessidade que o Programa de
                        Formação de Palhaço para Jovens impôs, transcendendo a
                        necessária e importante formação profissional. Em 2017 e
                        em 2019, estive com os envolvidos no programa e
                        refletimos uma proposta de educação quilombista do
                        Brasil. Em 2020, momento agudo do flagelo da pandemia,
                        recebi o convite para participar de modo remoto da
                        finalização do ciclo de uma das turmas. Assistir aos
                        vídeos produzidos pelos formandos foi enriquecedor.
                        Desejo que a organização e o Programa de Formação tenham
                        vida longa.”
                        <span>
                           Ricardo Matheus Benedicto, mestre em filosofia pela
                           PUC-SP e doutor em educação pela USP
                        </span>
                     </Depoiment>

                     <Depoiment>
                        “No final dos anos 1990, me encantei com os Doutores da
                        Alegria e quis ajudar doando. Pessoas que se transformam
                        em palhaços para transmitir alegria e afeto para
                        crianças merecem todo o nosso apoio.”
                        <span>Maria Lucia Vilela Passos, sócia da alegria</span>
                     </Depoiment>

                     <Depoiment>
                        “Falar de Doutores da Alegria é falar de inovações e
                        legados sistêmicos, 360 graus. Trabalho em hospitais que
                        geram conteúdos, que geram estudos, alimentam pesquisas
                        acadêmicas, embasam formação de profissionais de saúde e
                        artistas, que servem para extrair elementos de trabalho
                        com executivos e gestores. Tudo isso combinado dá o
                        lastro para que o trabalho se torne política pública. E
                        o mais genial: Doutores da Alegria não compete com
                        outras organizações que trabalham com palhaços ou teatro
                        em hospitais. Sabem que a competitividade está na
                        colaboração.”
                        <span>
                           Lala Deheinzelin, uma das três principais futuristas
                           da América Latina
                        </span>
                     </Depoiment>
                  </SectionDepoiments>
               </div>
            </Section>
            <Section>
               <div>
                  <Title>Um tiquinho de história</Title>
                  <p>
                     <a
                        href="https://doutoresdaalegria.org.br/conheca/nossa-historia/"
                        target="blank"
                     >
                        Acompanhe aqui a linha do tempo da organização
                     </a>
                     , que começa em 1991 no Hospital Nossa Senhora de Lourdes,
                     em São Paulo.
                  </p>
               </div>
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/pensando-em-voz-alta')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>Pensando em voz alta</p>
               </div>
               <div onClick={() => navigate('/festa-virtual')}>
                  <p>Festa Virtual</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default ThirtyYears

const Body = styled.div`
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 250px;
   background-color: #ffef00;
   overflow-x: hidden;
   position: relative;
   min-height: 600px;
   @media (max-width: 1100px) {
      margin-top: -26%;
      padding-top: 26%;
   }
`
const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 5%;
   position: relative;

   > div {
      > h1 {
         margin-top: 20px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 700;
         font-size: 28px;
         line-height: 34px;
      }

      > img {
         width: 90%;
      }

      > p {
         margin-top: 30px;
         max-width: 620px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 28px;
         color: #000000;

         > a {
            background-color: #f162a5;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
         }
      }
   }
`
const Footer = styled.div`
   width: 100%;
   border-top: 2px solid black;
   background-color: #ffef00;
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
   width: 40%;
   max-width: 500px;

   @media (max-width: 1050px) {
      display: none;
   }
`
const SectionDepoiments = styled.div`
   min-height: 262px;
   margin-top: 80px;
   margin-bottom: 80px;
   max-width: 1441px;
   padding: 0 5%;
   position: relative;
   column-count: 2;
   column-gap: 50px;

   @media (max-width: 680px) {
      column-count: 1;
   }
`

const Depoiment = styled.p`
   max-width: 500px;
   min-width: 250px;
   width: 100%;
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 26px;
   color: #000000;
   margin-top: 20px;
   position: relative;
   -webkit-column-break-inside: avoid;

   > span {
      display: block;
      margin-top: 12px;
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      @media (max-width: 500px) {
         font-weight: 700;
      }
   }

   @media (max-width: 990px) {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
   }
   @media (max-width: 500px) {
      font-weight: 500;
      font-size: 20px;
   line-height: 21px;
   }

   :before {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      left: -30px;
      background-image: url(${HeartIcon});
      background-repeat: no-repeat;
   }
`
const Title = styled.div`
   margin-top: 40px;
   font-family: 'Roboto Condensed';
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
   line-height: 34px;
   color: #000000;
`
