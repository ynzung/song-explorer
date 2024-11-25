import "./index.css";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";
import { useState } from "react";

function SearchPage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="SearchPage">
      <SearchBar
        onSearch={(value) => {
          setSearchText(value);
        }}
      />
      <SongList searchText={searchText} />
    </div>
  );
}

export default SearchPage;
