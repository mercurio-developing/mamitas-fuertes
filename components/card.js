export default function Card({episode,onClick}) {
  return <div key={episode._id} className="card border-0 w-100" onClick={(e)=>onClick(e,`/episode/${episode._id}`,episode)}>
    <img src="/static/assets/episode_place_holder.jpg" className="card-img-top" alt="..." />
    <div className="card-body p-1">
      <span className="date">{episode.date}</span>
      <h5 className="title mt-1">{episode.title}</h5>
      <p className="footer text-left">{episode.mother_name}</p>
    </div>
  </div>
}
