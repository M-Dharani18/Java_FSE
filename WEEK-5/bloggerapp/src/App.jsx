import { useState } from 'react'
import BookDetails, { books } from "./components/BookDetails";
import BlogDetails, { blogs } from "./components/BlogDetails";
import CourseDetails, { courses } from "./components/CourseDetails";
import './App.css'

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  let content;
  
  if (showBooks) {
    content = <BookDetails books={books} />;
  } else {
    content = <h2>No Books Available</h2>;
  }

  return(
  <>
      {content}
      { showBlogs ? <BlogDetails blogs={blogs} /> : <h2>No Blogs Available</h2>}
      { showCourses && <CourseDetails courses={courses} /> }
  </>
  );
}

export default App
