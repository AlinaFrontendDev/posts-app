import React, { useEffect, useState } from "react";
import st from "./Post.module.scss";
import profile from "../../assets/img/profile.svg";
import { Post, User } from "../../types";
import axiosInstance from "../../axiosinstance";

type Props = {
  item: Post;
};

export default function PostItem({ item }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axiosInstance.get(`/users/${item.userId}`).then((res) => {
      setUser(res.data);
    });
  }, [item.userId]);

  if (!user) {
    return <div></div>;
  }

  return (
    <div className={st.root}>
      <div className={st.header}>
        <img src={user.image} alt="" />
        <div>
          <h3> {user.firstName} {user.lastName} </h3>
          <p> {user.company.name} </p>
        </div>
      </div>
      <div className={st.body}>{item.body}</div>
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

        <div>
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
        </div>

        <div className={st.views}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.80616 5.33366C5.80616 4.27511 6.66428 3.41699 7.72282 3.41699C8.78137 3.41699 9.63949 4.27511 9.63949 5.33366C9.63949 6.3922 8.78137 7.25033 7.72282 7.25033C6.66428 7.25033 5.80616 6.3922 5.80616 5.33366ZM7.72282 1.91699C5.83585 1.91699 4.30616 3.44669 4.30616 5.33366C4.30616 7.22063 5.83585 8.75033 7.72282 8.75033C9.6098 8.75033 11.1395 7.22063 11.1395 5.33366C11.1395 3.44669 9.6098 1.91699 7.72282 1.91699ZM5.0342 11.2424C5.39365 10.883 5.88116 10.681 6.38949 10.681H9.05616C9.56449 10.681 10.052 10.883 10.4114 11.2424C10.7709 11.6019 10.9728 12.0894 10.9728 12.5977V13.931C10.9728 14.3452 11.3086 14.681 11.7228 14.681C12.137 14.681 12.4728 14.3452 12.4728 13.931V12.5977C12.4728 11.6915 12.1129 10.8225 11.4721 10.1817C10.8314 9.541 9.96231 9.18103 9.05616 9.18103H6.38949C5.48333 9.18103 4.61429 9.541 3.97354 10.1817C3.33279 10.8225 2.97282 11.6915 2.97282 12.5977V13.931C2.97282 14.3452 3.30861 14.681 3.72282 14.681C4.13704 14.681 4.47282 14.3452 4.47282 13.931V12.5977C4.47282 12.0894 4.67476 11.6019 5.0342 11.2424Z"
              fill="#605F5F"
            />
          </svg>
          {item.views}
        </div>
      </div>
    </div>
  );
}
