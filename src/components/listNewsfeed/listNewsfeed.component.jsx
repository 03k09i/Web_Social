import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../loading/loading.component";
import ItemNewsfeed from "./itemNewsfeed/itemNewsfeed.listNews";
import { getListPostAction } from "../../store/actions/post.actions";

export default function ListNewsfeed() {
  const dispatch = useDispatch();
  const { listPost } = useSelector((state) => state.post);
  // const [listPost, setListPost] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const res = dispatch(getListPostAction());
      }
    };
    fetchData();
  }, []);
  const showListPost = (listPost) => {
    let result = [];
    if (listPost?.length > 0) {
      result = listPost.map((itemPost, index) => {
        return <ItemNewsfeed key={index} itemPost={itemPost} />;
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
