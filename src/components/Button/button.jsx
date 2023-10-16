import React from 'react'

import "./Button.css"

const Button = () => {
  return (
    <>
      <a target='_blank' href={"https://www.amazon.com/gp/product/B0CJHQ4LZN"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          Amazon
        </button>
      </a>

      <a target='_blank' href={"https://www.barnesandnoble.com/"}>
        <button class="buttn" style={{ marginTop: 25, marginLeft: 15 }}>
          Barnes and Noble
        </button>
      </a>
    </>
  )
}

export default Button