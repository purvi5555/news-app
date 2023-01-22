import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="mt-10">
      <h1 style={{textAlign:'center'}}>About Us</h1>
      <div className="container"> 
      <p className="mt-5">
      The comprehensive news portal covers all the latest developments on a real-time basis in the fields of politics, sports, business, lifestyle, entertainment and even local city issues, offering you a complete perspective of your world. Analysis from expert and celebrity columnists give you unique insight into developments, helping you stay a step ahead. The website and its social handles also feature unique content – such as ‘Aur Batao’ a popular celebrity talk show. Hindustantimes.com was ranked amongst the top 10 international news sites by Forbes in 2007. Hindustantimes.com sees 64 million unique visitors and over 400 million pages viewed per month.
      </p>
      </div>
      <div class="responsive-container-block outer-container container">
        <div class="responsive-container-block inner-container">
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
            <p class="text-blk heading-text">Meet our team</p>
            <p class="text-blk sub-heading-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              et sagittis, vestibulum risus lacus sit.&nbsp;
            </p>
          </div>
          <div class="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
              <div class="card">
                <img
                  class="card-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"
                />
                <p class="text-blk name">Gustavo Workman</p>
                <p class="text-blk position">Editor in Chief</p>
                <p class=" position">
                Gustavo Workman is the Editor-In-Chief of Hindustan Times.
                  He was previously editor of Mint, of which he was one of the
                  founding editors in 2007, and which he edited between 2010 and
                  2020.
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
              <div class="card">
                <img
                  class="card-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"
                />
                <p class="text-blk name">Gustavo Workman</p>
                <p class="text-blk position">Chief Content Officer</p>
                <p class="position">
                  A 20-year industry veteran, Gustavo Workman, began his career as
                  a television reporter, but is now seldom found outside digital
                  newsrooms. Gustavo also headed a TV output desk, a digital news desk.
                </p>
              </div>
            </div>
          {/* <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
              <div class="card">
                <img
                  class="card-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg"
                />
                <p class="text-blk name">Gustavo Workman</p>
                <p class="text-blk position">CEO</p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
              <div class="card">
                <img
                  class="card-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"
                />
                <p class="text-blk name">Gustavo Workman</p>
                <p class="text-blk position">CEO</p>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
