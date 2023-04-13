import React from "react";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Layout = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={1}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today :{format(new Date(), " do MMMM Y")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Typography variant="h5" sx={{ padding: "16px" }}>
          My <span style={{ color: "#d500f9" }}>N</span>otes
        </Typography>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                button
                onClick={() => navigate(item.path)}
                key={item.text}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Layout;
