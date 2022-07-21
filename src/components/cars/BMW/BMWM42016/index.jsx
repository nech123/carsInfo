import {Header} from '../../../Header/index'
import {Container, SpanOptimal, AudioBMW, ExtraInfo, ExtraInfoTwo,IconGMax, IconDic,IconCity, IconRod} from './styles'
import BMWM4 from '../../../../assets/picture/BMW/firstIMg.jpg'
import BMWM4audio from '../../../../assets/audio/BMWM4.mp3'


 export function M42016(){
   return(
     <>
     <Header/>


       <Container>

         <div className="imgM4">
            <img src={BMWM4} alt="BMW M4 2016"/>
         </div>

         <div className="rowCar">
          <h1>BMW M4 3.0 Turbo</h1>
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
                    <td>2016</td>
                  </tr>

                  <tr>
                    <td>Valor</td>
                    <td>R$: 372.745</td>
                  </tr>

                  <tr>
                    <td>Perda de Valor</td>
                    <td>-24,03%</td>
                  </tr>

                  <tr>
                    <td>Combustível</td>
                    <td>Gasolina</td>
                  </tr>

                  <tr>
                    <td>IPVA</td>
                    <td>R$: 14.910</td>
                  </tr>

                  <tr>
                    <td>Garantia</td>
                    <td>2 Anos</td>
                  </tr>

                  <tr>
                    <td>Porte</td>
                    <td>Médio</td>
                  </tr>

                  <tr>
                    <td>Lugares</td>
                    <td>4</td>
                  </tr>

                  <br></br>
                  <br></br>


                  <tr>
                    <td>Aspiração</td>
                    <td>Turbocompressor</td>
                  </tr>

                  <tr>
                    <td>Alimentação</td>
                    <td>Injeção Direta</td>
                  </tr>

                  <tr>
                    <td>Torque</td>
                    <td>56,1 Kgfm a 1850 rpm</td>
                  </tr>

                  <tr>
                    <td>Potência</td>
                    <td>431 cv a 5500rpm</td>
                  </tr>

                  <tr>
                    <td>Tração</td>
                    <td>Traseira</td>
                  </tr>

                </tbody>
            
          </table>
         </div>
       </Container>


       <AudioBMW>
        <div className="audioBMW">
          <span>Ronco do motor</span>
          <audio controls> 
            <source src={BMWM4audio} type="audio/mp3"/>
          </audio>
        </div>
       </AudioBMW>
      
       <SpanOptimal >
         

        <div className="veloMax">
          <h1>Velocidade Maxima</h1>
          <h1 className='stupidh1'>280 km/h</h1>
        </div>

        <div className="velo0100">
          <h1>Atinge 100 km/h</h1>
          <h1 className='stupidh1'>4.1 seg</h1>
        </div>

        <div className="veloStress">
          <h1>Peso</h1>
          <h1 className='stupidh1'>1572 kg</h1>
        </div>

        <div className="veloDeep">
          <h1>Tanque</h1>
          <h1 className='stupidh1'>60 Litros</h1>
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
          <h1>7500 rpm</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconDic/>
          </div>

          <div className='gxtitle'>
          <h1>Tipo de Direção</h1>
          <h1>Eletro-hidráulica</h1>
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
          <h1>7,6 km/l</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconRod/>
          </div>

          <div className='gxtitle'>
          <h1>Consumo na Rodovia</h1>
          <h1>10,6 km/l</h1>
          </div></div>
          </div>
    
        
       </ExtraInfoTwo>
     </>
   )
 }