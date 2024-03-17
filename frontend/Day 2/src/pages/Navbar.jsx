import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import GroupIcon from '@rsuite/icons/legacy/Group';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import ExitIcon from '@rsuite/icons/legacy/Exit';
import AddressbookIcon from '@rsuite/icons/legacy/AddressBook';
import PeoplesMapIcon from '@rsuite/icons/legacy/PeoplesMap';
import BookIcon from '@rsuite/icons/legacy/Book';
import { Link } from "react-router-dom";


import 'rsuite/dist/rsuite.min.css'
const CustomNavbar=()=>{
    return(
        <Navbar>
          {/* <img src="src/assets/images/logo.png" alt="" /> */}
    <Navbar.Brand href="#"><img src="src/assets/images/logo.png" alt="" width={30} height={30}/>EduAdmit Connect</Navbar.Brand>
    <Nav>
     <Nav.Item icon={<HomeIcon color="#F86F03"/>}><Link to="/home"> Home</Link></Nav.Item>
      <Nav.Item icon={<GroupIcon color="#F86F03"/>}><Link to="/student">Student</Link></Nav.Item>
      <Nav.Item icon={<PeoplesMapIcon color="#F86F03"/>}><Link to="/view-institute">Institute</Link></Nav.Item>
       <Nav.Item icon={< BookIcon color="#F86F03"/>}><Link to="/view-courses">Courses</Link></Nav.Item>
      {/* <Nav.Item icon={< AddressbookIcon color="#F86F03"/>}>Contact</Nav.Item> */}
      
    </Nav>
    <Nav pullRight>
    <Nav.Menu icon={<CogIcon color="#F86F03"/>} title="Settings">
        <Nav.Item icon={<AvatarIcon color="#F86F03"/>}><Link to="/profile">Profile</Link></Nav.Item>
        <Nav.Item icon={<ExitIcon color="#F86F03"/>}><Link to="/login">Log Out</Link></Nav.Item>
        </Nav.Menu>
      {/* <Nav.Item icon={<CogIcon />}>Settings</Nav.Item> */}
    </Nav>
  </Navbar>
    );

}
export default CustomNavbar