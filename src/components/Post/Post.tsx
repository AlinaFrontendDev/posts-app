import { useEffect, useState } from "react";
import st from "./Post.module.scss";
import { Post, User, Comment } from "../../types";
import axiosInstance from "../../axiosinstance";
import { Link } from "react-router";

type Props = {
  item: Post;
};

export default function PostItem({ item }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);

  function toggleComments() {
    setShowComments((prev) => !prev);
  }

  useEffect(() => {
    axiosInstance.get(`/users/${item.userId}`).then((res) => {
      setUser(res.data);
    });
  }, [item.userId]);

  useEffect(() => {
    axiosInstance.get(`/posts/${item.id}/comments`).then((res) => {
      setComments(res.data.comments);
    });
  }, []);

  if (!user) {
    return <div></div>;
  }

  return (
    <div className={st.root}>
      <div className={st.header}>
        <Link to={`/profile/${user.id}`}>
          <img src={user.image} alt="" />
        </Link>
        <div>
          <h3>
            {" "}
            {user.firstName} {user.lastName}{" "}
          </h3>
          <p> {user.company.name} </p>
        </div>
      </div>
      <div className={st.title}>{item.title}</div>
      <div className={st.body}>{item.body}</div>
      <div className={st.bottom}>
        <div className={st.reactions}>
          <div className={st.like}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16661 12.8333V22.1667C8.16661 22.4761 8.04369 22.7728 7.8249 22.9916C7.6061 23.2104 7.30936 23.3333 6.99994 23.3333H4.66661C4.35719 23.3333 4.06044 23.2104 3.84165 22.9916C3.62286 22.7728 3.49994 22.4761 3.49994 22.1667V14C3.49994 13.6906 3.62286 13.3938 3.84165 13.1751C4.06044 12.9563 4.35719 12.8333 4.66661 12.8333H8.16661ZM8.16661 12.8333C9.40428 12.8333 10.5913 12.3417 11.4664 11.4665C12.3416 10.5913 12.8333 9.40436 12.8333 8.16668V7.00001C12.8333 6.38117 13.0791 5.78768 13.5167 5.3501C13.9543 4.91251 14.5478 4.66668 15.1666 4.66668C15.7854 4.66668 16.3789 4.91251 16.8165 5.3501C17.2541 5.78768 17.4999 6.38117 17.4999 7.00001V12.8333H20.9999C21.6188 12.8333 22.2123 13.0792 22.6499 13.5168C23.0874 13.9544 23.3333 14.5478 23.3333 15.1667L22.1666 21C21.9988 21.7157 21.6805 22.3303 21.2597 22.7511C20.8389 23.172 20.3383 23.3763 19.8333 23.3333H11.6666C10.7383 23.3333 9.84811 22.9646 9.19173 22.3082C8.53536 21.6518 8.16661 20.7616 8.16661 19.8333"
                stroke="#1C836D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item.reactions.likes}
          </div>

          <div className={st.dislike}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16661 12.8333V22.1667C8.16661 22.4761 8.04369 22.7728 7.8249 22.9916C7.6061 23.2104 7.30936 23.3333 6.99994 23.3333H4.66661C4.35719 23.3333 4.06044 23.2104 3.84165 22.9916C3.62286 22.7728 3.49994 22.4761 3.49994 22.1667V14C3.49994 13.6906 3.62286 13.3938 3.84165 13.1751C4.06044 12.9563 4.35719 12.8333 4.66661 12.8333H8.16661ZM8.16661 12.8333C9.40428 12.8333 10.5913 12.3417 11.4664 11.4665C12.3416 10.5913 12.8333 9.40436 12.8333 8.16668V7.00001C12.8333 6.38117 13.0791 5.78768 13.5167 5.3501C13.9543 4.91251 14.5478 4.66668 15.1666 4.66668C15.7854 4.66668 16.3789 4.91251 16.8165 5.3501C17.2541 5.78768 17.4999 6.38117 17.4999 7.00001V12.8333H20.9999C21.6188 12.8333 22.2123 13.0792 22.6499 13.5168C23.0874 13.9544 23.3333 14.5478 23.3333 15.1667L22.1666 21C21.9988 21.7157 21.6805 22.3303 21.2597 22.7511C20.8389 23.172 20.3383 23.3763 19.8333 23.3333H11.6666C10.7383 23.3333 9.84811 22.9646 9.19173 22.3082C8.53536 21.6518 8.16661 20.7616 8.16661 19.8333"
                stroke="#962121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item.reactions.dislikes}
          </div>

          {comments.length > 0 && (
            <div className={st.comments} onClick={toggleComments}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66663 24.5V9.33331C4.66663 8.40506 5.03538 7.51482 5.69175 6.85844C6.34813 6.20206 7.23837 5.83331 8.16663 5.83331H19.8333C20.7615 5.83331 21.6518 6.20206 22.3082 6.85844C22.9645 7.51482 23.3333 8.40506 23.3333 9.33331V16.3333C23.3333 17.2616 22.9645 18.1518 22.3082 18.8082C21.6518 19.4646 20.7615 19.8333 19.8333 19.8333H9.33329L4.66663 24.5Z"
                  stroke="#D6A206"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33331 10.5H18.6666"
                  stroke="#D6A206"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33331 15.1667H16.3333"
                  stroke="#D6A206"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>{comments.length}</span>

              <svg
                style={{
                  transform: showComments ? "rotate(-90deg)" : "rotate(90deg)",
                }}
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.451987 1.58L1.51299 0.519999L7.29199 6.297C7.38514 6.38957 7.45907 6.49964 7.50952 6.62089C7.55997 6.74214 7.58594 6.87217 7.58594 7.0035C7.58594 7.13482 7.55997 7.26485 7.50952 7.3861C7.45907 7.50735 7.38514 7.61743 7.29199 7.71L1.51299 13.49L0.452987 12.43L5.87699 7.005L0.451987 1.58Z"
                  fill="black"
                />
              </svg>
            </div>
          )}
        </div>
        <div className={st.views}>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1C5.55601 1 2.53101 5.234 1.45601 7.116C1.23501 7.502 1.125 7.696 1.136 7.984C1.149 8.272 1.27901 8.46 1.53801 8.836C2.818 10.694 6.294 15 11 15C15.706 15 19.182 10.694 20.462 8.836C20.722 8.46 20.852 8.272 20.863 7.984C20.874 7.696 20.765 7.502 20.544 7.116C19.47 5.234 16.444 1 11 1Z"
              stroke="black"
            />
            <path
              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
              stroke="black"
            />
          </svg>

          {item.views}
        </div>
      </div>
      {showComments && (
        <div className={st.comments_body}>
          {comments.map((comment) => (
            <div className={st.comment}>
              <h4>{comment.user.username}</h4>
              <p>{comment.body}</p>
              <div className={st.comment_like}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16661 12.8333V22.1667C8.16661 22.4761 8.04369 22.7728 7.8249 22.9916C7.6061 23.2104 7.30936 23.3333 6.99994 23.3333H4.66661C4.35719 23.3333 4.06044 23.2104 3.84165 22.9916C3.62286 22.7728 3.49994 22.4761 3.49994 22.1667V14C3.49994 13.6906 3.62286 13.3938 3.84165 13.1751C4.06044 12.9563 4.35719 12.8333 4.66661 12.8333H8.16661ZM8.16661 12.8333C9.40428 12.8333 10.5913 12.3417 11.4664 11.4665C12.3416 10.5913 12.8333 9.40436 12.8333 8.16668V7.00001C12.8333 6.38117 13.0791 5.78768 13.5167 5.3501C13.9543 4.91251 14.5478 4.66668 15.1666 4.66668C15.7854 4.66668 16.3789 4.91251 16.8165 5.3501C17.2541 5.78768 17.4999 6.38117 17.4999 7.00001V12.8333H20.9999C21.6188 12.8333 22.2123 13.0792 22.6499 13.5168C23.0874 13.9544 23.3333 14.5478 23.3333 15.1667L22.1666 21C21.9988 21.7157 21.6805 22.3303 21.2597 22.7511C20.8389 23.172 20.3383 23.3763 19.8333 23.3333H11.6666C10.7383 23.3333 9.84811 22.9646 9.19173 22.3082C8.53536 21.6518 8.16661 20.7616 8.16661 19.8333"
                    stroke="#1C836D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>{comment.likes}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
