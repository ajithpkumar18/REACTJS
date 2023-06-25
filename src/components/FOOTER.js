import React from "react";
import { Link } from "react-router-dom";

function FOOTER() {
  return (
    <footer>
      <div
        class="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div class="py-5">
          <h2 class="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button class="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </Link>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 py-3">
            <h5 class="text-info pb-3">More links</h5>
            <a href="/" class="text-light d-block">
              Blogs
            </a>
            <Link to="/" class="text-light d-block">
              Home
            </Link>
            <Link to="/contact" class="text-light d-block">
              Contact me
            </Link>
            <Link to="/write" class="text-light">
              Write a recommendation <i class="fas fa-heart text-light"></i>
            </Link>
          </div>
          <div class="col-12 col-md-4 text-light text-justify py-3">
            <p>
              I want to extend my heartfelt appreciation for visiting my
              portfolio. Your interest in my work as a full stack developer
              genuinely means a lot to me. It's through encounters like these
              that I find inspiration and motivation to continue growing and
              creating remarkable solutions. Your support and trust are
              invaluable, and I'm truly grateful for the opportunity to
              collaborate with individuals like you. It is through your trust
              and encouragement that I am inspired to push the boundaries of my
              abilities. Let's embark on exciting ventures together and make a
              positive impact. Thank you again for being a part of this journey.
            </p>
          </div>
          <div class="col-12 col-md-4 py-3">
            <h5 class="text-info pb-3">Social</h5>
            <a href="https://www.linkedin.com/in/ajith-p-kumar" target="_blank">
              <i class="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="https://github.com/JOSHI-owo" target="_blank">
              <i class="fab fa-github text-light h1 d-block"></i>
            </a>
            <Link to="/contact">
              <i class="fas fa-envelope text-light h1 d-block"></i>
            </Link>
          </div>
        </div>
        <div class="text-muted py-3">
          <p>Copyright © AJITH P. KUMAR</p>
        </div>
      </div>
    </footer>
  );
}

export default FOOTER;
