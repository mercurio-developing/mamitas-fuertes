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
    <h2 className="d-none d-sm-none d-md-none d-lg-block display-4 ">
      Episodes</h2>
    <h1 className="d-md-block d-lg-none "> Episodes</h1>
    <div className="row">
      <div className="col-12">
        <div className="row mt-5" style={{ height: "200px" }}>
          {data.map(episode => <div className=" col-sm-12 col-md-12  col-lg-5 mr-auto mt-4">
            <Card handlePlay={handlePlay} episode={episode}></Card>
          </div>)}
        </div>
      </div>
    </div>
    <div>
      <iframe allow="autoplay" src={episodeUrl} className=" w-100 fixed-bottom" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
}
