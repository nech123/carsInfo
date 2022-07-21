import { Header } from '../../Header'
import {Container, SpanOptimal, AudioBMW, ExtraInfo, ExtraInfoTwo,IconGMax, IconDic,IconCity, IconRod} from './styles'
import Divo from '../../../assets/picture/bugatti/divo.png'


 export function BugattiDivo(){
   return(
     <>
     <Header/>
       <Container>
         <div className="imgM4">
            <img src={Divo} alt="Bugatti Divo 2019"/>
         </div>

         <div className="rowCar">
          <h1> Bugatti Divo</h1>
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
                    <td>2019</td>
                  </tr>

                  <tr>
                    <td>Valor</td>
                    <td>R$: 40.653.000</td>
                  </tr>

                  <tr>
                    <td>Perda de Valor</td>
                    <td>-7,5%</td>
                  </tr>

                  <tr>
                    <td>Combustível</td>
                    <td>Gasolina</td>
                  </tr>

                  <tr>
                    <td>IPVA</td>
                    <td>R$: 1.625.400</td>
                  </tr>

                  <tr>
                    <td>Garantia</td>
                    <td>1 Anos</td>
                  </tr>

                  <tr>
                    <td>Porte</td>
                    <td>Grande</td>
                  </tr>

                  <tr>
                    <td>Lugares</td>
                    <td>2</td>
                  </tr>

                  <br></br>
                  <br></br>


                  <tr>
                    <td>Aspiração</td>
                    <td>Turbocompressor</td>
                  </tr>

                  <tr>
                    <td>Alimentação</td>
                    <td>Injeção Multiponto</td>
                  </tr>

                  <tr>
                    <td>Torque</td>
                    <td>163,3 Kgfm a 2000 rpm</td>
                  </tr>

                  <tr>
                    <td>Potência</td>
                    <td>1500 cv a 6700rpm</td>
                  </tr>

                  <tr>
                    <td>Tração</td>
                    <td>Integral sob demanda</td>
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
          <h1 className='stupidh1'>380 km/h</h1>
        </div>

        <div className="velo0100">
          <h1>Atinge 100 km/h</h1>
          <h1 className='stupidh1'>2.4 seg</h1>
        </div>

        <div className="veloStress">
          <h1>Peso</h1>
          <h1 className='stupidh1'>1960 kg</h1>
        </div>

        <div className="veloDeep">
          <h1>Tanque</h1>
          <h1 className='stupidh1'>100 Litros</h1>
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
          <h1>6700 rpm</h1>
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
          <h1>3,8 km/l</h1>
          </div>
        </div>


      

        <div className='direction'>
        
        <div className="gx">
          <IconRod/>
          </div>

          <div className='gxtitle'>
          <h1>Consumo na Rodovia</h1>
          <h1>5,9 km/l</h1>
          </div></div>
          </div>
    
        
       </ExtraInfoTwo>
     </>
   )
 }