import { useEffect, useState } from "react";
import st from "./PostFilters.module.scss";
import axiosInstance from "../../axiosinstance";

type Props = {
  setSearch: (value:string) => void;
  setSort: (value:string) => void;
  setCategory: (value:string) => void
};

export default function PostFilters({setSearch, setSort, setCategory}: Props) {
  const [tags, setTags] = useState<string[]>([]);
  const [formValues, setFormValues] = useState<{search: string, sort: string, category: string}>({search: '', sort: '', category:''});

  function handleChange (event: React.SyntheticEvent) {
    const elem = event.target as HTMLInputElement;
    const value = elem.value;
    const name = elem.name;

    setFormValues((prev) => ({
      ...prev, [name]: value
    }))
  }

  function clearFilters() {
    setSearch('');
    setSort('');
    setCategory('');
    setFormValues({search: '', sort: '', category:''})
  }

  function applyFilters() {
    setSearch(formValues.search);
    setSort(formValues.sort);
    setCategory(formValues.category);
  }

  useEffect(() => {
    axiosInstance.get(`/posts/tag-list`).then((res) => {
      setTags(res.data);
    });
  }, []);

  return (
    <div className={st.root}>
      <div className={st.search}>
        <input type="text" placeholder="Search posts..." name="search" value={formValues.search} onChange={handleChange}/>
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
        <select id="" name="sort" value={formValues.sort} onChange={handleChange}>
          <option value="">default</option>
          <option value="title">title</option>
          <option value="body">body</option>
          <option value="views">views</option>
        </select>
      </div>
      <div className={st.sort}>
        <p>Select category:</p>
        <select name="category" value={formValues.category} onChange={handleChange} id="">
          <option value="">default</option>
          {tags.slice(0, 10).map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className={st.buttons}>
        <button onClick={applyFilters}>Apply</button>
        <button className={st.cancel} onClick={clearFilters}>Cancel</button>
      </div>
    </div>
  );
}
