// Customhook API
import { useState, useEffect } from "react";


//customHook มี รับ url เป้น URL
const useFetch = (url) => { 
  const [data, setData] = useState([]); // สร้างตัวเเปร data เเละ function setData เก็บเป็น Array

  const fetched = async () => {//สร้าง async function fetched
	//check code with try catch
    try {
      const req = await fetch(url); //fetch url
      const res = await req.json(); //เเปลง json เป็น javascript object โดยผ่าน json()
      setData(res); //เรียกใช้function setData เเล้วส่งdataเป็น อาร์กิวเมนต์ เพื่อนำไปเเสดงผ่าน ตัวเเปร data
    } catch (error) {
	    console.error(error.message) // catch error
    }
  };

  //เรียกใช้ useEffect โดยรับ props url เพื่อที่เวลามีการเปลี่ยนเเปลงค่าใน url จะทำให้ function fetched มีการเปลี่ยนค่าตามไปด้วย
  useEffect(() => {
    fetched(); //เรียกใช้ function fetched
  }, [url]);// props is url

  return data; //ส่งค่า data ที่ได้มาทั้้งหมดไปยัง useFetch เพื่อใช้เป็น method
};

export default useFetch; 
