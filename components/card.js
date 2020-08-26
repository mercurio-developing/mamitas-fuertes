export default function Card({ episode, handlePlay }) {
  return <div key={episode._id} className="card border-0 w-100 h-100" >
    <div className="row episode">
      <div className="col-6 pl-0">
        <img src="/card_thumbnail.png" className="card-img-top w-100 h-100 pl-0" alt="..." />
      </div>
      <div className="col-6 pl-0">
        <div className="card-body p-1">
          <h5 className="title mt-1">{episode.title}</h5>
          <p className="mother-name text-left m-0">with {episode.mother_name}</p>
          <span className="date">{episode.date}</span>
        </div>
        <div className="text-right mt-2">
          <a href={episode.spotify_url}>
            <img src="/spotify.png" alt="" className="spotify-button" />
          </a>

        </div>
        <div className="text-right mt-2">
          <button onClick={(e) => handlePlay(episode.spotify_player)} className="card-button w-50">
            PLAY
          </button>
        </div>
      </div>
    </div>

  </div>
}
