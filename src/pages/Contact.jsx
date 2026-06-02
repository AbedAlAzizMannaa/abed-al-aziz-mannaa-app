import '../App.css';

function Contact() {
  return (
    <div>

      

      {/* FORM */}
      <article className="form">
        <form>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">message</label>
            <textarea
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          <button
            className="btn"
            type="submit"
            style={{ backgroundColor: "#344c36", color: "white" }}
          >
            submit
          </button>

        </form>
      </article>

    </div>
  );
}

export default Contact;