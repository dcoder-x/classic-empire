const footerBar = `    
<link
href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
rel="stylesheet"
/>
<script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
<link rel="stylesheet" href="../styles/footer.css">
<footer>
<small>
    © 2022 Classic Empire Records, All rights reserved. 
</small>
<div class="socials" >
    <a href=''>
        <span class="iconify" data-aos="fade-up" data-icon="ic:baseline-email" style="color: #f58632;"></span>
    </a>
    <a href=''>
    <span class="iconify" data-aos="fade-up" data-aos-delay='100'  data-icon="entypo-social:facebook-with-circle" style="color: #f58632;"></span>
    </a>
    <a href=''>
    <span class="iconify" data-aos="fade-up" data-aos-delay='200' data-icon="ant-design:twitter-circle-filled" style="color: #f58632;"></span>
    </a>
    <a href='https://www.instagram.com/classic.empire_/'>
    <span class="iconify" data-aos="fade-up" data-aos-delay='300' data-icon="bxl:instagram-alt" style="color: #f58632;"></span>
    </a>
    
</div>
</footer>
`;

reuse("footer-bar", footerBar, false, true);
