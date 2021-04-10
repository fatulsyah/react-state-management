import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectPosts } from "./postSlice";
import styles from "./Post.module.css";

export default function Post() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.postWrapper}>
      {postStatus === "loading" ? (
        <div>Loading...</div>
      ) : (
        posts &&
        posts.map((post) => (
          <>
            <p className={styles.title}>{post.title}</p>
            <p className={styles.content}>{post.content}</p>
          </>
        ))
      )}
    </div>
  );
}
