import { useState } from "react";
import PropTypes from "prop-types";
const Search = (props) => {
  const [search, setSearch] = useState("");

  // fungsi mengambil value dari input dan menyimpannya ke variabel search dengan props
  const changeSearch = () => {
    props.changeSearch(search);
  };

  // fungsi ketika tombol enter ditekan
  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <div>
      <div>
        Cari Artikel: <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeyDown}/>
        <button onClick={changeSearch}>Cari</button>
      </div>
      <small>Ditemukan {props.totalData} data dengan kata pencarian kata {search} </small>
    </div>
  );
};

Search.propTypes = {
  changeSearch: PropTypes.func,
  totalData: PropTypes.number
};

export default Search;
