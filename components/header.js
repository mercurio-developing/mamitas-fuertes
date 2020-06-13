import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({navColor}) {
  const router = useRouter()
  let fontColor = navColor ? "#FFF" : "#3A3A3B"
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/share")
  }
  return <nav className="navbar navbar-expand-lg  header">
      <Link href="/">
      <a className="navbar-brand" >
      <img className="logo" src={!navColor ? "/assets/mamitas_fuertes_black.png" : "/assets/mamitas_fuertes_white.png"} alt="" />
      </a>
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link href="/about">          
            <a className="nav-link" style={{color: fontColor}}>About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/episodes">          
            <a className="nav-link" style={{color: fontColor}}>Episodes</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">          
            <a className="nav-link" style={{color: fontColor}}>Contact</a>
          </Link>
        </li>
        <li className="nav-item">
          <a>
            <button onClick={handleClick} className="button mt-1 ml-2 mr-3">
              Compartir tu Historia
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
}
