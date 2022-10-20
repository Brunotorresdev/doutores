import styled from 'styled-components'
import BaseLayout from 'components/BaseLayout'
import ImgArrowRight from '../assets/images/arrow-right.png'
import ImgArrowLeft from '../assets/images/arrow-left.png'
import TitleImage from '../assets/images/team-title.png'
import Palhacos from '../assets/images/team-image.png'
import { useNavigate } from 'react-router-dom'
import Member1 from '../assets/images/member1.png'
import Member2 from '../assets/images/equipe/Wellington Nogueira Dr. Zinho-1.png'
import Member3 from '../assets/images/equipe/Daiane Carina Barbieri Ratã.png'
import Member4 from '../assets/images/equipe/lourdes.png'
import Member5 from '../assets/images/equipe/Ronaldo Aguiar_.png'
import Member6 from '../assets/images/equipe/simone_pimental.png' 
import Member7 from '../assets/images/equipe/Edilene Silva.png'
import Member8 from '../assets/images/equipe/Claudia-Queliconi.png'
import Member9 from '../assets/images/equipe/Leticia Jardim.png'
import Member10 from '../assets/images/equipe/Thamires Santos.png'
import Member11 from '../assets/images/equipe/Cristina Cardoso_.png'
import Member12 from '../assets/images/equipe/Gabriela Caseff.png'
import Member13 from '../assets/images/equipe/Bruno Tavares.png'
import Member14 from '../assets/images/equipe/Danilo Lima.png'
import Member15 from '../assets/images/equipe/Thais-Moura.png'
import Member16 from '../assets/images/equipe/Pollyanna-Diniz.png' 
import Member17 from '../assets/images/equipe/Patricia Santos Souza.png'
import Member18 from '../assets/images/equipe/Regiane-Bueno.png'
import Member19 from '../assets/images/equipe/Selma Soares.png'
import Member20 from '../assets/images/equipe/Thays Dias.png'
import Member21 from '../assets/images/equipe/Odete Peixoto.png'
import Member22 from '../assets/images/equipe/Carolina Kinoshita.png'
import Member23 from '../assets/images/equipe/Olga Lembo.png'
import Member24 from '../assets/images/equipe/Heraldo Firmino_.png'
import Member25 from '../assets/images/equipe/Raul Figueiredo.png'
import Member26 from '../assets/images/equipe/Roberta Calza.png'
import Member27 from '../assets/images/equipe/Thaïs Ferrara.png'
import Member28 from '../assets/images/equipe/Joao-Batista-de-Macedo.png'
import Member29 from '../assets/images/equipe/Jose-Valdimir-Filho.png'
import Member30 from '../assets/images/equipe/Milena Barros_.png'
import Member31 from '../assets/images/equipe/David Taiyu.png'
import Member32 from '../assets/images/equipe/Marcella Castilho.png'
import Member33 from '../assets/images/equipe/Juliana Bonatte.png'
import Member34 from '../assets/images/equipe/Renato de Abreu.png'
import Member35 from '../assets/images/equipe/Elza Maria de Jesus.png'
import Member36 from '../assets/images/equipe/Maria Aparecida Sobrinho Lima.png'
import Member37 from '../assets/images/equipe/Allan Benatti_.png'
import Member38 from '../assets/images/equipe/Anderson Spada_.png'
import Member39 from '../assets/images/equipe/Anderson Machado.png'
import Member40 from '../assets/images/equipe/Angelo Brandini.png'
import Member41 from '../assets/images/equipe/Du Circo.png'
import Member42 from '../assets/images/equipe/Dênis Goyos.png'
import Member43 from '../assets/images/equipe/Duico Vasconcelos.png'
import Member44 from '../assets/images/equipe/Henrique Rímoli.png'
import Member45 from '../assets/images/equipe/Juliana Gontijo - in memorian.png'
import Member46 from '../assets/images/equipe/Filipe Bregantim.png' 
import Member47 from '../assets/images/equipe/Gabi Zanola.png'
import Member48 from '../assets/images/equipe/Igor-Canova.png'
import Member49 from '../assets/images/equipe/Layla Ruiz_.png'
import Member50 from '../assets/images/equipe/Luciana Viacava_.png'
import Member51 from '../assets/images/equipe/Márcio Douglas_.png'
import Member52 from '../assets/images/equipe/Monique Franco_.png'
import Member53 from '../assets/images/equipe/Nereu Afonso_.png'
import Member54 from '../assets/images/equipe/Nilson Domingues_.png'
import Member55 from '../assets/images/equipe/Paola Musatti_.png'
import Member56 from '../assets/images/equipe/Raíssa Guimarães_.png'
import Member57 from '../assets/images/equipe/Roger Avanzi – in memorian_.png'
import Member58 from '../assets/images/equipe/Sandro Fontes_.png'
import Member59 from '../assets/images/equipe/Sueli Andrade_.png'
import Member60 from '../assets/images/equipe/Suzana Aragão_.png'
import Member61 from '../assets/images/equipe/Tereza Gontijo_.png'
import Member62 from '../assets/images/equipe/Val Pires_.png'
import Member63 from '../assets/images/equipe/Vera Abbud_.png'
import Member64 from '../assets/images/equipe/Arilson Lopes_.png'
import Member65 from '../assets/images/equipe/Douglas Souza_.png'
import Member66 from '../assets/images/equipe/Nice Vasconcelos_.png'
import Member67 from '../assets/images/equipe/Ana Flávia_.png'
import Member68 from '../assets/images/equipe/Eduardo Filho_.png'
import Member69 from '../assets/images/equipe/Fábio Caio_.png'
import Member70 from '../assets/images/equipe/Greyce Braga_.png'
import Member71 from '../assets/images/equipe/Juliana Almeida_.png'
import Member72 from '../assets/images/equipe/Luciana Pontual_.png'
import Member73 from '../assets/images/equipe/Luciano Pontes_.png'
import Member74 from '../assets/images/equipe/Marcelino Dias_.png'
import Member75 from '../assets/images/equipe/Marcelo Oliveira_.png'
import Member76 from '../assets/images/equipe/Olga Ferrario_.png'
import Member77 from '../assets/images/equipe/Thiago Gondim_.png'
import Member78 from '../assets/images/equipe/Wagner Oliveira_.png'
import Member79 from '../assets/images/equipe/Silvia Contar_.png'
import Member80 from '../assets/images/equipe/Wallace Martins_.png'

