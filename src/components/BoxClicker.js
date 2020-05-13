import React, { useState } from 'react';
import styles from './BoxClicker.module.css';

function BoxClicker({items})  {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(i) {
        const { callback } = items[i]
        if(typeof callback == 'function') {
            callback();
        }

        setActiveIndex(i);
    }
    
    return(
      <div>  
        <div className={styles.headers}>
            {items.map((item, i) => {
                return (
                    <div 
                     key={i}
                      className
                    //  is i index the active index
                       ={styles.header + (i == activeIndex ? 
                    // then add style to the index    
                         ' '+ styles.clicked 
                    // otherwise we wont do any changes
                         : '')}
                         onClick={() => handleClick(i)}>
                        {item.label}                        
                    </div>
                    )
                })}
        </div>
            <div 
              className={styles.content}>
                {items[activeIndex].content}
            </div>
       
      </div>
    );
};

export default BoxClicker;