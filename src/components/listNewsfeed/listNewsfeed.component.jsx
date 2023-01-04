import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../loading/loading.component";
import ItemNewsfeed from "./itemNewsfeed/itemNewsfeed.listNews";
import {
  getListPostAction,
  getListPostUserAction,
} from "../../store/actions/post.actions";

export default function ListNewsfeed() {
  const dispatch = useDispatch();
  const { listPost } = useSelector((state) => state.post);
  const { id } = useParams();
  const [listPostUser, setListPostUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = await Cookies.get("token");
      if (token) {
        const res = await dispatch(getListPostAction());
        if (id) {
          const res1 = await dispatch(getListPostUserAction(id));
          setListPostUser(res1);
        }
      }
    };
    fetchData();
  }, []);

  const showListPost = (listPost) => {
    let result = null;
    if (listPost?.length > 0) {
      result = listPost.map((itemPost, index) => {
        return <ItemNewsfeed key={index} itemPost={itemPost} />;
      });
    }
    return result;
  };
  return (
    <div className="grid-column">
      {showListPost(id ? listPostUser?.post1 : listPost?.post1)}
      <LoadingComponent />
    </div>
  );
}
