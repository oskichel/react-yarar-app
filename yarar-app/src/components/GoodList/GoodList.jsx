import React, { useState, useEffect } from 'react';
import Slider from '../Slider/Slider'
import axios from 'axios';
import star from '../../assets/icons/star.png';
import kamchatka from '../../assets/kamchatka.jpg'
import st from './GoodList.module.css';

const GoodList = () => {

  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=8')
    .then(res => {
      setHosts(res.data)
      //console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div>
      <Slider>
        {
          hosts.map(host => 
              <div className={st.card} key={host.id}>
                <img className={st.img} src={kamchatka}></img>
                <div className={st.name}>{host.name}</div>
                <span className={st.details}>{host.target_fg}</span>
                <span className={st.details}>{host.target_og}</span>
                <div className={st.line}>
                  <span><img src={star}></img> {host.ph} </span>
                  <span> Отзывов: {host.ibu} </span>
                  <span> Отправились: {host.ebc}</span>
                </div>
              </div>
            )
        }
      </Slider>
      
    </div>
  )
}

export default GoodList;