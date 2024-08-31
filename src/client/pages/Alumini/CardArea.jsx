import React from 'react';
import Card from './Card';

const CardArea = () => {
  return (
    <main className="main">
      <section className="card-area">
        <section className="card-section">
          <Card 
            heading="City break" 
            price="From £29" 
            viewText="View me" 
            videoSrc="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
            insideHeading="For urban lovers"
            insideText="As cities never sleep, there are always something going on, no matter what time!"
            btnText="View deals"
          />
        </section>
        <section className="card-section">
          <Card 
            heading="Ski trip" 
            price="From £199" 
            viewText="View me" 
            videoSrc="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611"
            insideHeading="For snow lovers"
            insideText="Love snow? Why not take up exciting ski-in sessions and hit the slope?"
            btnText="View deals"
          />
        </section>
        <section className="card-section">
          <Card 
            heading="Beach time" 
            price="From £229" 
            viewText="View me" 
            videoSrc="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761"
            insideHeading="For sun lovers"
            insideText="Relax and get sun-kissed tan in the sea or take up surfing for an adventure!"
            btnText="View deals"
          />
        </section>
        <section className="card-section">
          <Card 
            heading="Camping trek" 
            price="From £129" 
            viewText="View me" 
            videoSrc="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761"
            insideHeading="For nature lovers"
            insideText="Get your boots on for some hiking and explore all the beautiful scenery of nature!"
            btnText="View deals"
          />
        </section>
      </section>
    </main>
  );
};

export default CardArea;
