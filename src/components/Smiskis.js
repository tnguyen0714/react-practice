import React from "react";
// import SmiskisBottomHeader from "./SmiskisBottomHeader";
// import SmiskisBottomMiddleHeader from "./SmiskisBottomMiddleHeader";
// import SmiskisLowMiddleHeader from "./SmiskisLowMiddleHeader";
// import SmiskisMiddleHeader from "./SmiskisMiddleHeader";

function Smiskis() {
  return (
    <div className="smiskis-page-container">
      <div className="tag_line">
        <h4>
          <img
            src="https://smiski.com/wp-content/uploads/2016/03/icon01-1.png"
            alt="SmiskisLogo"
          />
          SMISKIS
        </h4>
      </div>
      <div className="smiskis-row-fixed-width smiskis-row-content smiskis-bg-color-yellow">
        <img
          src="https://smiski.com/e/wp-content/uploads/2016/03/about01.png"
          alt="about01"
          itemProp="image"
        />
        <h4>
          Smiski are curious little creatures that love hiding in small spaces
          and corners of your room.
        </h4>
      </div>
      <div className="smiskis-row-fixed-width smiskis-row-content smiskis-bg-color-green">
        <img
          src="https://smiski.com/e/wp-content/uploads/2016/03/about02d.png"
          alt="about02d"
          itemProp="image"
        />
        <h4 className="smiskis-text-white">Although they like to stay hidden,</h4>
      </div>
      <div className="smiskis-row-fixed-width smiskis-row-content smiskis-bg-color-yellow">
        <img
          src="https://smiski.com/wp-content/uploads/2016/03/smiski_glows.gif"
          alt="Smiskis_Gif"
        />
        <h4>
          you might discover one at night as they misteriously glow in the dark.
        </h4>
      </div>
      <div className="smiskis-row-fixed-width smiskis-row-content smiskis-bg-color-green">
        <img
          src="https://smiski.com/e/wp-content/uploads/2016/03/about04.png"
          alt="about04"
          itemProp="image"
        />
        <h4 className="smiskis-text-white">
          It is interesting to see the many types of Smiski all with different
          personalities and character.
        </h4>
      </div>
    </div>
  );
}

export default Smiskis;