const Team: React.FC = () => {
   const navigate = useNavigate()

   return (
      <BaseLayout>
         <Body>
            <Section>
               <div>
                  <img src={TitleImage} alt="Nosso encontro" />

                  <p>
                     A associação conta com profissionais de diversas formações
                     nas cidades de São Paulo, Rio de Janeiro e Recife. Essa
                     multidisciplinaridade garante uma atuação incisiva nas
                     áreas de saúde, cultura e assistência social.
                  </p>
                  <p>
                     Em 2021, o elenco perdeu Juliana Gontijo, a palhaça Dona
                     Juca Pinduca, que enfrentava um câncer. Foram 23 anos de
                     dedicação aos Doutores da Alegria que ficam para sempre em
                     nossa memória.
                  </p>

                  <Concelho>
                     <h1>CONSELHO FISCAL - JANEIRO A DEZEMBRO DE 2021</h1>
                     <ConcelhoFlex>
                        <p>Alexandre Chiaratti do Nascimento</p>
                        <p>Carlos de Souza Valentim</p>
                        <p>Iêda Silveira de Alcântara</p>
                     </ConcelhoFlex>
                  </Concelho>
               </div>
               <ImgPalhacos src={Palhacos} alt="" />
            </Section>

            <Section>
               <div>
                  <Title>Fundador</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member2} />
                        <h2>Wellington Nogueira</h2>
                        <p>Dr. Zinho</p>
                     </Member>
                  </MembersContainer>
                  <Title>Diretoria Estatutária – Gestão 2020/21</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member1} />
                        <h2>Luis Alberto Vieira da Rocha</h2>
                        <p>Diretor presidente</p>
                     </Member>
                     <Member>
                        <img src={Member3} />
                        <h2>Daiane Carina Barbieri Ratão</h2>
                        <p>Diretora de relações institucionais</p>
                     </Member>
                     <Member>
                        <img src={Member4} />
                        <h2>Lourdes Atié</h2>
                        <p>Diretora de formação</p>
                     </Member>
                     <Member>
                        <img src={Member5} />
                        <h2>Ronaldo Aguiar</h2>
                        <p>Diretor artístico Dr. Charlito</p>
                     </Member>
                     <Member>
                        <img src={Member6} />
                        <h2>Simone Pimentel</h2>
                        <p>Diretora financeira</p>
                     </Member>
                  </MembersContainer>

                  <Title>Marketing e Mobilização de Recursos</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member7} />
                        <h2>Edilene Silva</h2>
                        <p>Analista</p>
                     </Member>
                     <Member>
                        <img src={Member8} />
                        <h2>Claudia Queliconi </h2>
                        <p>(até agosto) Analista </p>
                     </Member>
                     <Member>
                        <img src={Member9} />
                        <h2>Leticia Jardim</h2>
                        <p>Analista </p>
                     </Member>
                     <Member>
                        <img src={Member10} />
                        <h2>Thamires Santos </h2>
                        <p>(a partir de maio) Analista </p>
                     </Member>
                  </MembersContainer>

                  <Title>Comunicação</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member11} />
                        <h2>Cristina Cardoso</h2>
                        <p>Coordenadora</p>
                     </Member>
                     <Member>
                        <img src={Member12} />
                        <h2>Gabriela Caseff</h2>
                        <p>(até setembro) Produção de conteúdo</p>
                     </Member>
                     <Member>
                        <img src={Member13} />
                        <h2>Bruno Tavares </h2>
                        <p>(até maio) Analista </p>
                     </Member>
                     <Member>
                        <img src={Member14} />
                        <h2>Danilo Lima</h2>
                        <p>Analista</p>
                     </Member>
                     <Member>
                        <img src={Member15} />
                        <h2>Thais Moura </h2>
                        <p>(a partir de outubro) Analista</p>
                     </Member>
                     <Member>
                        <img src={Member16} />
                        <h2>Pollyanna Diniz</h2>
                        <p>(a partir de setembro) Produção de conteúdo</p>
                     </Member>
                  </MembersContainer>

                  <Title>Administrativo-Financeiro</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member17} />
                        <h2>Patricia Santos Souza</h2>
                        <p>Analista</p>
                     </Member>
                     <Member>
                        <img src={Member18} />
                        <h2>Regiane Bueno</h2>
                        <p>Analista</p>
                     </Member>
                     <Member>
                        <img src={Member19} />
                        <h2>Selma Soares</h2>
                        <p>Analista</p>
                     </Member>
                     <Member>
                        <img src={Member20} />
                        <h2>Thays Dias</h2>
                        <p>Analista</p>
                     </Member>
                  </MembersContainer>

                  <Title>Tecnologia da Informação</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member21} />
                        <h2>Odete Peixoto</h2>
                        <p>Coordenadora</p>
                     </Member>
                  </MembersContainer>

                  <Title>Planejamento e Jurídico</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member22} />
                        <h2>Carolina Kinoshita</h2>
                        <p>Analista de planejamento</p>
                     </Member>
                     <Member>
                        <img src={Member23} />
                        <h2>Olga Lembo</h2>
                        <p>Assistente social</p>
                     </Member>
                  </MembersContainer>

                  <Title>Escola</Title>
                  <MembersContainer>
                     <Member>
                        <img src={Member24} />
                        <h2>Heraldo Firmino</h2>
                        <p>
                           Coordenador do programa de Fformação de palhaço para
                           jovens - Dr. Severino
                        </p>
                     </Member>
                     <Member>
                        <img src={Member25} />
                        <h2>Raul Figueiredo</h2>
                        <p>Artista formador Dr. Zapata Lambada</p>
                     </Member>
                     <Member>
                        <img src={Member26} />
                        <h2>Roberta Calza</h2>
                        <p>Artista formadora Dra. Sakura</p>
                     </Member>
                     <Member>
                        <img src={Member27} />
                        <h2>Thaïs Ferrara</h2>
                        <p>Artista formadora Dra. Ferrara</p>
                     </Member>
                     <Member>
                        <img src={Member28} />
                        <h2>João Batista de Macedo</h2>
                        <p>Assessoria pedagógica</p>
                     </Member>
                     <Member>
                        <img src={Member29} />
                        <h2>José Valdimir Filho</h2>
                        <p>Assessoria pedagógica</p>
                     </Member>
                     <Member>
                        <img src={Member30} />
                        <h2>Milena Barros</h2>
                        <p>Assistente da escola</p>
                     </Member>
                  </MembersContainer>

                  <YellowContainer>
                     <Title>Unidade São Paulo</Title>
                     <MembersContainer>
                        <Member>
                           <img src={Member31} />
                           <h2>David Taiyu</h2>
                           <p>Coordenador artístico Dr. Dadúvida</p>
                        </Member>
                        <Member>
                           <img src={Member32} />
                           <h2>Marcella Castilho</h2>
                           <p>Coordenadora de produção</p>
                        </Member>
                        <Member>
                           <img src={Member33} />
                           <h2>Juliana Bonatte</h2>
                           <p>Recepcionista</p>
                        </Member>
                        <Member>
                           <img src={Member34} />
                           <h2>Renato de Abreu</h2>
                           <p>Assistente de produção</p>
                        </Member>
                        <Member>
                           <img src={Member35} />
                           <h2>Elza Maria de Jesus</h2>
                           <p>Serviços gerais</p>
                        </Member>
                        <Member>
                           <img src={Member36} />
                           <h2>Maria Aparecida Sobrinho Lima</h2>
                           <p>Serviços gerais</p>
                        </Member>
                     </MembersContainer>
                     {
                        // Trocar os nomes a partir daqui
                     }
                     <Title>Artistas</Title>
                     <MembersContainer>
                        <Member>
                           <img src={Member37} />
                           <h2>Allan Benatti</h2>
                           <p>Dr. Chabilson</p>
                        </Member>
                        <Member>
                           <img src={Member39} />
                           <h2>Anderson Machado</h2>
                           <p>Dr. Cavaco</p>
                        </Member>
                        <Member>
                           <img src={Member38} />
                           <h2>Anderson Spada</h2>
                           <p>Dr. De Dérson</p>
                        </Member>
                        <Member>
                           <img src={Member40} />
                           <h2>Angelo Brandini</h2>
                           <p>Dr. Zorinho</p>
                        </Member>
                        <Member>
                           <img src={Member41} />
                           <h2>Du Circo</h2>
                           <p>Dr. Pinheiro</p>
                        </Member>
                        <Member>
                           <img src={Member42} />
                           <h2>Dênis Goyos</h2>
                           <p>Dr. Fritz</p>
                        </Member>
                        <Member>
                           <img src={Member43} />
                           <h2>Duico Vasconcelos</h2>
                           <p>Dr. Pistolinha</p>
                        </Member>
                        <Member>
                           <img src={Member44} />
                           <h2>Henrique Rímoli</h2>
                           <p>Dr. Dus'Cuais</p>
                        </Member>
                        <Member>
                           <img src={Member45} />
                           <h2>Juliana Gontijo - in memorian</h2>
                           <p>Dra. Juca Pinduca</p>
                        </Member>
                        <Member>
                           <img src={Member46} />
                           <h2>Filipe Bregantim</h2>
                           <p>Dr. Mendonça</p>
                        </Member>
                        <Member>
                           <img src={Member47} />
                           <h2>Gabi Zanola</h2>
                           <p>Dra. Pamplona</p>
                        </Member>
                        <Member>
                           <img src={Member48} />
                           <h2>Igor Canova</h2>
                           <p>Dr. Trillo</p>
                        </Member>

                        <Member>
                           <img src={Member49} />
                           <h2>Layla Ruiz</h2>
                           <p>Dra. Pororoca</p>
                        </Member>
                        <Member>
                           <img src={Member50} />
                           <h2>Luciana Viacava</h2>
                           <p>Dra. Lola Brígida</p>
                        </Member>
                        <Member>
                           <img src={Member51} />
                           <h2>Márcio Douglas</h2>
                           <p>Dr. Mané Pereira</p>
                        </Member>
                        <Member>
                           <img src={Member52} />
                           <h2>Monique Franco</h2>
                           <p>Dra. Nina Rosa</p>
                        </Member>
                        <Member>
                           <img src={Member53} />
                           <h2>Nereu Afonso</h2>
                           <p>Dr. Zequim Bonito</p>
                        </Member>
                        <Member>
                           <img src={Member54} />
                           <h2>Nilson Domingues</h2>
                           <p>Dr. Chicô Batavô</p>
                        </Member>
                        <Member>
                           <img src={Member55} />
                           <h2>Paola Musatti</h2>
                           <p>Dra. Manela</p>
                        </Member>
                        <Member>
                           <img src={Member56} />
                           <h2>Raíssa Guimarães</h2>
                           <p>Dra. Faísca</p>
                        </Member>
                        <Member>
                           <img src={Member57} />
                           <h2>Roger Avanzi – in memorian</h2>
                           <p>Dr. Picolino</p>
                        </Member>
                        <Member>
                           <img src={Member58} />
                           <h2>Sandro Fontes</h2>
                           <p>Dr. Sandoval</p>
                        </Member>
                        <Member>
                           <img src={Member59} />
                           <h2>Sueli Andrade</h2>
                           <p>Dra. Greta Garboreta</p>
                        </Member>
                        <Member>
                           <img src={Member60} />
                           <h2>Suzana Aragão</h2>
                           <p>Dra. Bolot’s</p>
                        </Member>
                        <Member>
                           <img src={Member61} />
                           <h2>Tereza Gontijo</h2>
                           <p>Dra. Guadalupe</p>
                        </Member>
                        <Member>
                           <img src={Member62} />
                           <h2>Val Pires</h2>
                           <p>Dr. Valdisney</p>
                        </Member>
                        <Member>
                           <img src={Member63} />
                           <h2>Vera Abbud</h2>
                           <p>Dra. Emily</p>
                        </Member>
                     </MembersContainer>
                  </YellowContainer>

                  <YellowContainer>
                     <Title>Unidade Recife</Title>
                     <MembersContainer>
                        <Member>
                           <img src={Member64} />
                           <h2>Arilson Lopes</h2>
                           <p>Coordenador artístico Dr. Ado</p>
                        </Member>
                        <Member>
                           <img src={Member65} />
                           <h2>Douglas Souza</h2>
                           <p>Auxiliar administrativo</p>
                        </Member>
                        <Member>
                           <img src={Member66} />
                           <h2>Nice Vasconcelos</h2>
                           <p>Coordenadora administrativo e produção</p>
                        </Member>
                     </MembersContainer>
                     <Title>Artistas</Title>
                     <MembersContainer>
                        <Member>
                           <img src={Member67} />
                           <h2>Ana Flávia</h2>
                           <p>Dra. Nana</p>
                        </Member>
                        <Member>
                           <img src={Member68} />
                           <h2>Eduardo Filho</h2>
                           <p>Dr. Dud Grud</p>
                        </Member>
                        <Member>
                           <img src={Member69} />
                           <h2>Fábio Caio</h2>
                           <p>Dr. Eu Zébio</p>
                        </Member>
                        <Member>
                           <img src={Member70} />
                           <h2>Greyce Braga</h2>
                           <p>Dra. Monalisa</p>
                        </Member>
                        <Member>
                           <img src={Member71} />
                           <h2>Juliana Almeida</h2>
                           <p>Dra. Baju</p>
                        </Member>
                        <Member>
                           <img src={Member72} />
                           <h2>Luciana Pontual</h2>
                           <p>Dra. Svenza</p>
                        </Member>
                        <Member>
                           <img src={Member73} />
                           <h2>Luciano Pontes</h2>
                           <p>Dr. Lui</p>
                        </Member>
                        <Member>
                           <img src={Member74} />
                           <h2>Marcelino Dias</h2>
                           <p>Dr. Micolino</p>
                        </Member>
                        <Member>
                           <img src={Member75} />
                           <h2>Marcelo Oliveira</h2>
                           <p>Dr. Marmelo</p>
                        </Member>
                        <Member>
                           <img src={Member76} />
                           <h2>Olga Ferrario</h2>
                           <p>Dra. Musquita</p>
                        </Member>
                        <Member>
                           <img src={Member77} />
                           <h2>Thiago Gondim</h2>
                           <p>Dr. Gonda</p>
                        </Member>
                        <Member>
                           <img src={Member78} />
                           <h2>Wagner Oliveira</h2>
                           <p>Dr. Wago Ninguém</p>
                        </Member>
                     </MembersContainer>
                  </YellowContainer>

                  <YellowContainer>
                     <Title>Unidade Rio de Janeiro</Title>
                     <MembersContainer>
                        <Member>
                           <img src={Member79} />
                           <h2>Silvia Contar</h2>
                           <p>Coordenadora</p>
                        </Member>
                        <Member>
                           <img src={Member80} />
                           <h2>Wallace Martins</h2>
                           <p>Assistente de produção</p>
                        </Member>
                     </MembersContainer>
                  </YellowContainer>

                  <Title>Colaboradores Externos</Title>

                  <MembersContainer>
                     <MemberText>
                        <h2>Voluntários - Nota Fiscal Paulista</h2>

                        <p>Larissa Pavan</p>
                        <p>Maria Eliza</p>
                        <p>Cristina Giangiardi</p>
                        <p>Giovanna Arredondo</p>
                        <p>Tarcisio Bezerra</p>
                        <p>Jéssica Oliveira Viana</p>
                     </MemberText>

                     <MemberText>
                        <h2>
                           Formadores da Escola <br /> Cursos e aulas abertas
                        </h2>
                        <p>Emilio Terron</p>
                        <p>Morgana Masetti</p>
                        <p>Raul Figueiredo</p>
                        <p>Roberta Calza</p>
                        <p>Thaïs Ferrara</p>
                     </MemberText>

                     <MemberText>
                        <h2>
                           Programa de Formação de Palhaços <br /> para Jovens
                        </h2>

                        <p>Anelise Mayumi</p>
                        <p>Célio Colella</p>
                        <p>Dario França</p>
                        <p>Douglas Jesus</p>
                        <p>Leslye Revely</p>
                        <p>Luciano Pontes</p>
                        <p>Valdimir Filho</p>
                     </MemberText>
                     <MemberText>
                        <h2>Pontuais</h2>

                        <p>Alício Amaral</p>
                        <p>Anderson Machado</p>
                        <p>Anderson Pereira</p>
                        <p>Monique Franco</p>
                        <p>Paine Santamaria</p>
                        <p>Lives Ciclo de Palestras - 2021</p>
                     </MemberText>
                     <MemberText>
                        <h2>Assessorias / Gestão de pessoas</h2>

                        <p>Regina Leite</p>
                     </MemberText>
                     <MemberText>
                        <h2>Imprensa</h2>

                        <p>Editor: Edson Paes de Melo Filho e Lúcio </p>
                        <p>Nunes (SP)</p>
                        <p>Poema: Edna Nunes e Pollyanna Diniz </p>
                        <p>(Recife)</p>
                        <p>Movimento Essencial: Pamina S. Milewski </p>
                        <p>(RJ)</p>
                     </MemberText>
                     <MemberText>
                        <h2>Pesquisa e escola</h2>

                        <p>Morgana Masetti</p>
                     </MemberText>

                     <MemberText>
                        <h2>Tecnologia da informação </h2>

                        <p>
                           <span>Knet</span> – Carlos Sadao Eto, Jonathan
                           Ribeiro Alves e Walter Karl Meyer
                        </p>
                        <p>
                           <span>Knet</span> – Adriano Leite e Leandro Metropolo
                        </p>
                        <p>
                           <span>QS do Brasil</span> – Cayo Souza, Marcio Dias
                        </p>
                        <p>
                           <span>Focus Net</span> – Fernando Luis Rodrigues
                        </p>
                        <p>
                           <span>Interhome</span> – Marcos Campos, Marcelo
                           Campos, Nelson Lopes, Danilo Campos
                        </p>
                     </MemberText>
                  </MembersContainer>
               </div>
            </Section>
         </Body>
         <Footer>
            <FooterContainer>
               <div onClick={() => navigate('/contas')}>
                  <img src={ImgArrowLeft} alt="" />
                  <p>1+1 prestação de contas</p>
               </div>
               <div onClick={() => navigate('/parceiros')}>
                  <p>Parceiros</p>
                  <img src={ImgArrowRight} alt="" />
               </div>
            </FooterContainer>
         </Footer>
      </BaseLayout>
   )
}

