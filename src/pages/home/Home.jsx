import Chart from '../../components/chart/Chart'
import Information from '../../components/information/Information'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import { userData } from '../../dummyData'
import './home.css'
import React from 'react'

export default function Home() {
    return (
        <div className="home">
            <Information />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
