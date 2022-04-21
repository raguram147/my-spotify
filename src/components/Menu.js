import React, { useEffect } from "react";

function Menu({ title, menuObj }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".menu-container ul")
      .querySelectorAll("li");
      function changeActive(){
          allLi.forEach((n)=>n.classList.remove("active"));
          this.classList.add("active");
      }
      allLi.forEach((n)=>n.addEventListener("click",changeActive));
  }, []);
  return (
    <div className="menu-container">
      <p className="title">{title}</p>
      <ul>
        {menuObj &&
          menuObj.map((x) => (
            <li key={x.id}>
              <a href="/">
                <i>{x.icon}</i>
                <span>{x.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
