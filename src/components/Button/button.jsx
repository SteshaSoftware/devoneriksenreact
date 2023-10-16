import React from 'react'
import "./Button.css"
import amazonimg from "../../images/amz white.png"
import BandNimg from "../../images/BandN white.png"

const Button = () => {
  return (
    <>
      <a target='_blank' href={"https://www.amazon.com/gp/product/B0CJHQ4LZN"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={amazonimg} alt="AMAZON" style={{width: '80%'}}/>
          </div>
        </button>
      </a>

      <a target='_blank' href={"https://www.barnesandnoble.com/"}>
      <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={BandNimg} alt="Barnes and Novel" style={{width: '95%'}}/>
          </div>
        </button>
      </a>
    </>
  )
}

export default Button