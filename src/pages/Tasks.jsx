import '../App.css';

function Tasks() {
  return (
    <div>

    

      {/* TASKS */}
      <article className="tasks">
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
      </article>

    </div>
  );
}

export default Tasks;