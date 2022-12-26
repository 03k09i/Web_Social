import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../loading/loading.component";
import ItemNewsfeed from "./itemNewsfeed/itemNewsfeed.listNews";
import { getListPostAction } from "../../store/actions/post.actions";

export default function ListNewsfeed() {
  const dispatch = useDispatch();
  const { listPost } = useSelector((state) => state.post);
  const { id } = useParams();
  // const [listPost, setListPost] = useState();
  console.log(listPost);
  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const res = dispatch(getListPostAction());
      }
    };
    fetchData();
  }, [listPost]);
  const showListPost = (listPost) => {
    let result = null;
    if (listPost?.length > 0) {
      result = listPost.map((itemPost, index) => {
        if (id) {
          if (itemPost.user._id === id) {
            return <ItemNewsfeed key={index} itemPost={itemPost} />;
          }
        } else {
          return <ItemNewsfeed key={index} itemPost={itemPost} />;
        }
      });
    }
    return result;
  };
  return (
    <div className="grid-column">
      {showListPost(listPost?.post1)}
      <LoadingComponent />
    </div>
  );
}
