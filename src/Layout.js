import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav>
                <Outlet />
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="header">Header</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="nav">Nav</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="footer">Footer</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="newPost">NewPost</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="postPage">PostPage</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="missing">Missing</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout;