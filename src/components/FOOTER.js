import React from "react";
import {Link} from 'react-router-dom'

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus nulla gravida orci a odio sit
              aliquip ut nullam.
            </p>
          </div>
          <div class="col-12 col-md-4 py-3">
            <h5 class="text-info pb-3">Social</h5>
            <a href="/">
              <i class="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i class="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i class="fas fa-envelope text-light h1 d-block"></i>
            </a>
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
