import { useRouter } from 'next/router'
export default function Share() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/contact")
  }
  return <div className="container share mt-5">
    <div className="row h-50">
      <div className="col-12 mx-auto  my-auto">
        <h1 className="display-4 w-100 text-center mx-auto mt-5">
          Comparte tu historia para inspirar a nuevas madres.
        </h1>
        <div className="col-6 mx-auto mt-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-0 text-center">
        <button onClick={handleClick} className="button">
         Contactanos
        </button>
      </div>
      </div>
     
    </div>
  </div>
}