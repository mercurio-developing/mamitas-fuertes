import Footer from "./footer"
import Header from "./header"
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  let isDefaultBack;
  if(router.pathname === "/" || router.pathname === "/episodes" || router.pathname.includes("/episode/"))
    isDefaultBack = true
  return <div className="row layout" style={{backgroundColor:isDefaultBack ? "#FFF" : "#71ABC4"}}>
    <div className="col-12 h-100">
      <Header navColor={!isDefaultBack}/>
          {children}
      <Footer isDefaultBack={isDefaultBack}/>
    </div>
  </div>
}

