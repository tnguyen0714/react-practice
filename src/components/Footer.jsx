import React from "react";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="button">
          <a
            href="https://www.facebook.com/smiski.japan/"
            // target="_blank"
            class="fa fa-facebook"
          >
            Facebook
          </a>
          {/* <a
            href="https://twitter.com/smiski_usa_"
            // target="_blank"
            // class="fl-icon fl-icon-color-branded fl-icon-twitter fl-icon-twitter-circle"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UCkKGZJ-oZ6PhxFVI_Ppm26g"
            // target="_blank"
            // class="fl-icon fl-icon-color-branded fl-icon-youtube fl-icon-youtube-circle"
          >
            Youtube
          </a>
          <a
            href="https://www.instagram.com/smiski_usa/"
            // target="_blank"
            // class="fl-icon fl-icon-color-branded fl-icon-instagram fl-icon-instagram-circle"
          >
            Instagram
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
