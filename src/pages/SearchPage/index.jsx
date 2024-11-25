import { Link, useNavigate } from "react-router";
import "./index.css";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";

function SearchPage() {
  const navigate = useNavigate();
  return (
    <div className="SearchPage">
      <Link to="/liked">Liked</Link>
      <button onClick={() => navigate("/liked")}>Liled</button>
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;