export default Team

const Body = styled.div`
   margin-top: -16%;
   padding-top: 16%;
   padding-bottom: 250px;
   overflow-x: hidden;
   position: relative;
   min-height: 600px;
`

const Concelho = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 575px;
   width: 100%;

   h1 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      color: #000000;
      margin: 20px 0;
   }
`
const ConcelhoFlex = styled.div`
   display: flex;
   justify-content: space-between;
   p {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      color: #000000;
   }
`

const Section = styled.div`
   margin: auto;
   max-width: 1441px;
   display: flex;
   padding: 0 5%;
   position: relative;

   > div {
      width: 100%;
      > h1 {
         margin-top: 20px;
         font-family: 'Roboto Condensed';
         font-style: normal;
         font-weight: 700;
         font-size: 28px;
         line-height: 34px;
         color: #303030;
      }

      > img {
         width: 100%;
         max-width: 350px;
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

         > span {
            background-color: #f162a5;
            color: #fff;
         }
      }
   }
`
const Footer = styled.div`
   width: 100%;
   background-color: #ffffff;
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
   width: 20%;
   max-width: 500px;

   @media (max-width: 1050px) {
      display: none;
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

const MembersContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
   margin-top: 15px;
`

const Member = styled.div`
   margin: 10px;
   font-family: 'Roboto Condensed';
   font-style: normal;
   color: #000000;
   text-align: center;
   width: 140px;

   img {
      height: 140px;
      width: 140px;
      margin-bottom: 10px;
   }

   h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
   }

   p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
`

const MemberText = styled.div`
   margin: 10px;
   font-family: 'Roboto Condensed';
   font-style: normal;
   color: #000000;
   text-align: left;
   width: 260px;

   h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 10px;
   }

   p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
   span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
   }
`

const YellowContainer = styled.div`
   margin-top: 16px;
   width: 90%;
   padding: 40px;
   background: #ffef00;
`
