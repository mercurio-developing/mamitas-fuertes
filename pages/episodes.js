import React, { useState } from "react";
import data from "../data"
import Card from "../components/card"
import { useRouter } from "next/router"
export default function Episodes() {
  const [episodeUrl, setEpisodeUrl] = useState(data[0].spotify_player)
  const router = useRouter()
  const handlePlay = (url) => {
    setEpisodeUrl(url)
  }
  return <div className="container episodes mt-5 mb-5">
    <h2 className="d-none d-sm-none d-md-none d-lg-block display-5 ml-4">
      Episodios</h2>
    <h2 className="d-md-block d-lg-none "> Episodios</h2>
    <div className="row mt-2 h-100">
      {data.map(episode => <div key={episode._id} className="card-div col-10 col-sm-12 col-md-11  col-lg-5 pt-4">
        <Card handlePlay={handlePlay} episode={episode}></Card>
      </div>)}
    </div>
    <div className="row h-25">
      <div className="col-12 h-25">
        <iframe allow="autoplay" src={episodeUrl} className=" w-100 player fixed-bottom" frameBorder="0" scrolling="no"></iframe>
      </div>
    </div>

  </div>
}
