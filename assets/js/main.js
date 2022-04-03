class myNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="grid wide">
            <nav class="navbar display--pc">
                <a href="../index.html">
                    <img src="../assets/img/navbar/Logo.svg" alt="" class="navbar__logo">
                </a>
                <div class="navbar__list">
                    <nav class="navbar__items">
                        <a class="navbar__item" href="../pages/aboutUs.html">About Us</a>
                        <a class="navbar__item" href="../pages/careers.html">Careers</a>
                        <a class="navbar__item" href="../pages/services.html">Services</a>
                        <a class="navbar__item" href="../pages/blog.html">Blog</a>
                        <a class="navbar__item" href="../pages/contactUs.html">Contact Us</a>
                    </nav>
                    <button class="btn btn--small navbar__menu-btn">Clone project</button>
                </div>
            </nav>
        </div>
        <nav class="navbar--mobile display--mobile">
            <a href="../index.html" class="logo"><img src="../assets/img/navbar/Logo.svg" alt="Logo Finsweet"></a>
            <input class="navbar__mobile-check" type="checkbox" id="navbar__mobile-check" />
            <label class="navbar__mobile-icon" for="navbar__mobile-check"><span class="navicon"></span></label>
            <ul class="menu">
                <li><a href="../pages/aboutUs.html">About Us</a></li>
                <li><a href="../pages/careers.html">Careers</a></li>
                <li><a href="../pages/services.html">Services</a></li>
                <li><a href="../pages/blog.html">Blog</a></li>
                <li><a href="../pages/contactUs.html">Contact Us</a></li>
                <button class="btn navbar__mobile-btn">Clone Project</button>
            </ul>
        </nav>
        `
    }
}
customElements.define('main-navbar', myNavbar);

class videoSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="grid wide ptb-64 ptb-32--mobile">
                <div class="video__items">
                    <div class="row">
                        <div class="col l-6 m-12 c-12">
                            <div class="video__left">
                                <h1 class="text-strong-spacing">Finsweet was a dream<br> to work with</h1>
                                <p class="video__left-desc">
                                    Maecenas efficitur scelerisque lorem, et varius lacus<br> tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis<br> vel vel orci. Vivamus eleifend nec felis vel auctor.
                                </p>
                                <div class="video__left-person">
                                    <img src="../assets/img/content/svg/videoPerson.svg" alt="">
                                    <div class="video__left-details">
                                        <p>Chikelu Neo</p>
                                        <p>CEO at MazeAI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col l-6 m-12 c-12">
                            <div class="video__play">
                                <div class="video__play-ic  display--pc">
                                    <img style="display:flex; align-items:center;" src="../assets/img/content/svg/playIcon.svg" alt="">
                                </div>
                                <img src="../assets/img/content/images/videoPlay.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('main__video-section', videoSection);

class latestSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="bc-dceaf5" style="background-color: #DCEAF5; margin-top: 64px;">
            <div class="grid wide ptb-96 ptb-32--mobile">
                <h2 style="color: var(--title-text-color);" class="latest__heading text-strong-spacing">
                    Latest Blog & News
                </h2>
                <div class="latest__items">
                    <div class="row">
                        <div class="col l-4 m-12 c-12">
                            <div class="latest__item">
                                <img class="latest__item-img" src="../assets/img/content/images/latestImage1.png" alt="">
                                <div class="latest__item-wrapper">
                                    <div class="latest__details">
                                    <p class="latest__details-heading" style="line-height: 36px; margin-top:0">
                                        Why you have to digitalize in 2021
                                    </p>
                                    <p class="latest__details-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                                    </p>
                                </div>
                                <footer class="latest__footer">
                                    <a href="../pages/blogInner.html">
                                        <p class="latest__footer-desc">Learn More</p>
                                    </a>
                                    <img src="../assets/img/content/svg/arrowIcon.svg" class="latest__footer-img" alt="">
                                </footer>
                                </div>
                            </div>
                        </div>
                        <div class="col l-4 m-12 c-12">
                            <div class="latest__item">
                                <img class="latest__item-img" src="../assets/img/content/images/latestImage2.png" alt="">
                                <div class="latest__item-wrapper">
                                    <div class="latest__details">
                                        <p class="latest__details-heading" style="line-height: 36px; margin-top:0">
                                            Our internal process and longerm vision
                                        </p>
                                        <p class="latest__details-desc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                                        </p>
                                    </div>
                                    <footer class="latest__footer">
                                        <a href="../pages/blogInner.html">
                                            <p class="latest__footer-desc">Learn More</p>
                                        </a>
                                        <img src="../assets/img/content/svg/arrowIcon.svg" class="latest__footer-img" alt="">
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div class="col l-4 m-12 c-12">
                            <div class="latest__item">
                                <img class="latest__item-img" src="../assets/img/content/images/latestImage3.png" alt="">
                                <div class="latest__item-wrapper">
                                    <div class="latest__details">
                                    <p class="latest__details-heading" style="line-height: 36px; margin-top:0">
                                        Helping the next generation of leaders
                                    </p>
                                    <p class="latest__details-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                                    </p>
                                </div>
                                <footer class="latest__footer">
                                    <a href="../pages/blogInner.html">
                                        <p class="latest__footer-desc">Learn More</p>
                                    </a>
                                    <img src="../assets/img/content/svg/arrowIcon.svg" class="latest__footer-img" alt="">
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('main__latest-section', latestSection);

class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
            <div class="grid wide">
                <div class="footer-wrapper">
                    <div class="row">
                        <div class="col l-4 m-12 c-12">
                            <div class="footer__top-left">
                                <a href="../index.html">
                                    <img src="../assets/img/footer/Logo.svg" alt="" class="">
                                </a>
                                <h2 class="footer__left-title text-strong-spacing">Bespoke software solutions</h2>
                                <div class="footer__social">
                                    <a href="#">
                                        <i class="footer-ic ri-facebook-fill"></i>
                                    </a>
                                    <a href="#">
                                        <i class="footer-ic ri-youtube-fill"></i>
                                    </a>
                                    <a href="#">
                                        <i class="footer-ic ri-instagram-line"></i>
                                    </a>
                                    <a href="#">
                                        <i class="footer-ic ri-twitter-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col l-4 m-12 c-12">
                            <div class="footer__top-center">
                                <div class="row">
                                    <div class="col l-6 m-6 c-12">
                                    <div class="footer__company">
                                        <h4 class="footer-title">
                                            Company
                                            <div class="line display--mobile">
                                                <hr>
                                            </div>
                                        </h4>
                                        <a href="../pages/aboutUs.html">About Us</a>
                                        <a href="../pages/careers.html">Careers</a>
                                        <a href="../pages/services.html">Services</a>
                                        <a style="margin-bottom: 0;" href="../pages/blog.html">Blog</a>
                                    </div>
                                    </div>
                                    <div class="col l-6 m-6 c-12">
                                        <div class="footer__connect">
                                            <h4 class="footer-title">
                                                Connect
                                                <div class="line display--mobile">
                                                    <hr>
                                                </div>
                                            </h4>
                                            <a href="mailto:hi@finsweet.com">hi@finsweet.com</a>
                                            <a style="margin-bottom: 0;" href="tel:+(123) 456-7890">+(123) 456-7890</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col l-4 m-12 c-12">
                            <div class="footer__top-right">
                                <h4 class="footer-title">
                                    Join Newsletter
                                    <div class="line display--mobile">
                                        <hr>
                                    </div>
                                </h4>
                                <form action="">
                                    <input required class="input" type="email" placeholder="Type email here">
                                    <input type="submit" value="Subscribe" class="btn btn--small"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer__bottom">
                        <p>© All rights reserved – Finsweet</p>
                        <div class="footer__bottom-right">
                            <a href="../pages/privacyPolicy.html">Privacy Policy</a>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}
customElements.define('main-footer', myFooter);


// Tabs UI
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});