import { Link } from "react-router-dom"
import { Container, Title, IconCar, Menu, IconBMW, IconBugatti, IconFiat, IconPorsche } from "./styles"



export function Header(){
  return(
    <>
      <Container>
        <Title>
          <h1>Cars</h1>
          <IconCar/>
        </Title>

        <Menu>
          <ul>
            <Link to="/"><li>Inicio</li></Link>

            <div class="dropdown">
            <button class="dropbtn">Cars</button>
            <div class="dropdown-content">
              
                <div className="full">
            <Link to="/bmw" className="full">BMW<IconBMW/></Link></div>
            <div className="full">
            <Link to="/bugatti" className="full">Bugatti<IconBugatti/></Link>
            </div>
            
            <div className="full">
            <Link to="/fiat" className="full">Fiat<IconFiat/></Link>
            </div>
            <div className="full">
            <Link to="/porsche" className="full">Porsche<IconPorsche/></Link>
            </div>
            </div>
            </div>

            <li>Sobre</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </Menu>
      </Container>
    </>
  )
}