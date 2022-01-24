import { useEffect, useState } from "react"
import { Footer } from "../../components/footer/footer"
import { Header } from '../../components/header/header'
import { ContentCard } from "../../containers/ContentCard/ContentCard"
import data from '../../common/utils/dummy/front-example.json'
import { Sidebar } from "../../components/sidebar/sidebar"
import { MdOutlineMenu } from "react-icons/md"
import { useWindowSize } from "../../hooks/useWindowSize"

export const Home = () => {
  const [searchField, setSearchField] = useState('')
  const [menu, setMenu] = useState(false)

  const filterData = (e) => {
    if (data) {
      let filterData = e.target.value
      const filtered = data.data.filter(
        item => {
          return (
            item?.ip
              .toLowerCase()
              .includes(filterData.toLowerCase())
          );
        }
      );
      setSearchField(filtered);
    }
  }

  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 600) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }, [size]);


  return (
    <div className="home">
      <div id="#pqrs" className="home__pqrs">
        <div onClick={() => setMenu(!menu)} className="menu">
          <MdOutlineMenu />
        </div>
        <div style={{ display: `${!menu ? 'block' : 'none'}` }} className="side">
          <Sidebar />
        </div>
        <div className="container">
          <Header filterData={filterData} />
          <div className="home__content" >
            <ContentCard data={data} searchField={searchField} />
          </div>
          <Footer />
        </div>
      </div>
    </div >
  )
}
