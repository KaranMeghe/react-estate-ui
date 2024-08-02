import "./homepage.scss";
import { SearchBar } from "../../components";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream place </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            eligendi magni. Ut odio dolorum fugit nesciunt eius voluptatem nisi
            libero est ducimus, deserunt porro. Nobis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda, tenetur.
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background home-page image" />
      </div>
    </div>
  );
};

export default HomePage;
