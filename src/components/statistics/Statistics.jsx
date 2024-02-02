import axios from "axios"
import { useEffect, useState } from "react"

const Statistics = () => {
  const [log, setLog] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/log-length`)
        .then((data) => setLog(data.data) )
        .catch((err) => console.log(err))
      }, [])
    return (
        <div>

        <div className="statistical py-2 mb-3">
          <h6 className="m-0">THÔNG KÊ LƯỢT TRUY CẬP</h6>
        </div>
        <p>Tất cả: {log}</p>
      </div>
    )
}

export default Statistics