import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import { routesMenus } from '../../routes/routeMenus';
import SidebarItem from "../SideBar/SidebarItem";
import SidebarItemCollapse from "../SideBar/SidebarItemCollapse";

const Sidebar = () => {
  return (
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {routesMenus.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
  );
};

export default Sidebar;
