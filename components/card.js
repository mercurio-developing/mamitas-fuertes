export default function Card({ episode, handlePlay }) {
  return <div key={episode._id} className="card border-0 w-100 h-100" >
    <div className="row episode">
      <div className="col-12 col-sm-6 col-md-6 pl-0">
        <img src="/card_thumbnail.png" className="card-img-top w-100 h-100 pl-0" alt="..." />
      </div>
      <div className="col-12 col-sm-6 col-md-6 pl-1 pl-sm-1 pl-md-0 pl-lg-0">
        <div className="card-body h-50 p-1">
          <h5 className="title mt-1">{episode.title}</h5>
          <p className="mother-name text-left m-0">with {episode.mother_name}</p>
          <span className="date">{episode.date}</span>
        </div>
        <div className="h-25 my-auto d-none d-sm-block">
          <div className="text-right text-bottom">
            <a style={{
              position: "absolute", bottom: "40px", right: "5px"
            }} href={episode.spotify_url}>
              <img src="/spotify.png" alt="" className="spotify-button" />
            </a>
          </div>
          <div className="text-right mt-2 mb-2">
            <button onClick={(e) => handlePlay(episode.spotify_player)} className="card-button" style={{
              position: "absolute", bottom: "5px", right: "5px"
            }}>
              PLAY
          </button>
          </div>
        </div>

      </div>
      <div className=" w-100 my-auto d-inline d-sm-none pl-3 pr-3 pl-sm-0 pr-sm-0 pb-3 pt-2">
        <div className="d-inline float-left ml-3 text-bottom">
          <a>
            <img src="/spotify.png" alt="" className="spotify-button" />
          </a>
        </div>
        <div className=" d-inline  float-right mr-3">
          <button onClick={(e) => handlePlay(episode.spotify_player)} className="card-button" >
            PLAY
          </button>
        </div>
      </div>
    </div>

  </div>
}
