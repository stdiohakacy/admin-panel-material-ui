import { Visibility } from '@material-ui/icons'
import './widgetSm.css'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img 
                        src="https://www.investo.vn/wp-content/uploads/2021/08/5602888_cover_Apple_timcook_ceo_tinhte.jpg" 
                        alt="" 
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img 
                        src="https://www.investo.vn/wp-content/uploads/2021/08/5602888_cover_Apple_timcook_ceo_tinhte.jpg" 
                        alt="" 
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img 
                        src="https://www.investo.vn/wp-content/uploads/2021/08/5602888_cover_Apple_timcook_ceo_tinhte.jpg" 
                        alt="" 
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
