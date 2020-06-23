import Link from 'next/link'

export default function Footer({ isDefaultBack }) {
  return <footer className="footer mb-2">
    {isDefaultBack && <div className="container">
      <div className="row footer-links">
        <div className="col-4 col-sm-5 text-right">
          <Link href="/episodes">
            <a className="nav-link " >Episodes</a>
          </Link>
        </div>
        <div className="col-4 col-sm-2 text-center">
          <Link href="/about">
            <a className="nav-link " >About</a>
          </Link>
        </div>
        <div className="col-4 col-sm-5 text-left">
          <Link href="/contact">
            <a className="nav-link " >Contact</a>
          </Link>
        </div>
      </div>
    </div>}
    <div className="row mt-2 pl-4">
      <div className="col-12">
        <span style={{ color: !isDefaultBack ? "#FFF" : "#3A3A3B" }}
        >© 2020 Mamitas Fuertes</span>
      </div>
    </div>
  </footer>
}
