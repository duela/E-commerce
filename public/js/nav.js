// nav.js


const createnav = () => {
  let nav = document.querySelector('.navbar');
  nav.innerHTML = `
  <div class="nav">
      <img src="pictures/Logo/Scre.png" class="brand-logo" alt="logo">
      <div class="nav-items">
          <div class="search">
              <input type="text" class="search-box" placeholder="search brand, product">
              <button class="search-btn">search</button>
          </div>
          <a href="#"><img class="icon" src="pictures/Logo/user.jpeg" alt="user icon"></a>
          <a href="#"><img src="pictures/Logo/cart.png" alt="cart"></a>
      </div>
  </div>
  <ul class="containers">
    <li><a href="#" class="link"> Home</a></li>
    <li><a href="#" class="link"> iPhone</a></li>
    <li><a href="#" class="link"> iPad</a></li>
    <li><a href="#" class="link"> Mac</a></li>
    <li><a href="#" class="link"> iMac</a></li>
    <li><a href="#" class="link"> Watch</a></li>
    <li><a href="#" class="link"> AirPods</a></li>
    <li><a href="#" class="link"> Accessories</a></li>
  </ul>
  `;
}
createnav();
