import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
// import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaUserTie, FaBars } from 'react-icons/fa';
import {
    BsStarFill, BsCreditCard2BackFill, BsFillHouseFill,
    BsFillCartFill, BsFillInboxesFill, BsFillGearFill
} from "react-icons/bs";
import { BsPower } from 'react-icons/bs';

const Organization = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const admin = 1;
    const activeStyle = {
        fontWeight: "bold",
        color: "#A48484",
    }

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className={`app flex ${toggled ? 'toggled' : ''}`}>
            <ProSidebar
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
                style={{ height: '102vh' }}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {/* <img src={user.photoURL || blankImg} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                        <span style={{ fontSize: 18, fontFamily: 'sans-serif' }}> {user?.displayName?.split(' ')[0]}</span> */}
                        Name
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">

                        <MenuItem icon={<BsFillHouseFill />}> <NavLink activeStyle={activeStyle} to={'/home'}>Home</NavLink></MenuItem>
                        {!admin ?
                            (
                                <>
                                    {/* <MenuItem icon={<BsFillCartFill />}> <NavLink activeStyle={activeStyle} to={`${url}/my-orders`}>My Orders</NavLink></MenuItem>
                                    <MenuItem icon={<BsCreditCard2BackFill />}> <NavLink activeStyle={activeStyle} to={`${url}/payment`}>Payment</NavLink></MenuItem>
                                    <MenuItem icon={<BsStarFill />}> <NavLink activeStyle={activeStyle} to={`${url}/add-review`}>Add Review</NavLink></MenuItem> */}
                                </>
                            ) : (
                                <>
                                    <MenuItem icon={<BsFillCartFill />}> <Link activeStyle={activeStyle} to={`admin/users`}>Manage Event</Link></MenuItem>
                                    <MenuItem icon={<BsFillCartFill />}> <Link activeStyle={activeStyle} to={`admin/make-admin`}>Make Volunteer</Link></MenuItem>
                                    <MenuItem icon={<BsFillCartFill />}> <Link activeStyle={activeStyle} to={`admin/make-teacher`}>Make Teacher</Link></MenuItem>
                                    <MenuItem icon={<FaUserTie />}> <Link activeStyle={activeStyle} to={`admin/add-tutor`}>Create Event</Link></MenuItem>
                                    <MenuItem icon={<BsFillInboxesFill />}> <Link activeStyle={activeStyle} to={`admin/manage-tutor-ads`}>Manage Event</Link></MenuItem>
                                    <MenuItem icon={<BsFillInboxesFill />}> <Link activeStyle={activeStyle} to={`admin/manage-tutor-books`}>Relief Receiver</Link></MenuItem>
                                </>
                            )
                        }

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '40px 24px',
                        }}
                    >
                        <button className='text-white bg-red-700 px-4 py-2 flex items-center'
                        // onClick={signOut}
                        ><BsPower className='mr-2' /> Logout</button>
                    </div>
                </SidebarFooter>
            </ProSidebar>


            {/* main */}
            <main style={{ width: '100%' }}>
                <nav className='bg-[#1D1D1D] text-white p-4'>
                    <div >
                        <div className="lg:hidden flex items-center" onClick={() => handleToggleSidebar(!toggled)}>
                            <FaBars className="mb-1 mr-2" /> <span> Dashboard</span>
                        </div>
                        <div className="hidden lg:flex lg:items-center" onClick={() => handleCollapsedChange(!collapsed)}>
                            <FaBars className="mb-1 mr-2" /> <span> Dashboard</span>
                        </div>
                    </div>
                </nav>
                <section className="p-4" style={{ minHeight: '90vh' }}>
                    <Outlet></Outlet>
                    {/* <h1>hello orgnization</h1> */}
                </section>
            </main>
        </div>
    );
};

export default Organization;