import EzReactTable from "ez-react-table"; //import eztable เพื่อที่จะนำค่าที่ได้จาก Url ทำเป็นตาราง
import useFetch from "./components/useFetch"; //import method useFetch
function App() {
  //**
  ตามที่ชอบเลยครับ;
  // สร้างสไดล์ css
  const makeStyles = {
    fontFamily: "cursive ",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    inset: 0,
    color: "#e66",
    backgroundColor: "#fff",
    borderRadius: ".5em",
    cursor: "pointer",
    height: "100vh",
  };

  const getsData = useFetch("https://jsonplaceholder.typicode.com/users"); //เรียกใช่ useFetch โดยใส่ link  url ที่ต้องการ

  // สร้าง columns ตามที่ต้องการโดยเลือกตามตัวเเปร จาก link ที่เรามีการใส่ไปใน useFetch()
  const columns = [
    {
      title: "Name",
      key: "name", //อิงตามตัวเเปรที่อยู่ใน linkที่เราใส่
      width: 200,
      center: true, //เซ็ต column นี้ให้อยู่ตรงกลาง

      render: (str) => {
        return <span style={{ marginLeft: "10px" }}>{str}</span>;
      },
    },
    {
      title: "Username",
      key: "username", //อิงตามตัวเเปรที่อยู่ใน linkที่เราใส่
      width: 200,
      center: true, //เซ็ต column นี้ให้อยู่ตรงกลาง
      render: (str) => {
        return <>{str.toUpperCase()}</>; //compare to uppercase
      },
    },
    {
      title: "Email",
      key: "email", //อิงตามตัวเเปรที่อยู่ใน linkที่เราใส่
      center: true, //เซ็ต column นี้ให้อยู่ตรงกลาง
      width: 200,
      render: (email) => <div>{email}</div>,
    },
    {
      title: "Website",
      key: "website", //อิงตามตัวเเปรที่อยู่ใน linkที่เราใส่
      width: 200,
      center: true, //เซ็ต column นี้ให้อยู่ตรงกลาง

      render: (web) => <div>{web}</div>,
    },
  ];

  return (
    // เรียกใช้ makeStyles ผ่าน style ใน div 
    <div style={makeStyles}> 
    {/* เรียกใช้ EzReactTable เเล้วใส่ path ของข้อมลเเต่ละตัว */}
      <EzReactTable
        cols={columns} // column
        data={getsData} //data ที่ได้มาจาก  useFetch() โดยเก็บข้อมูลไว้ในตัวเเปร Data
        title="JSON TRACKER" // หัวเรื่องของตา่ราง
        defaultSort="username" // เรียงลำดับ สามารถเปลี่ยนได้ตามต้องการโดยดูจากใน Array object columns 
        tableHeight={400} //ความสูงของตาราง
        darkMode // apply darkmode or normal 
      />
    </div>
  );
}

export default App;
