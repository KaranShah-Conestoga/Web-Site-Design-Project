class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav>
        <div class="nav-container">
            <div class="logo">
                <img src="./Assets/png/Asset 1.png" alt="">
            </div>
            <div class="nav-options">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./menu.html">Menu</a></li>
                    <li><a href="./gallery.html">Gallery</a></li>
                    <li><a href="./aboutUs.html">About Us</a></li>
                    <li><a href="./review.html">Review</a></li>
                    <li><a href="./contactUs.html">Contact Us</a></li>
                </ul>
            </div>
        </div>

    </nav>
        `
    }
}

class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="category-subcategory">
            <div class="title-branch">
                <h2>AboutUs</h2>
                <div class="branch">
                    <a href="#">Our Company</a>
                    <a href="#">Our coffee</a>
                    <a href="#">Stories and News</a>
                    <a href="#">Investor Relation</a>
                    <a href="#">Customer Services</a>
                </div>
            </div>
            <div class="title-branch">
                <h2>Careers</h2>
                <div class="branch">
                    <a href="#">Culture and Values</a>
                    <a href="#">Diversity and Inclusion</a>
                    <a href="#">Work at Les Crepes</a>
                    <a href="#">Corporate Careers</a>
                    <a href="#">Retail Careers</a>
                </div>
            </div>
            <div class="title-branch">
                <h2>Social Impact</h2>
                <div class="branch">
                    <a href="#">Overview</a>
                    <a href="#">People</a>
                    <a href="#">Planet</a>
                    <a href="#">Environmental and Social Impact Reporting</a>
                </div>
            </div>
            <div class="title-branch">
                <h2>Order and Pickup</h2>
                <div class="branch">
                    <a href="#">Order on the App</a>
                    <a href="#">Order on the Web</a>
                    <a href="#">Delivery</a>
                    <a href="#">Order and Pickup</a>
                    <a href="#">Options</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="social-media-privacy">
            <div class="social-media-icon">
                <div class="icon"><a href="#"><img src="./Assets/Images/facebook.png" alt=""></a></div>
                <div class="icon"> <a href="#"><img src="./Assets/Images/instagram.png" alt=""></a></div>
                <div class="icon"> <a href="#"><img src="./Assets/Images/twitter.png" alt=""></a></div>
            </div>
            <div class="privacy-terms-partner-information">
                <!-- create like     Privacy Notice     |     Terms of Use     |     Do Not Share My Personal Information     |     Partners one -->
                <div class="footer-links">
                    <a href="#">Privacy Notice</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Do Not Share My Personal Information</a>
                    <a href="#">Partners</a>
                </div>
            </div>
            <div class="copyright">
                <p>© 2023 Coffee Les Crepes. All rights reserved.</p>
            </div>

        </div>
    </footer>
        `
    }
}

customElements.define('nav-bar', NavBar)
customElements.define('footer-bar', footer)