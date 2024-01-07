import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MediaDetail = () => {
    const {id} = useParams()
    const [dataDetail, setDataDetail] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8000/new/${id}`)
        .then((data) => setDataDetail(data.data.data))
        .catch((err) => console.log(err))
    }, [id])

    console.log(dataDetail);

    const htmlString = dataDetail?.content

    
    return(
        <div className='container-detail mx-3'>
            <h3>{dataDetail?.title}</h3>
            <p>{dataDetail?.createdAt}</p>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
    )
}

export default MediaDetail