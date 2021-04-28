import './App.css';
import ReactMegaMenu from "react-mega-menu" // https://stackoverflow.com/a/65629179/4307534
import Categories from "./data/menuData";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Brand</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
            <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                </ul>
            </li>
          </ul>
          </div> 
        </div> 
      </nav>
      <ReactMegaMenu 
        tolerance={50}      // optional, defaults to 100
        direction={"RIGHT"}  // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
        styleConfig={{
          menuProps: {
            style: {
              height: "503px",
              width: "200px",
              margin: "0",
              background: "#d9d9d9",
            }
          },
          contentProps: {
            style: {
              width: "800px",
              borderTop: "5px solid #6264a7",
              paddingLeft:"12px",
              paddingBottom:"24px",
            }
          },
          menuItemProps: {
            style: {
              padding: "12px",
            }
          },
          menuItemSelectedProps: {
            style: {
              padding: "12px",
              backgroundColor: "white",
            }
          },
          containerProps: {
            style: {
              marginLeft:"45px",
              boxShadow: "0 .5rem 1rem #d9d9d9",
              borderRadius: "0.25rem",
            }
          }
        }}   // defaults to an empty object. not recommended to be left blank.
        onExit={()=>{}}  // a function to be called when a mouse leaves the container
        data={Categories}        // array of data to be rendered
      />
    </div>
  );
}

export default App;
