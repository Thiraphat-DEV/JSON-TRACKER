import EzReactTable from "ez-react-table";
import useFetch from "./useFetch";
function App() {
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

  const getsData = useFetch("https://jsonplaceholder.typicode.com/users");

  const columns = [
    {
      title: "Name",
      key: "name",
      width: 200,
      center: true,

      render: (str) => {
        return <span style={{ marginLeft: "10px" }}>{str}</span>;
      },
    },
    {
      title: "Username",
      key: "username",
      width: 200,
      center: true,
      render: (str) => {
        return <>{str.toUpperCase()}</>;
      },
    },
    {
      title: "Email",
      key: "email",
      center: true,

      width: 200,
      render: (email) => <div>{email}</div>,
    },
    {
      title: "Website",
      key: "website",
      width: 200,
      center: true,

      render: (web) => <div>{web}</div>,
    },
  ];

  return (
    <div style={makeStyles}>
      <EzReactTable
        cols={columns}
        data={getsData}
        title="JSON TRACKER"
        defaultSort="username"
        tableHeight={400}
        darkMode
      />
    </div>
  );
}

export default App;
