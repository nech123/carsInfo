import { IconBMWHome, IconBugattiHome, IconFiatHome, IconPorscheHome } from './styles'
import {Container} from '../Homepage/styles'
import { Link } from 'react-router-dom'

export function HomePage(){
  return(
    <Container>
      <div className='nameCar'>
        <p>Qual marca ?</p>
        <div className='icons'>
        <Link to='/bmw'><IconBMWHome/></Link>
        <Link to='/bugatti'><IconBugattiHome/></Link>
        <Link to='/fiat'><IconFiatHome/></Link>
        <Link to='/porsche'><IconPorscheHome/></Link>
      </div>
      </div>
    
    </Container>
  )
}