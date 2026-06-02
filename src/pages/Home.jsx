import '../App.css';

function Home() {
  return (
    <div>

      

      {/* HERO */}
      <article className="hero">
        <div className="hero-left">
          <h1>
            <div style={{ display: "inline", color: "var(--main-color2)" }}>-</div>
            Your <br />
            <span className="yello-text">Task Maneger</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo
            temporibus odit laborum sunt ea, magnam, maxime cupiditate veniam
            explicabo fuga earum aliquam neque obcaecati ullam illo vitae dolor
            voluptates.
          </p>
        </div>

        <div className="hero-right">
          <h1>lets start !</h1>
          <button className="btn">startasadsaas</button>
        </div>
      </article>

      {/* TASKS */}
      <article className="tasks-article">
        <div className="main">

          <p className="artc-title" style={{ color: "white" }}>
            <span>- </span>Tasks
          </p>

          <div className="main-top">
            <h1 style={{ color: "white" }}>
              <span className="yello-text">Tasks</span> You Have
            </h1>

            <button className="btn">View All Tasks</button>
          </div>

          <div className="main-cards">

            <div className="card">
              <div className="icon"></div>
              <h3>UI/UX Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex...</p>
              <a href="/">Learn more</a>
            </div>

            <div className="card">
              <div className="icon"></div>
              <h3>Application Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex...</p>
              <a href="/">Learn more</a>
            </div>

            <div className="card">
              <div className="icon"></div>
              <h3>Website Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex...</p>
              <a href="/">Learn more</a>
            </div>

          </div>

        </div>
      </article>

      {/* ABOUT */}
      <article className="about">
        <div className="main1">

          <div className="about-left">
            <h1>lets contact !</h1>
          </div>

          <div className="about-right">

            <div className="about-right-top">
              <p className="artc-title" style={{ color: "#000" }}>
                <span>- </span>About Me
              </p>

              <h1>
                <span className="yello-text">Wanna Say</span> Something?
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur reiciendis obcaecati laboriosam quas, error
                tempore odio officiis illo hic at dolor blanditiis tempora
                quaerat cumque enim libero
              </p>
            </div>

            <div className="about-right-bottom">
              <button className="btn">Contact me</button>
            </div>

          </div>

        </div>
      </article>

    </div>
  );
}

export default Home;