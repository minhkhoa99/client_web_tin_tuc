import { CaretRightOutlined } from "@ant-design/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Notification.css"

const Notification = () => {

    const [notification, setNotification] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/new`)
        .then((data) => setNotification(data.data.data))
        .catch((err) => console.log(err))
    }, [])

    notification.sort((a,b) => b.id - a.id)
    const pageNotification = notification.slice(0,15)
    return(
        <div>
            <div className="notification p-2 my-3">
            <h5 ><CaretRightOutlined /> Thông báo</h5>
            </div>
        <div>
            {pageNotification.map((items) => {
                return(
                    <p className="titleNotification"><CaretRightOutlined /> {items.title}</p>
                )
            })}
        </div>
        </div>
    )
}

export default Notification