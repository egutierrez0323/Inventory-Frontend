// import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
// import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export const routeMenus: RouteType[] = [
  {
    index: true,
    element: <h1>Home</h1>,
    state: "home"
  },
  {
    path: "/installation",
    element: <h1>installation</h1>,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/cosas",
    element: <h1>COSAS</h1>,
    state: "cosas",
    sidebarProps: {
      displayText: "Cosas",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <h1>DASHBOARD</h1>,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      // {
      //   index: true,
      //   element: <h1>asdasdasd</h1>,
      //   state: "dashboard.index"
      // },
      {
        path: "/dashboard/default",
        element: <h1>DEFAULT</h1>,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <h1>fhtyhertj</h1>,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytic"
        }
      },
      {
        path: "/dashboard/saas",
        element: <h1>fasgokreioo</h1>,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <h1></h1>,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <h1></h1>,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      {
        path: "/component/button",
        element: <h1></h1>,
        state: "component.button",
        sidebarProps: {
          displayText: "Button"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <h1></h1>,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <h1></h1>,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];
