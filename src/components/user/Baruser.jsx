import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function Baruser() {
  return (
    <div>
      <Sidebar>
        <Menu className="border-r border-b border-slate-300">
          <MenuItem>
            <Link to="/#">หน้าหลัก</Link>{" "}
          </MenuItem>
          <MenuItem>เปลี่ยนรหัสผ่าน</MenuItem>
          <MenuItem>พิมพ์สลิปเงินเดือน</MenuItem>
          <MenuItem>รายงานข้อมูลค่าตอบแทน</MenuItem>
          <MenuItem>เงินเดือนย้อนหลัง</MenuItem>
          <MenuItem>รายงานภาษี</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Baruser;
