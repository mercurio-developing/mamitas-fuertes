import data from "../data"
import Card from "../components/card"
import { useRouter } from "next/router"
export default function Episodes() {
  const router = useRouter()
  const handleClick = (e, href, episode) => {
    console.log(href, episode)
    e.preventDefault()
    router.push({ pathname: `${href}` })
  }
  return <div className="container episodes mt-5 mb-5">
   <h2 className="d-none d-sm-none d-md-none d-lg-block display-4 ">
   Episodes</h2>
  <h1 className="d-md-block d-lg-none "> Episodes</h1>
    <div className="row">
      <div className="col-12">
        <div className="row">
          {data.map(episode => <div className="col-4 mr-auto mt-4">
            <Card key={episode._id} episode={episode} onClick={handleClick}></Card>
          </div>)}
        </div>
      </div>
    </div>
  </div>
}