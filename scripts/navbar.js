const navBar = `    
<link
href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
rel="stylesheet"
/>
<link rel="stylesheet" href="../styles/nav.css">
<nav>
<div class="navbar">
  <i class='bx bx-menu'></i>
  <div class="logo"><a href="/index.html">
  <img src="../images/LOGO.svg" alt="">
  </a></div>
  <div class="nav-links">
    <div class="sidebar-logo">
      <a href="/index.html" class="logo-name">Classic Empire</a>
      <i class='bx bx-x' ></i>
    </div>
    <ul class="links">
    <li><a href="index.html">Home</a></li>
    <li><a href="../pages/about.html">About</a></li>
      <li>
        <a href="#">Services</a>
        <i class='bx bxs-chevron-down about-arrow arrow  '></i>
        <ul class="htmlCss-sub-menu-1 sub-menu">
          <li><a href="../pages/history.html">Artist Management</a></li>
          <li><a href="../pages/about.html">Studio Booking</a></li>
          <li><a href="#">Artist Promotion</a></li>     
        </ul>
      </li>
      <li>
        <a href="#">Media</a>
        <i class='bx bxs-chevron-down js-arrow arrow '></i>
        <ul class="js-sub-menu sub-menu">
          <li><a href="#">Blogs</a></li>
          <li><a href="#">News</a></li>
          <li><a href="../pages">Gallery</a></li>
        </ul>
      </li>
      <li><a href="../pages/contact.html">Contact</a></li>
    </ul>
  </div>
  
</div>
</nav>

<script src="../scripts/menu.js"></script>
`;

reuse("nav-bar", navBar, false, true);
