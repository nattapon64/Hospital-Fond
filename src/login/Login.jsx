import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from 'axios'
import Swal from "sweetalert2";

// const hdlSubmit = () => {
//     window.location.href="/Main"
// }

function Login() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value}))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      const rs = await axios.post('http://localhost:8000/auth/login', input)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8000/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}`}
      });
      if (rs1.data !== "") {
        Swal.fire({
          title: "Login Success",
          text: "Login web site success",
         icon: "success",
         preConfirm: () => {
          setUser(rs1.data)
         } 
        })
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  
  return (
    <div>
      <div>
        <div className="flex items-center justify-center drop-shadow-[13px_2px_14px_rgba(0,0,0,0.25)]">
          <div className="text-center bg-teal-300 my-40 w-[35%] h-[350px] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">ลงทะเบียนเข้าใช้งาน</h2>
            <div className="flex flex-col mb-4">
              <label className="text-left mb-2">Username (CID) :</label>
              <input
                className="px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                type="text"
                placeholder="ชื่อผู้ใช้"
                name="username"
                value={input.username}
                onChange={hdlChange}
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-left mb-2">Password :</label>
              <input
                className="px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                type="password"
                placeholder="รหัสผ่าน"
                name="password"
                value={input.password}
                onChange={hdlChange}
              />
            </div>
            <button onClick={hdlSubmit} className="bg-blue-500 hover:bg-white hover:text-teal-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-100">
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          *** การใช้งานครั้งแรกใช้เลขประจำประชาชนเป็นค่าเริ่มต้น ***
          <div className="hover:text-red-500">
            <Link to="/Lawdocument">ความผิดเกี่ยวกับเอกสาร</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
