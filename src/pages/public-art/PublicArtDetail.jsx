import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import ReactPlayer from 'react-player';

const PublicArtDetail = () => {
    const {id} = useParams()
    const [dataDetail, setDataDetail] = useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/upload-video/${id}`)
        .then((data) => setDataDetail(data.data.data))
        .catch((err) => console.log(err))
    }, [id])


    return(
        <div className='container-detail mx-3'>
            <h3 className='my-5'>{dataDetail?.title}</h3>
            <ReactPlayer className="w-100 h-100" url={`${process.env.REACT_APP_API}/${dataDetail?.link}`} controls
        />
            <p>{dataDetail?.createdAt}</p>

        </div>
    )
}

export default PublicArtDetail