import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let BreadcrumbsPath;

  return (
    <div className={pathname.length > !0 && "flex justify-center gap-2 border p-2 my-2"}>
      {pathname.length > !0 && <Link to={"/"} className="underline">Home</Link>}
      {pathnames.map((name, index) => {
        BreadcrumbsPath += `/${name}`;
        const lastIndex = pathnames.length === index + 1;

        return lastIndex ? (
          <span key={index} className="flex justify-center gap-2 items-center">
            <MdOutlineArrowForwardIos /> <span>{name}</span>
          </span>
        ) : (
          <Link to={`/${name}`} key={index} className="flex justify-center gap-2 items-center">
            <MdOutlineArrowForwardIos /> <span className="underline">{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
