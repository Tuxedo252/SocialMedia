import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const createPostAction = async (data) => {
  const { addPost } = useContext(PostListContext);

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => {
      addPost(data);
    });

  return redirect("/");
};

export default createPostAction;
