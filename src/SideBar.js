import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import './SideBar.css'
import SidebarChat from "./SidebarChat"
import db from "./firebase"
import { useStateValue } from "./StateProvider"

/*rfce to have the shortcut*/
/* npm install @material-ui/core
npm install @material-ui/icons
https://material-ui.com/components/material-icons/
*/
function SideBar({id, name, addNewChat}) {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data : doc.data()
                }))
            )
        ));
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className='sidebar'>
            <div className = 'sidebar__header'>
                <IconButton>
                    <Avatar src= {user?.photoURL} />
                </IconButton>
                <div className = 'sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

                </div>
            </div>
            <div className = 'sidebar__search'>
                <div className = 'sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder= "Search or start new chat" type="text" />
                </div>
            </div>
            <div className = 'sidebar__chat'>
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key ={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default SideBar;
