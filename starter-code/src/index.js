import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const greeting = (
  <div>
    <nav>
      <ul>
        <li>
          <img src="/images/ironhack-logo.svg" alt="Iron Hack" />
        </li>
        <li>
          <a href="#">
            <img src="/images/menu-top.svg" alt="Menu" />
          </a>
        </li>
      </ul>
    </nav>

    <section className="intro">
      <h1 className="head">
        Say hello to
        <br />
        ReactJS
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        repudiandae neque quia, sunt minima quasi.
      </p>
      <a href="#" className="btn">
        Awesome!
      </a>
    </section>

    <sections className="testimonials">
      <div className="card">
        <img src="/images/icon1.png" alt="Icon 1" />
        <h3>Declarative</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolor.
        </p>
      </div>

      <div className="card">
        <img src="/images/icon2.png" alt="Icon 2" />
        <h3>Components</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolor.
        </p>
      </div>

      <div className="card">
        <img src="/images/icon3.png" alt="Icon 3" />
        <h3>Single-Way</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolor.
        </p>
      </div>

      <div className="card">
        <img src="/images/icon4.png" alt="Icon 4" />
        <h3>JSX</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolor.
        </p>
      </div>
    </sections>
  </div>
);

ReactDOM.render(greeting, document.getElementById("root"));
