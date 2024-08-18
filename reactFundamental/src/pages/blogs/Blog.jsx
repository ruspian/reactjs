import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const Blog = () => {
  // gunakan useLoaderData untuk menangkap data dari loader
  const data = useLoaderData();
  return (
    <div>
      <h1>Simple Blog</h1>
      <h2>External Data</h2>
      {data.map(({ id, title }) => (
        <div key={id}>
          <Link to={`/blog/${id}`}>- {title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
