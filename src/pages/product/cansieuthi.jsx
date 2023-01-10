import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Top8 } from "./top8";
import "./cansieuthi.scss";
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export const Cansieuthi = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" index={0} />
          <Tab label="Item Two" index={1} />
          <Tab label="Item Three" index={2} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
        <Top8 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, harum?
          Qui enim molestiae error, omnis delectus sapiente harum, nulla porro
          ex laboriosam aliquid quod aspernatur eligendi. Obcaecati distinctio
          voluptates voluptas.
        </p>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
      </TabPanel>
    </Box>
  );
};
