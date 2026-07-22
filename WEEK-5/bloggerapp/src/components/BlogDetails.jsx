export const blogs = [
  {
    id: 1,
    title: "React Basics",
    author: "Dharani"
  },
  {
    id: 2,
    title: "Spring Boot Guide",
    author: "John"
  }
];

export default function BlogDetails(props) {
  return (
    <div>
      <h1>Blog Details</h1>
      {props.blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Author : {blog.author}</p>
        </div>
      ))}
    </div>
  );
}