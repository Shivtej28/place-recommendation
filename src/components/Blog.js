import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Blog.css"
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

export default function Blog({blog}) {
  console.log(blog);
  const location = useLocation()
  const navigate = useNavigate()
  
  const goToSeeBlog = () => {
    navigate("/seeblog", {
      state:blog
    })
 }
  return (
    <div className="blog">
      <div className="upper">
      <FaUserCircle/>
      <p>{blog.sentBy}</p>
      </div>
      <Link to="/seeblog" state={blog} className="read">Read more..</Link>
    </div>
  )
};
