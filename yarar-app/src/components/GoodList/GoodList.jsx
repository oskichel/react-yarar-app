import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      {
        hosts.map(host => 
          <div className={st.card} key={host.id}>
            <img className={st.img} src={host.image_url}></img>
            <div className={st.name}>{host.name}</div>
            <span>{host.target_fg}</span>
            <span>{host.target_og}</span>
            <div>
              <span>Рейтинг: {host.ph} </span>
              <span> Отзывов: {host.ibu} </span>
              <span> Отправились: {host.ebc}</span>
            </div>
          </div>
          )
      }
    </div>
  )
}

export default GoodList;