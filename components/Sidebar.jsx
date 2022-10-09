import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/images/bootsplash_logo.png";

import Link from "next/link";
import {
  RiCloseLine,
  RiLogoutBoxRLine,
  RiHeartPulseFill,
  RiUser3Fill,
  RiHealthBookFill,
  RiPieChartFill,
  RiMenuFill,
} from "react-icons/ri";

const menuItems = [
  {
    title: "Perfil",
    path: "/profile",
    icon: RiUser3Fill,
    index: 1,
  },
  {
    title: "Pacientes",
    path: "/home",
    icon: RiHeartPulseFill,
    index: 2,
  },
  {
    title: "Reportes",
    path: "/reports",
    icon: RiPieChartFill,
    index: 3,
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <nav
        className={
          sidebar ? "nav-menu text-white " : "nav-menu active text-white"
        }
      >
        <ul className="nav-menu-items">
          {sidebar ? (
            <li className="d-flex justify-content-end pt-2">
              <RiCloseLine style={{ fontSize: 30 }} onClick={showSideBar} />
            </li>
          ) : (
            <li className="link-bar-menu py-4">
              <RiMenuFill style={{ fontSize: 30 }} onClick={showSideBar} />
            </li>
          )}
          {/* <li className="nav-text-logo ">
            <Link href="/">
              <div className="d-flex justify-content-evenly py-2">
                <div >
                  <Image src={logo} alt="Logo Header" objectFit="contain" />
                </div>
                {sidebar && (
                  <div className="pt-4 ">
                    <p className="h4 ">
                      <strong>BettiOn</strong>
                    </p>
                    <p>Admin</p>
                  </div>
                )}
              </div>
            </Link>
          </li> */}
          {menuItems.map(({ icon: Icon, ...item }) => {
            return (
              <li key={item.index} className="nav-text">
                <Link href={item.path}>
                  <div className="row py-2">
                    <div className="col-2">
                      <Icon style={{ fontSize: 30 }} />
                    </div>
                    {sidebar && (
                      <div className="col">
                        <span>{item.title}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
          <li className="nav-text">
            <div className="row py-2">
              <div className="col-2">
                <RiLogoutBoxRLine
                  style={{ fontSize: 30 }}
                  onClick={showSideBar}
                />
              </div>
              {sidebar && (
                <div className="col">
                  <span>Cerrar Sesion</span>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
