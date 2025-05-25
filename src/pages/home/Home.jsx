import Feed from "../../components/feed/Feed.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./Home.css";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
