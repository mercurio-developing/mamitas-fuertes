import Card from "../components/card"
export default function Home() {
  return (
    <div className="row home">
      <div className="col-12">
        <div className="container jumbo-section">
          <div className="row">
            <div className="col-9 ml-auto pl-5 pt-4">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4 ">Un podcast para escuchar y compartir historias de partos positivos.</h1>
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
          <div className="col-5 mx-auto my-auto text-center">
            <p>"Hay un secreto en nuestra cultura, y no es que el parto sea doloroso. Es que las mujeres son fuertes".</p>
            <img className="flower-icon" src="/assets/flower_icon.svg" alt="" />
            <br />
            <br />
            <p>Laura Stavoe Harm</p>
          </div>
        </div>
      </div>
      <div className="col-12 episodes">
        <div className="row ">
          <div className="col-11 mx-auto mt-5">
            <h1>Ultimos Episodios</h1>
            <div className="row">
              <div className="col-2 mr-auto">
                <Card></Card>
              </div>
              <div className="col-2 mr-auto">
                <Card></Card>
              </div>
              <div className="col-2 mr-auto">
                <Card></Card>
              </div>
              <div className="col-2 mr-auto">
                <Card></Card>
              </div>
              <div className="col-2 mr-auto">
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 about ">
        <div className="container">
          <div className="row ">
            <div className="col-5">
              <img className="becca img-fluid" src="/assets/becca.jpg" alt="" />
            </div>
            <div className="col-7 my-auto">
              <div className="container">
                <h3 >Mamás Fuertes Historias de Partos Podcast esta organizada por Rebecca Winterfield. Una madre de dos hijos, apasionada por empoderar a las mujeres y ayudarlas a parir sin miedo.</h3>
                <button className="button mt-4">
                  Mas informacion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
