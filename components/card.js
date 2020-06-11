export default function Card() {
  return <div className="card border-0" style={{ width: "16rem" }}>
    <img src="/assets/episode_place_holder.jpg" className="card-img-top" alt="..." />
    <div className="card-body p-1">
      <span className="date">5/18/2020</span>
      <h5 className="title mt-2">Matthew</h5>
      <span className="footer ">By Mariana Parto</span>
    </div>
  </div>
}
