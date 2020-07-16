import { useRouter } from 'next/router'
import data from "../../../data"
const Episode = () => {
  const router = useRouter()
  console.log(router)
  const episode = data.filter(episode => episode._id === router.query.id)[0]
  console.log(episode)
  return <div className="container mt-5 mb-5 episode">
    {episode && <div className="row">
      <div className="col-12">
        <div className="row">
        <div className="col-12 ">
        <img src={`/${episode.thumbnail}`} alt="" className="img-fluid" />
        </div>
         
        </div>
        <div className="row mt-4">
          <div className="col-6 my-auto">
            <h1 className="display-4 my-auto">{episode.title}</h1>
          </div>
          <div className="col-6 text-right ">
          <a href="https://open.spotify.com/episode/2cI3OeQ7jiOlow308YPj1L">
          <img src="/spotify.jpg" alt="" className="thumbnail h-75 pt-4" />

          </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <iframe src={episode.spotify_url} className="w-100" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4 className="mother-name">with {episode.mother_name}</h4>
            <h4 className="date">{episode.date}</h4>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p>{episode.description}</p>
          </div>
        </div>
      </div>
    </div>}

  </div>
}

export default Episode