import { Header } from '../../../Header/index'
import {Container, SpanOptimal, AudioBMW, ExtraInfo, ExtraInfoTwo,IconGMax, IconDic,IconCity, IconRod} from './styles'
import G3rs from '../../../../assets/picture/porshe/g3rs.jpg'
import G3rsAudio from '../../../../assets/audio/gt3rs.mp3'


 export function G3RS2022(){
   return(
     <>
     <Header/>
       <Container>
         <div className="imgM4">
            <img src={G3rs} alt="Fiat Uno 2012"/>
         </div>

         <div className="rowCar">
          <h1> Porshe 911 GT3 RS</h1>
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
                    <td>2022</td>
                  </tr>

                  <tr>
                    <td>Valor</td>
                    <td>R$: 1.208.900</td>
                  </tr>


                  <tr>
                    <td>Combustível</td>
                    <td>Gasolina</td>
                  </tr>

                  <tr>
                    <td>IPVA</td>
                    <td>R$: 48.356</td>
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
                    <td>2</td>
                  </tr>

                  <br></br>
                  <br></br>


                  <tr>
                    <td>Aspiração</td>
                    <td>Natural</td>
                  </tr>

                  <tr>
                    <td>Alimentação</td>
                    <td>Injeção Direta</td>
                  </tr>

                  <tr>
                    <td>Torque</td>
                    <td>47,9 Kgfm a 6100 rpm</td>
                  </tr>

                  <tr>
                    <td>Potência</td>
                    <td>510 cv a 8400 rpm</td>
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
            <source src={G3rsAudio} type="audio/mp3"/>
          </audio>
        </div>
       </AudioBMW>
      
       <SpanOptimal >
         

        <div className="veloMax">
          <h1>Velocidade Maxima</h1>
          <h1 className='stupidh1'>318 km/h</h1>
        </div>

        <div className="velo0100">
          <h1>Atinge 100 km/h</h1>
          <h1 className='stupidh1'>3.4 seg</h1>
        </div>

        <div className="veloStress">
          <h1>Peso</h1>
          <h1 className='stupidh1'>1435 kg</h1>
        </div>

        <div className="veloDeep">
          <h1>Tanque</h1>
          <h1 className='stupidh1'>64 Litros</h1>
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
          <h1>9000 rpm</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconDic/>
          </div>

          <div className='gxtitle'>
          <h1>Tipo de Direção</h1>
          <h1>Elétrica</h1>
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
          <h1>5.9 km/l</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconRod/>
          </div>

          <div className='gxtitle'>
          <h1>Consumo na Rodovia</h1>
          <h1>7.2 km/l</h1>
          </div></div>
          </div>
    
        
       </ExtraInfoTwo>
     </>
   )
 }