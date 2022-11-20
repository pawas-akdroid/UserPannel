import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);




export const Title = (title) => {
  const sitename = (JSON.parse(localStorage.getItem("state")))?.site?.site?.sitename
  return (document.title = `${title} - ${sitename ? sitename :"Merchant"}`)
}

export default Header;
