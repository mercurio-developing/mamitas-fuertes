import { useRouter } from 'next/router'
export default function Share() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/contact")
  }
  return <div className="container share mt-5">
    <div className="row h-75">
      <div className="col-12  my-auto">
        <h1 className="display-4 w-75 mx-auto">
          Comparte tu historia para inspirar a nuevas madres.
        </h1>
      </div>
      <div className="col-6 mx-auto text-center">
        <button onClick={handleClick} className="button">
         Contactanos
        </button>
      </div>
    </div>
  </div>
}