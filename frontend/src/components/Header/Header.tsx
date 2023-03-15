import './Header.css'
import imageHeader from '../../assets/imgHeader.jpg'

function Header() {
    return(
        <div className='w-full h-1/5' style={{backgroundImage: `url(${imageHeader})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}}>
            <img src={imageHeader} alt="" />

        </div>
    )
  
  }
  
  export default Header