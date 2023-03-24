import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/navbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import "./contact.scss";
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
export const Contact = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="contact">
        <h1>Thông tin liên hệ</h1>
        <h2>Điện thoại: 0283 5170 598 - 0908 699 986 - 0903 638 421</h2>
        <h2>
          Zalo: Vui lòng chọn tại <a href="https://zalo.me/0908699986">đây</a>
        </h2>
        <h2>Email: nguyetthu@canthaitoan.com</h2>
        <h1>Danh sách cửa hàng</h1>
        <hr />
        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Cửa hàng 1" index={0} />
              <Tab label="Cửa hàng 2" index={1} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <p>
              Địa chỉ: 183/14A Hoàng Hoa Thám, phường 6, quận Bình Thạnh, Thành
              phố Hồ Chí Minh
            </p>
            <iframe
              title="myframe"
              width="850"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=781&amp;height=498&amp;hl=en&amp;q=183/14A%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m,%20Ph%C6%B0%E1%BB%9Dng%206,%20B%C3%ACnh%20Th%E1%BA%A1nh,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%20Ho%20Chi%20Minh%20City+(1st)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p>
              Địa chỉ: 108 Hùng Vương, huyện Hòa Thành, Thành phố Tây Ninh, Tỉnh
              Tây Ninh
            </p>
            <iframe
              title="myframe2"
              width="850"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=781&amp;height=498&amp;hl=en&amp;q=108%20H%C3%B9ng%20V%C6%B0%C6%A1ng,%20TT.%20Ho%C3%A0%20Th%C3%A0nh,%20Ho%C3%A0%20Th%C3%A0nh,%20T%C3%A2y%20Ninh%20t%C3%A2y%20ninh+(c%C6%A1%20s%E1%BB%9F%20l%C3%BD%20b%E1%BA%A3y)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};
