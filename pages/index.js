import Card from "../components/card"
import { useRouter } from "next/router"
import { episodesReducer,initialEpisodes} from "../redux/episodes"

const Home = (props) =>{
  console.log(props)
  const router = useRouter()
  const [episodes] = React.useReducer(episodesReducer, initialEpisodes);
  const handleClick = (e,href,episode) => {
    console.log(href,episode)
    e.preventDefault()
    router.push({pathname:`${href}`})
  }
  return (
    <div className="row home">
      <div className="col-12">
        <div className="container jumbo-section">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 ml-auto pl-5 pt-4">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="d-none d-sm-none d-md-none d-lg-block display-4 ">Un podcast para escuchar y compartir historias de partos positivos.</h1>
                  <h2 className="d-md-block d-lg-none ">Un podcast para escuchar y compartir historias de partos positivos.</h2>
                  <button className="button mt-4">
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
            <img className="flower-icon" src="/assets/flower_icon.svg" alt="" />
            <br />
            <br />
            <p>Laura Stavoe Harm</p>
          </div>
        </div>
      </div>
      <div className="col-12 episodes mb-5">
        <div className="row ">
          <div className="col-11 mx-auto mt-5">
            <h1>Ultimos Episodios</h1>
            <div className="row">
              {episodes.map(episode =>  <div key={episode._id } className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 mr-auto">
                <Card key={episode._id} episode={episode} onClick={handleClick}></Card>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 home-about mb-5  mt-0 mt-sm-5 ">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-5 my-auto d-none d-sm-block d-md-block d-lg-block">
              <img className="becca img-fluid" src="/assets/becca.jpg" alt="" />
            </div>
            <div className="col-11 col-sm-7 col-md-7 col-lg-7  my-auto">
              <div className="container">
                <h3 >Mamás Fuertes Historias de Partos Podcast esta organizada por Rebecca Winterfield. Una madre de dos hijos, apasionada por empoderar a las mujeres y ayudarlas a parir sin miedo.</h3>
                <div className="row">
                <button className="button mx-auto mt-4">
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