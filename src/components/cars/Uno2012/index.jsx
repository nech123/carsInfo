import { Header } from '../../Header'
import {Container, SpanOptimal, AudioBMW,  ExtraInfo, ExtraInfoTwo,IconGMax, IconDic,IconCity, IconRod} from './styles'
import Uno from '../../../assets/picture/fiat/uno2012.jpg'


 export function Uno2012(){
   return(
     <>
     <Header/>
       <Container>
         <div className="imgM4">
            <img src={Uno} alt="Fiat Uno 2012"/>
         </div>

         <div className="rowCar">
          <h1> Fiat Uno 1.0 Economy</h1>
          <table>
            <thead>
              <tr colspan='2'>
                <th>
                  Configuração
                  </th>
                </tr>
                </thead>
                <tbody className='tdInit'>
                  <tr>
                    <td>Ano</td>
                    <td>2012</td>
                  </tr>

                  <tr>
                    <td>Valor</td>
                    <td>R$: 24.940</td>
                  </tr>

                  <tr>
                    <td>Perda de Valor</td>
                    <td>-27,44%</td>
                  </tr>

                  <tr>
                    <td>Combustível</td>
                    <td>Flex(Álcool/Gasolina)</td>
                  </tr>

                  <tr>
                    <td>IPVA</td>
                    <td>R$: 998,00</td>
                  </tr>

                  <tr>
                    <td>Garantia</td>
                    <td>1 Anos</td>
                  </tr>

                  <tr>
                    <td>Porte</td>
                    <td>Compacto</td>
                  </tr>

                  <tr>
                    <td>Lugares</td>
                    <td>5</td>
                  </tr>

                  <br></br>
                  <br></br>


                  <tr>
                    <td>Aspiração</td>
                    <td>Natural</td>
                  </tr>

                  <tr>
                    <td>Alimentação</td>
                    <td>Injeção Multiponto</td>
                  </tr>

                  <tr>
                    <td>Torque</td>
                    <td>9,2 Kgfm a 2500 rpm</td>
                  </tr>

                  <tr>
                    <td>Potência</td>
                    <td>66 cv(A) 65 cv(G) a 6000</td>
                  </tr>

                  <tr>
                    <td>Tração</td>
                    <td>Dianteira</td>
                  </tr>

                </tbody>
            
          </table>
         </div>
       </Container>

       <AudioBMW>
        <div className="audioBMW">
          <span>Ronco do motor</span>
          <audio controls> 
            <source  type="audio/mp3"/>
          </audio>
        </div>
       </AudioBMW>
      
       <SpanOptimal >
         

        <div className="veloMax">
          <h1>Velocidade Maxima</h1>
          <h1 className='stupidh1'>156 km/h</h1>
        </div>

        <div className="velo0100">
          <h1>Atinge 100 km/h</h1>
          <h1 className='stupidh1'>14.2 seg</h1>
        </div>

        <div className="veloStress">
          <h1>Peso</h1>
          <h1 className='stupidh1'>830 kg</h1>
        </div>

        <div className="veloDeep">
          <h1>Tanque</h1>
          <h1 className='stupidh1'>50 Litros</h1>
        </div>
       </SpanOptimal>

       <ExtraInfo>
        <h1>Outras Informações</h1>
        <div className="controller">

        <div className='giroMax'>
          <div className="gx">
          <IconGMax/>
          </div>

          <div className='gxtitle'>
          <h1>Rotação máxima</h1>
          <h1>6000 rpm</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconDic/>
          </div>

          <div className='gxtitle'>
          <h1>Tipo de Direção</h1>
          <h1>Não Assistida</h1>
          </div></div>
          </div>
    
        
       </ExtraInfo>


       <ExtraInfoTwo>
        
        <div className="controller">

        <div className='giroMax'>
          <div className="gx">
          <IconCity/>
          </div>

          <div className='gxtitle'>
          <h1>Consumo na Cidade</h1>
          <h1>12,4 km/l</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconRod/>
          </div>

          <div className='gxtitle'>
          <h1>Consumo na Rodovia</h1>
          <h1>15,6 km/l</h1>
          </div></div>
          </div>
    
        
       </ExtraInfoTwo>

     </>
   )
 }