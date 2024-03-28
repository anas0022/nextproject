'use client'
import Head from 'next/head';
import Script from 'next/script';

export default function Home() { 
  var indexvalue = 1;
  showingImg(indexvalue);
  
  function Scroll(e) {
      showingImg(indexvalue += e);
  }
  
  
  function showingImg(e) {
    var i;
    const img = document.querySelectorAll('.ticket-card1');
    if (e > img.length || e < 1) {
        indexvalue = 1;
    }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    if (img[indexvalue - 1]) { 
        img[indexvalue - 1].style.display = "block";
    }
}
{/* sun */}
function sun() {
  var allItems = document.getElementsByClassName('all-items');
  var sun = document.getElementById('sun');
  var moon = document.getElementById('moon');
  var texts = document.querySelectorAll('p'); 
  var details = document.querySelectorAll('.de');
  var ticket = document.getElementById('ticket');
var ticketcard =document.querySelectorAll('.ticket-card1');
var cards = document.querySelectorAll('#card'); 
 
  var  hpara =document.querySelectorAll('.h-para');

  if (allItems.length > 0) {
   
      allItems[0].style.backgroundColor = "rgba(41, 43, 50, 1)";
      
  } 
  
  if (sun) {
      sun.style.transform = "translateY(20px)";
  } 

  if (moon) {
      moon.style.transform = "translateY(20px)";
  } 
 
  if (texts) {
      texts.forEach(text => {
          text.style.color = "rgba(255, 255, 255, 1)";
      });
  }

  if (details) {
      details.forEach(detail => {
          detail.style.backgroundColor = " rgba(41, 43, 50, 1) ";
      });
  }
  if (hpara) {
    hpara.forEach(hpara => {
      hpara.style.color = " rgba(223, 223, 223, 1)";
      
    });
}
if (ticket) {

  ticket.style.backgroundImage = "linear-gradient(360deg, #221A2C , #221A2C ,  #18282A)";
}

if (ticketcard) {
  ticketcard.forEach(ticketcard => {
    ticketcard.style.backgroundColor = "rgba(41, 43, 50, 1)";
    ticketcard.style.setProperty('--after-background-color', "#221A2C");
  });
}


 if (cards) {
 cards.forEach(cards => {
    cards.style.color = " rgba(0, 0, 0, 0.2)";
    
  });
}

}

function moon() {
  var allItems = document.getElementsByClassName('all-items');
  var sun = document.getElementById('sun');
  var moon = document.getElementById('moon');
  var texts = document.querySelectorAll('p'); 
  var texts = document.querySelectorAll('p'); 
  var details = document.querySelectorAll('.de');
  var ticket = document.getElementById('ticket');
  var ticketcard =document.querySelectorAll('.ticket-card1');

  if (allItems.length > 0) {
      allItems[0].style.backgroundColor = "rgba(247, 247, 248, 1)";
  } 

  if (sun) {
    sun.style.transform = "translateY(-20px)";
} 

if (moon) {
    moon.style.transform = "translateY(-40px)";
} 


  if (texts) {
      texts.forEach(text => {
          text.style.color = "rgba(0, 0, 0, 1)";
      });
  }
  if (details) {
    details.forEach(detail => {
        detail.style.backgroundColor = " rgba(247, 247, 248, 1)";
    });
}

if (ticket) {

  ticket.style.backgroundImage = "linear-gradient(180deg, #F9F8FF 0%, #F3F9FF 100%)";
}

if (ticketcard) {
  ticketcard.forEach(ticketcard => {
    ticketcard.style.background = "white";
    ticketcard.style.setProperty('--after-background-color', "linear-gradient(180deg, #F9F8FF 0%, #F3F9FF 100%)");
  });
}

}


  return(
   
    <main >
 
  <div className='all-items'>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>


   

    <div className='effect'>
        <div className='effects'>
          <i className="fa fa-moon-o" id="moon" onClick={()=>moon()}></i><br></br>
          <i class="fa fa-sun-o" id="sun" onClick={()=>sun()}></i>
        </div>
    
  </div> 
  <div className='boxes1'>
  <div className='box1'>
<div className='header1'>
  <p id="text">Sports</p>
</div>

<div className='cards1' >
 <div className='section1'>
  <div className='card1' id='cards' >
  <div className='
    image-body'>
    <div className='
    im1'style={{ backgroundImage: `url("/image1.jpg")` }}>
</div></div>

<div className='dis-name'>
  <p id="text">Sacramento River Cat</p>
</div>
<div className='details' >
  <div className='de' id='de'>
    <div className='para'>
      <div className='p1'>
        <p className='h-para' >total events</p>
        <p className='su-para'>48 Events</p>
      </div>
      <div className='p1'>
        <p className='h-para'>sport</p>
        <p className='su-para'>baseball</p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className='card'  id='cards' >
  <div className='
    image-body'>
    <div className='
    im1'style={{ backgroundImage: `url("/image2.jpg")` }}>
</div></div>
<div className='dis-name'>
  <p>Las Vegas Aviators</p>
</div>
<div className='details'>
<div className='de'>
    <div className='para'>
      <div className='p1'>
        <p className='h-para'>total events</p>
        <p className='su-para'>28 Events</p>
      </div>
      <div className='p1'>
        <p className='h-para'>sport</p>
        <p className='su-para'>baseball</p>
      </div>
    </div></div>
</div>
</div>

  </div>
  <div className='section2'>
  <div className='card'  id='cards' >
  <div className='
    image-body'>
    <div className='
    im1'style={{ backgroundImage: `url("/image3.jpg")` }}>
</div></div>
<div className='dis-name'>
  <p>new jersey devils</p>
</div>
<div className='details'>
<div className='de'>
    <div className='para'>
      <div className='p1'>
        <p className='h-para'>total events</p>
        <p className='su-para'>15 Events</p>
      </div>
      <div className='p1'>
        <p className='h-para'>sport</p>
        <p className='su-para2'>ice hockey</p>
      </div>
    </div></div>
</div>
  </div>
  <div className='card'  id='cards' >
  <div className='
    image-body'>
    <div className='
    im1'style={{ backgroundImage: `url("/image2.jpg")` }}>
</div></div>
<div className='dis-name'>
  <p>Las Vegas Aviators</p>
</div>
<div className='details'>
<div className='de'>
    <div className='para'>
      <div className='p1'>
        <p className='h-para'>total events</p>
        <p className='su-para'>28 Events</p>
      </div>
      <div className='p1'>
        <p className='h-para'>sport</p>
        <p className='su-para'>baseball</p>
      </div>
    </div></div>
</div>
</div>

  </div>
  <div className='section3'>
  <div className='card'  id='cards' >
<div className='add-body'>
  <div className='add-img' style={{ backgroundImage: `url("/image4.jpg")` }}> <div className='ad'><div>Ad</div> </div></div>
 
</div>
<div className='add-title'>
 <p>Advertisement title</p>
</div>
<div className='add-para'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
  </div>
 
  </div>

</div>
<div className='bu1'>
<button>see more</button></div>
</div>
  </div>

  <div className='ticket-box'>

    <div className='ticket-card' id='ticket'>
  
      <div className='ticket-items'>
      <div className='scroll'>
        <div className='scroll-in'>
        <div className='tikets-scroller' id='left' ><i class="material-icons"  onClick={()=>Scroll(-1)}>keyboard_arrow_left</i> </div>
        <div className='tikets-scroller' id='right'><i class="material-icons" onClick={()=>Scroll(1)}>keyboard_arrow_right</i> </div>
        </div>
      </div>
      <div className='ticket-container'>
        
        <div className='tiket-header'>
          <p>Collection Spotlight</p>
        </div>
        <div className='tiket-sub'>
          <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br></br> experience. Grab yours today!</p>
        </div>
        <div className='tikets-box'>
        <div className='tikets'>
        <div className='tikets-scroller' id='scroll-left'><i class="material-icons">keyboard_arrow_left</i> </div>
<div className='ticket'>
  <div className='ticket-card1' id='cards2'>
    <div className='ticket-image'>
      <div className='ticket-body1'>
        <div className='ticket-icon' style={{ backgroundImage: `url("/image5.jpg")` }}></div>
      </div>
      
      </div>
      <div className='ticket-dis'>
      <div className='ticket-con'>
<div className='ticket-header'> 
<p>Las Vegas Aviators</p></div>

</div>

    </div>
    <div className='play-details'>
   
  <div className='play-dis'>
    <div className='time'>
      <p>Oct 15</p>  <p>sun</p> <p>4:30 PM</p>
    </div>
  </div>
</div>
<div className='address'>
<div className='address-para'>
<p>Las Vegas Ballpark, Las Vegas,<br></br> Nevada</p>
</div>
</div>
<div className='book'>
  <button>Take Flight Collection</button>
</div>
  </div>
  <div className='ticket-card1'id='cards' >
  <div className='ticket-image'>
      <div className='ticket-body1' >
        <div className='ticket-icon' style={{ backgroundImage: `url("/image6.jpg")` }}></div>
      </div>
      
      </div>
      <div className='ticket-dis'>
      <div className='ticket-con'>
<div className='ticket-header'> 
<p>Sacramento River Cats</p></div>

</div>

    </div>
    <div className='play-details'>
  <div className='play-dis'>
    <div className='time'>
      <p>Oct 15</p>  <p>sun</p> <p>4:30 PM</p>
    </div>
  </div>
</div>
<div className='address'>
<div className='address-para'>
<p>Sutter Health Park, Sacramento, <br></br>California</p>
</div>
</div>
<div className='book'>
  <button>Orange Collection</button>
</div>
  </div>
  
  <div className='ticket-card1' id='cards'>
  <div className='ticket-image'>
      <div className='ticket-body1'>
        <div className='ticket-icon' style={{ backgroundImage: `url("/image5.jpg")` }}></div>
      </div>
      
      </div>
      <div className='ticket-dis'>
      <div className='ticket-con'>
<div className='ticket-header'> 
<p>Las Vegas Aviators</p></div>

</div>

    </div>
    <div className='play-details'>
  <div className='play-dis'>
    <div className='time'>
      <p>Oct 15</p>  <p>sun</p> <p>4:30 PM</p>
    </div>
  </div>
</div>
<div className='address'>
<div className='address-para'>
<p>Las Vegas Ballpark, Las Vegas,<br></br> Nevada</p>
</div>
</div>
<div className='book'>
  <button>Take Flight Collection</button>
</div>

  </div>
  
</div>
<div className='tikets-scroller' id='scroll-right'><i class="material-icons">keyboard_arrow_right</i> </div>
        </div>
        </div>
      </div>
      
      </div>
     
    </div>
  </div>
  </div>
</main>

)};
