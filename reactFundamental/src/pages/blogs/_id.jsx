// file _id.jsx untuk menampilkan halaman blog berdasarkan id

import { useLoaderData } from "react-router-dom";
const BlogContent = () => {
  const data = useLoaderData();
  return (
    <>
      <h3>BlogContent</h3>
      <div>
        {/* data? digunakan untuk mengecek apakah data ada */}
        <h3>{data?.title}</h3>
        <p>{data?.body}</p>
      </div>
    </>
  );
};

export default BlogContent;
