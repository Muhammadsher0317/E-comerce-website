import React from 'react'
import { BsInstagram } from 'react-icons/bs'

function Checkup() {
  return (<>
  

   <div className="subscribe_toward">
        <div className="container">
          <div className="subscripe_left">
            <h1>Subscribe Us now</h1>
            <p>
              Get latest news, updates and deals directly mailed to your inbox.
            </p>
          </div>
          <div className="subscripe_right">
            <input type="text" placeholder="Your email address here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

       <div className="insta_imgs">
              <div className="container">
                <div className="imgbox_title">Shop our insta</div>
                <div className="img_box_cards">
                  <div className="img_box">
                    <img src="/imgs/iphonephone.svg" alt="" />
                    <div className="img_boxicons">
                      <BsInstagram />
                    </div>
                  </div>
                  <div className="img_box">
                    <img src="/imgs/iphonephone.svg" alt="" />
                    <div className="img_boxicons">
                      <BsInstagram />
                    </div>
                  </div>
                  <div className="img_box">
                    <img src="/imgs/iphonephone.svg" alt="" />
                    <div className="img_boxicons">
                      <BsInstagram />
                    </div>
                  </div>
                  <div className="img_box">
                    <img src="/imgs/iphonephone.svg" alt="" />
                    <div className="img_boxicons">
                      <BsInstagram />
                    </div>
                  </div>
                  <div className="img_box">
                    <img src="/imgs/iphonephone.svg" alt="" />
                    <div className="img_boxicons">
                      <BsInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </>
  )
}

export default Checkup
