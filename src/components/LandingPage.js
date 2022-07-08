import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import data from './data'
import search from '../images/search.png'
import Modal from 'react-modal'
import head_img from '../images/head-img.jpg'




function LandingPage() {
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false)
  }

  let dataSearch = data.stateData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="landingPage">
      <div className="above">
        <h1>You can see the damage and decide!</h1>
        <h2>All our cars are Americans!</h2>
        <button>Go and Check</button>
      </div>
      <img className='head_img' src={head_img}/>

      <div>
      </div>
      <div class="search_container">
        <img src={search} />
        <input
          className="search-box"
          type="text" value={filter}
          onChange={searchText.bind(this)}
        />
      </div>
      <div class="grid">
        {
          dataSearch.map((item, index) => {
            return <Link className="link" to={item.id}>
              <div className='grid-item'>
                <img src={item.img} />
                <h1>{item.name}</h1>
                <div className='overlay'>
                <button>Show Details</button>
                </div>
              </div>
            </Link>
          })
        }
      </div>

      
      </div>
  )
}

export default LandingPage