import DataJson from "../data.json";
import Artikel from "../componenets/Article";
import Search from "../componenets/Search";
import { useState } from "react";


function Home() {
  const [Data, setData] = useState(DataJson);
  const [totalData, setTotalData] = useState(0);
 

  // fungsi mengambil value dan memfilter data berdasarkan value
  const changeSearch = (value) => {
    // mencari data dengan filter
    const filteredPosts = DataJson.filter((item) => item.title.includes(value));
    // menentukan setData
    setData(filteredPosts);
    //   mencari total data
    setTotalData(filteredPosts.length);
  };

  

  return (
    <>
      <h1>Simple Blog</h1>
      <Search changeSearch={changeSearch} totalData={totalData} />
      {/* destruktur data atau menyimpelkan penulisan data yang awalnya blog.title menjadi title */}
      {Data.map(({ title, tags, date, isNew }, index) => (
        // <Artikel key={title}
        //     title={title}
        //     date={date}
        //     tags={tags}
        // />

        // bisa dengan destructuring seperti ini menggunakan spreat operator ... atau dengan cara di atas
        <Artikel key={index} {...{ title, date, tags, isNew }} />
      ))}
      <hr />
      <hr />

     
    </>
  );
}

export default Home;
