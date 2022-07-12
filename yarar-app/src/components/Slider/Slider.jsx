import st from './Slider.module.css';
import right from '../../assets/icons/right.png';
import left from '../../assets/icons/left.png';
import { useState } from 'react';


const Slider = ({ children }) => {
  const pageStep = 350;
  const pages = 5;
  const [offset, setOffset] = useState(0);
  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageStep;

      console.log(newOffset);
      return Math.min(newOffset, 0);
    })
  }

  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageStep;
      const maxOffset = -(pageStep * pages)

      console.log(newOffset);
      return Math.max(newOffset, maxOffset);
    })
  }

  return (
    <div className={st.container}>
      <img className={st.left} src={left} onClick={handleLeft}></img>
      <div className={st.window}>
        <div 
          className={st.allpages} 
          style={{
            transform: `translateX(${offset}px)`,
        }}
        >
          {children}
        </div>
      </div>
      <img className={st.right} src={right} onClick={handleRight}></img>
    </div>
  )
}

export default Slider;