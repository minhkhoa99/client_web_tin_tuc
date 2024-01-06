import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

const MediaDetail = () => {
    const {id} = useParams()
    const [dataDetail, setDataDetail] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8000/new/${id}`)
        .then((data) => setDataDetail(data.data.data))
        .catch((err) => console.log(err))
    }, [id])
    return(
        <div className='container-detail'>
            <h3>{dataDetail?.title}</h3>
            <p>{dataDetail?.createdAt}</p>
            <p>{dataDetail?.content}</p>
        </div>
    )
}

export default MediaDetail