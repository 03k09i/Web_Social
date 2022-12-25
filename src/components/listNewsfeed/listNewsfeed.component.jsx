import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import LoadingComponent from "../loading/loading.component";
import ItemNewsfeed from "./itemNewsfeed/itemNewsfeed.listNews";

export default function ListNewsfeed() {
  const [listPost, setListPost] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        const res = await callApi(`post`, "GET", "", {
          Authorization: `Bearer ${token}`,
        });
        await setListPost(res?.data);
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
