import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div
        className="imgdiv"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <h1 className="title red">Your name here</h1>

        <br />
        <img src={imageInSrc} alt="SRC" />

        <br />

        <img src="/imageInPublic.jpg" alt="Public" />
      </div>
      <div className="video">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/whx0WCtc9DQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
