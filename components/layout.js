import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return <div className="row ">
    <div className="col-12">
      <Header />
          {children}
      <Footer />
    </div>
  </div>
}

