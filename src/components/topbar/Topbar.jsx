import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.css'

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://pickaface.net/gallery/avatar/jquan0755a199bfcb71d.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
