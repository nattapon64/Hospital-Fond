import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function bar() {
  return (
    <div>
      <Sidebar>
        <Menu className="border-r border-b border-slate-300">
          <MenuItem>
            <Link to="/Main">หน้าหลัก</Link>{" "}
          </MenuItem>
          <SubMenu label="ข้อมูลผู้ใช้งาน">
            <MenuItem>
              <Link to="/Adduser">เพิ่มข้อมูลผู้ใช้งาน</Link>{" "}
            </MenuItem>
            <MenuItem>
              <Link to="/Edituser">แก้ไขข้อมูลผู้ใช้งาน</Link>{" "}
            </MenuItem>
            <MenuItem>ข้อมูลเจ้าหน้าที่</MenuItem>
          </SubMenu>
          <SubMenu label="รายงาน">
            <MenuItem>รายงานแยกตามประเภท</MenuItem>
            <MenuItem>รายงานค้นหาตามชื่อ</MenuItem>
            <MenuItem>รายงานยอดสรุปเจ้าหน้าที่</MenuItem>
            <MenuItem>รายงานข้อมูลเจ้าหน้าที่</MenuItem>
            <MenuItem>รายงานค่าตอบแทน</MenuItem>
            <MenuItem>รายงานสรุปประเภท OT</MenuItem>
            <MenuItem>รายงานสรุป OT แพทย์</MenuItem>
            <MenuItem>รายงานสรุปภาษี</MenuItem>
            <MenuItem>รายงานข้อมูล P4P ใหม่</MenuItem>
          </SubMenu>
          <SubMenu label="ข้อมูล">
            <MenuItem>นำข้อมูลเข้าระบบ</MenuItem>
            <MenuItem>จัดการแสดงผลข้อมูล</MenuItem>
          </SubMenu>
          <SubMenu label="สรุป">
            <MenuItem>สรุปตามประเภทเจ้าหน้าที่</MenuItem>
            <MenuItem>สรุป P4P ตามรายบุคคล</MenuItem>
            <MenuItem>สรุป P4P ตามประเภท</MenuItem>
          </SubMenu>
          <SubMenu label="อื่นๆ">
            <MenuItem>เพิ่มประเภทเงิน OT</MenuItem>
            <MenuItem>เพิ่มค่าตอบแทน OT</MenuItem>
            <MenuItem>ค่าตอบแทนตามแผนก</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default bar;
