import { useRouter } from "next/router"

const Home = (props) => {
  console.log(props)
  const router = useRouter()
  const handleClick = (e, href, episode) => {
    console.log(href, episode)
    e.preventDefault()
    router.push({ pathname: `${href}` })
  }
  return (
    <div className="row home">
      <div className="col-12">
        <div className="container jumbo-section">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 ml-auto pl-5 pt-4">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="d-none d-sm-none d-md-none d-lg-block display-4 ">Un podcast para escuchar y compartir historias de partos que empoderan.</h1>
                  <h2 className="d-md-block d-lg-none ">Un podcast para escuchar y compartir historias de partos que empoderan.</h2>
                  <button onClick={e => handleClick(e, "/episodes", {})} className="button mt-4">
                    Escuchar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row quote">
          <div className="col-10 col-sm-8 col-md-9 col-lg-6 col-xl-5 mx-auto my-auto text-center">
            <p className="mt-4">"Hay un secreto en nuestra cultura, y no es que el parto sea doloroso. Es que las mujeres son fuertes".</p>
            <img className="flower-icon" src="/flower_icon.svg" alt="" />
            <br />
            <br />
            <p>Laura Stavoe Harm</p>
          </div>
        </div>
      </div>
      <div className="col-12 home-about mb-5  mt-0 mt-sm-5 ">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-5 my-auto d-none d-sm-block d-md-block d-lg-block">
              <img className="becca img-fluid" src="/becca.jpg" alt="" />
            </div>
            <div className="col-12 col-sm-7 col-md-7 col-lg-7  my-auto">
              <div className="container mt-4 mt-sm-4 mt-md-0">
                <h3>Mamitas Fuertes Historias de Partos Podcast esta organizada por mi Rebecca Winterfield. Soy madre de dos hijos, quiero compartir historias de partos que empoderan con las nuevas familias.</h3>
                <div className="row">
                  <button onClick={e => handleClick(e, "/about", {})} className="button mx-auto mt-4">
                    Mas informacion
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;