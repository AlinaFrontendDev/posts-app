import { useEffect, useState } from "react";
import st from "./PostFilters.module.scss";
import axiosInstance from "../../axiosinstance";

type Props = {};

export default function PostFilters({}: Props) {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    axiosInstance.get(`/posts/tag-list`).then((res) => {
      setTags(res.data);
    });
  }, []);

  return (
    <div className={st.root}>
      <div className={st.search}>
        <input type="text" placeholder="Search posts..." />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.72647 7.91426C1.72647 4.56345 4.44284 1.84707 7.79366 1.84707C11.1445 1.84707 13.8608 4.56345 13.8608 7.91426C13.8608 11.2651 11.1445 13.9814 7.79366 13.9814C4.44284 13.9814 1.72647 11.2651 1.72647 7.91426ZM7.79366 0.231689C3.55069 0.231689 0.111084 3.67129 0.111084 7.91426C0.111084 12.1572 3.55069 15.5968 7.79366 15.5968C9.62407 15.5968 11.305 14.9567 12.6247 13.8881L18.0256 19.2889C18.341 19.6044 18.8524 19.6044 19.1678 19.2889C19.4832 18.9735 19.4832 18.4621 19.1678 18.1467L13.767 12.7459C14.8359 11.4261 15.4762 9.74494 15.4762 7.91426C15.4762 3.67129 12.0366 0.231689 7.79366 0.231689Z"
            fill="#121212"
          />
        </svg>
      </div>
      <div className={st.sort}>
        <p>Sort by:</p>
        <select name="" id="">
          <option value="default">default</option>
          <option value="likes">likes</option>
          <option value="comments">comments</option>
          <option value="views">views</option>
        </select>
      </div>
      <div className={st.sort}>
        <p>Select category:</p>
        <select name="" id="">
          <option value="default">default</option>
          {tags.slice(0, 10).map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
