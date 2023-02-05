// import React, { useEffect } from "react";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import { Navigation, Search } from "./index";
// import Banner from "./Banner";
// import { Intro, Contact } from "../../components";
// import * as actions from "../../store/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { apiGetCurrent } from "../../services";

// function Home() {
//   const dispatch = useDispatch();

//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const { currentData } = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchCurrent = async () => {
//       const response = await apiGetCurrent();
//       console.log(response);
//     };

//     isLoggedIn && fetchCurrent();
//   }, [isLoggedIn]);
//   useEffect(() => {
//     dispatch(actions.getPrices());
//     dispatch(actions.getAreas());
//     dispatch(actions.getProvinces());
//   }, []);

//   useEffect(() => {
//     isLoggedIn && dispatch(actions.getCurrent());
//   }, [isLoggedIn]);

//   console.log(currentData);

//   return (
//     <div className="w-full flex gap-6 flex-col items-center h-full">
//       <Banner></Banner>
//       <Header />
//       <Navigation></Navigation>
//       {isLoggedIn && <Search />}
//       <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
//         <Outlet />
//       </div>
//       <Intro />
//       <Contact />
//       <div className="h-[500px]"></div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Banner from "./Banner";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../untils/constant";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const location = useLocation();

  const navRef = useRef();
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset >= 134) {
        navRef.current.style.cssText = `
      position: fixed; 
      top: 0; 
      left: 0; 
      right: 0; 
      z-index: 50;`;
      } else {
        navRef.current.style.cssText = `
      width: 100%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
      <Banner></Banner>
      <Header />
      <div className="w-full" ref={navRef}>
        <Navigation />
      </div>

      {
        isLoggedIn &&
          location.pathname !== `/${path.CONTACT}` &&
          location.pathname?.includes(path.DETAIL)
        // && <Search />
      }
      <div className="w-4/5 lg:w-4/5 flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-50px]"></div>
    </div>
  );
};

export default Home;
