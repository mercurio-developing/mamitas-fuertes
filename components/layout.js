import Footer from "./footer"
import Header from "./header"
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  let isDefaultBack;
  if(router.pathname === "/" || router.pathname === "/episodes")
    isDefaultBack = true
  return <div className="row h-100" style={{backgroundColor:isDefaultBack ? "#FFF" : "#71ABC4"}}>
    <div className="col-12 h-100">
      <Header navColor={!isDefaultBack}/>
          {children}
      <Footer isDefaultBack={isDefaultBack}/>
    </div>
  </div>
}

