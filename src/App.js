import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Route, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { AppTopbar } from "./components/AppTopbar";
import { AppMenu } from "./components/AppMenu";
// import { AppProfile } from "./components/AppProfile";
import { Table } from "./components/Table";
import { CustomTable } from "./components/CustomTable";
import { BarCharts } from "./components/BarCharts";
import { LineChart } from "./components/LineChart";
import { ScatterChart } from "./components/ScatterChart";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import "./layout/flags/flags.css";
import "./layout/layout.scss";
import "./App.scss";
import { Charts } from "./components/Charts";

const App = () => {
  const [layoutMode, setLayoutMode] = useState("static");
  const [layoutColorMode, setLayoutColorMode] = useState("dark");
  const [staticMenuInactive, setStaticMenuInactive] = useState(false);
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [inputStyle, setInputStyle] = useState("outlined");
  const [ripple, setRipple] = useState(false);
  const sidebar = useRef();
  const history = useHistory();
  let menuClick = false;

  const menu = [
    {
      label: "Dashboards",
      icon: "pi pi-fw pi-home",
      items: [
        // {
        //   label: "Custom Table",
        //   icon: "pi pi-fw pi-table",
        //   to: "/",
        // },

        {
          label: "Export Table",
          icon: "pi pi-fw pi-table",
          to: "/exporttable",
        },
      ],
    },
    {
      label: "Chatrs",
      icon: "pi pi-fw pi-sitemap",
      items: [
        { label: "Bar Chart", icon: "pi pi-fw pi-chart-bar", to: "/barchart" },
        {
          label: "Line Chart",
          icon: "pi pi-fw pi-chart-line",
          to: "/linechart",
        },
        {
          label: "Scatter Chart",
          icon: "pi pi-fw pi-chart-bar",
          to: "/scatterchart",
        },
        { label: "Charts", icon: "pi pi-fw pi-chart-line", to: "/charts" },

        // {
        //   label: "Form Layout",
        //   icon: "pi pi-fw pi-id-card",
        //   to: "/formlayout",
        // },
        // { label: "Input", icon: "pi pi-fw pi-check-square", to: "/input" },
        // {
        //   label: "Float Label",
        //   icon: "pi pi-fw pi-bookmark",
        //   to: "/floatlabel",
        // },
        // {
        //   label: "Invalid State",
        //   icon: "pi pi-fw pi-exclamation-circle",
        //   to: "/invalidstate",
        // },
        // { label: "Button", icon: "pi pi-fw pi-mobile", to: "/button" },
        // { label: "Table", icon: "pi pi-fw pi-table", to: "/table" },
        // { label: "List", icon: "pi pi-fw pi-list", to: "/list" },
        // { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/tree" },
        // { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/panel" },
        // { label: "Overlay", icon: "pi pi-fw pi-clone", to: "/overlay" },
        // { label: "Menu", icon: "pi pi-fw pi-bars", to: "/menu" },
        // { label: "Message", icon: "pi pi-fw pi-comment", to: "/messages" },
        // { label: "File", icon: "pi pi-fw pi-file", to: "/file" },
        // { label: "Misc", icon: "pi pi-fw pi-circle-off", to: "/misc" },
      ],
    },
    // {
    //   label: "Utilities",
    //   icon: "pi pi-fw pi-globe",
    //   items: [
    //     { label: "Display", icon: "pi pi-fw pi-desktop", to: "/display" },
    //     {
    //       label: "Elevation",
    //       icon: "pi pi-fw pi-external-link",
    //       to: "/elevation",
    //     },
    //     { label: "Flexbox", icon: "pi pi-fw pi-directions", to: "/flexbox" },
    //     { label: "Icons", icon: "pi pi-fw pi-search", to: "/icons" },
    //     { label: "Grid System", icon: "pi pi-fw pi-th-large", to: "/grid" },
    //     { label: "Spacing", icon: "pi pi-fw pi-arrow-right", to: "/spacing" },
    //     {
    //       label: "Typography",
    //       icon: "pi pi-fw pi-align-center",
    //       to: "/typography",
    //     },
    //     { label: "Text", icon: "pi pi-fw pi-pencil", to: "/text" },
    //   ],
    // },
    // {
    //   label: "Pages",
    //   icon: "pi pi-fw pi-clone",
    //   items: [
    //     { label: "Crud", icon: "pi pi-fw pi-user-edit", to: "/crud" },
    //     {
    //       label: "Calendar",
    //       icon: "pi pi-fw pi-calendar-plus",
    //       to: "/calendar",
    //     },
    //     { label: "Timeline", icon: "pi pi-fw pi-calendar", to: "/timeline" },
    //     { label: "Empty Page", icon: "pi pi-fw pi-circle-off", to: "/empty" },
    //   ],
    // },
    // {
    //   label: "Menu Hierarchy",
    //   icon: "pi pi-fw pi-search",
    //   items: [
    //     {
    //       label: "Submenu 1",
    //       icon: "pi pi-fw pi-bookmark",
    //       items: [
    //         {
    //           label: "Submenu 1.1",
    //           icon: "pi pi-fw pi-bookmark",
    //           items: [
    //             { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
    //             { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
    //             { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
    //           ],
    //         },
    //         {
    //           label: "Submenu 1.2",
    //           icon: "pi pi-fw pi-bookmark",
    //           items: [
    //             { label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
    //             { label: "Submenu 1.2.2", icon: "pi pi-fw pi-bookmark" },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       label: "Submenu 2",
    //       icon: "pi pi-fw pi-bookmark",
    //       items: [
    //         {
    //           label: "Submenu 2.1",
    //           icon: "pi pi-fw pi-bookmark",
    //           items: [
    //             { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
    //             { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
    //             { label: "Submenu 2.1.3", icon: "pi pi-fw pi-bookmark" },
    //           ],
    //         },
    //         {
    //           label: "Submenu 2.2",
    //           icon: "pi pi-fw pi-bookmark",
    //           items: [
    //             { label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" },
    //             { label: "Submenu 2.2.2", icon: "pi pi-fw pi-bookmark" },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: "Documentation",
    //   icon: "pi pi-fw pi-question",
    //   command: () => {
    //     window.location = "#/documentation";
    //   },
    // },
    // {
    //   label: "View Source",
    //   icon: "pi pi-fw pi-search",
    //   command: () => {
    //     window.location = "https://github.com/primefaces/sigma-react";
    //   },
    // },
  ];

  const wrapperClass = classNames("layout-wrapper", {
    "layout-overlay": layoutMode === "overlay",
    "layout-static": layoutMode === "static",
    "layout-static-sidebar-inactive":
      staticMenuInactive && layoutMode === "static",
    "layout-overlay-sidebar-active":
      overlayMenuActive && layoutMode === "overlay",
    "layout-mobile-sidebar-active": mobileMenuActive,
    "p-input-filled": inputStyle === "filled",
    "p-ripple-disabled": ripple === false,
  });

  const sidebarClassName = classNames("layout-sidebar", {
    "layout-sidebar-dark": layoutColorMode === "dark",
    "layout-sidebar-light": layoutColorMode === "light",
  });

  const logo =
    layoutColorMode === "dark"
      ? "assets/layout/images/logo-white.svg"
      : "assets/layout/images/logo.svg";

  const onMenuItemClick = (event) => {
    if (!event.item.items) {
      setOverlayMenuActive(false);
      setMobileMenuActive(false);
    }
  };

  const isDesktop = () => {
    return window.innerWidth > 1024;
  };

  const onToggleMenu = (event) => {
    menuClick = true;

    if (isDesktop()) {
      if (layoutMode === "overlay") {
        setOverlayMenuActive((prevState) => !prevState);
      } else if (layoutMode === "static") {
        setStaticMenuInactive((prevState) => !prevState);
      }
    } else {
      setMobileMenuActive((prevState) => !prevState);
    }
    event.preventDefault();
  };

  const onWrapperClick = (event) => {
    if (!menuClick) {
      setOverlayMenuActive(false);
      setMobileMenuActive(false);
    }
    menuClick = false;
  };

  const onSidebarClick = () => {
    menuClick = true;
  };

  const isSidebarVisible = () => {
    if (isDesktop()) {
      if (layoutMode === "static") return !staticMenuInactive;
      else if (layoutMode === "overlay") return overlayMenuActive;
      else return true;
    }

    return true;
  };

  return (
    <div className={wrapperClass} onClick={onWrapperClick}>
      <AppTopbar onToggleMenu={onToggleMenu} />

      <CSSTransition
        classNames="layout-sidebar"
        timeout={{ enter: 200, exit: 200 }}
        in={isSidebarVisible()}
        unmountOnExit
      >
        <div
          ref={sidebar}
          className={sidebarClassName}
          onClick={onSidebarClick}
        >
          <div
            className="layout-logo"
            style={{
              cursor: "pointer",
            }}
            onClick={() => history.push("/")}
          >
            <img
              alt="Logo"
              src={logo}
              style={{
                width: "200px",
                margin: "0px 0px 15px 0px",
              }}
            />
          </div>
          {/* <AppProfile /> */}
          <AppMenu model={menu} onMenuItemClick={onMenuItemClick} />
        </div>
      </CSSTransition>

      {/* <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} /> */}

      <div className="layout-main">
        <Route path="/" exact component={CustomTable} />
        <Route path="/exporttable" exact component={Table} />
        <Route path="/barchart" component={BarCharts} />
        <Route path="/linechart" component={LineChart} />
        <Route path="/scatterChart" component={ScatterChart} />
        <Route path="/charts" component={Charts} />

        {/* <Route path="/formlayout" component={FormLayoutDemo} />
                <Route path="/input" component={InputDemo} />
                <Route path="/floatlabel" component={FloatLabelDemo} />
                <Route path="/invalidstate" component={InvalidStateDemo} />
                <Route path="/button" component={ButtonDemo} />
                <Route path="/table" component={TableDemo} />
                <Route path="/list" component={ListDemo} />
                <Route path="/tree" component={TreeDemo} />
                <Route path="/panel" component={PanelDemo} />
                <Route path="/overlay" component={OverlayDemo} />
                <Route path="/menu" component={MenuDemo} />
                <Route path="/messages" component={MessagesDemo} />
                <Route path="/file" component={FileDemo} />
                <Route path="/chart" component={ChartDemo} />
                <Route path="/misc" component={MiscDemo} />
                <Route path="/display" component={DisplayDemo} />
                <Route path="/elevation" component={ElevationDemo} />
                <Route path="/flexbox" component={FlexBoxDemo} />
                <Route path="/icons" component={IconsDemo} />
                <Route path="/grid" component={GridDemo} />
                <Route path="/spacing" component={SpacingDemo} />
                <Route path="/typography" component={TypographyDemo} />
                <Route path="/text" component={TextDemo} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/timeline" component={TimelineDemo} />
                <Route path="/crud" component={Crud} />
                <Route path="/empty" component={EmptyPage} />
                <Route path="/documentation" component={Documentation} /> */}
      </div>
    </div>
  );
};

export default App;
