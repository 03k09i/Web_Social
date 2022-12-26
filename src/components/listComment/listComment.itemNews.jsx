import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCommentAction } from "../../store/actions/comment.actions";
import ItemCommentItemNewsfeed from "./itemComment/itemComment.itemNews";
import ReplyComment from "./replyComment/replyComment.itemNews";

export default function ListCommentItemNewsfeed(props) {
  const dispatch = useDispatch();
  const { itemPost, setQuantityComment, showComment } = props;
  const [listComment, setListComment] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getListCommentAction(itemPost._id));
      await setListComment(res?.comment);
      await setQuantityComment(res?.result);
    };
    fetchData();
  }, []);
  const showListComment = (listComment) => {
    let result = null;
    if (listComment?.length > 0) {
      result = listComment.map((itemComment, index) => {
        if (!itemComment.parent_comment) {
          return (
            <ItemCommentItemNewsfeed
              key={index}
              itemPost={itemPost}
              itemComment={itemComment}
              listComment={listComment}
              setListComment={setListComment}
            />
          );
        }
      });
    }
    return result;
  };

  return showComment ? (
    <div id="comments" className="post-comment-list">
      {showListComment(listComment)}
      {/* <p className="post-comment-heading">
        Load More Comments <span className="highlighted">1+</span>
      </p> */}

      <ReplyComment
        itemPost={itemPost}
        listComment={listComment}
        setListComment={setListComment}
      />
    </div>
  ) : null;
}
