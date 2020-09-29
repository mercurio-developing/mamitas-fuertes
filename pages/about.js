import { useRouter } from 'next/router'
export default function About() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/episodes")
  }
  return <div className="container about mt-5">
    <div className="row h-100">
      <div className="col-12 my-auto">
        <h2 className="d-none d-sm-none d-md-none d-lg-block display-4 ">
          En este podcast compartimos historias de partos positivos, donde las mujeres comparten sus experiencias, miedos, fortalezas y alegrias.</h2>
        <h1 className="d-md-block d-lg-none "> Este podcast es para compartir historias de partos positivos, las mujeres somos fuertes y capaces de parir nuestros hijos.</h1>
      </div>
      <div className="col-12">
        <h4>En cada episodio una mujer comparte su historia. Escuchar historias de partos ayuda a la nueva familia a prepararse para el embarazo, nacimiento y post-parto.</h4>
        <div className="row">
          <div className="col-6 mx-auto mt-5 mt-sm-5 text-center">
            <button onClick={handleClick} className="button ">
              Escuchar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}