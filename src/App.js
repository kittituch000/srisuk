import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init();
  return (
    <div class="grid-top">
      <div class ="grid-top-content">
      <div class ="branner-imge">
      <img src="./image/branner.png" className="branner-image" alt="" />
      </div>
      </div>
      <div 
      className ="img-logo-block"
      data-aos="fade-up"
      data-aos-duration="2000"
      >
      <img src="./image/logo.png" className = "logo-imge" alt="" />
        </div>  
    <div class="grid-center">
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
      <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>
            <div class ="image-center">
      <img src="./image/homeimage1.jpg" class ="image-center" alt="" />
      </div>

    </div>    
    </div>



  );
}

export default App;
