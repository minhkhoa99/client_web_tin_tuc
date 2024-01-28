import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

const PublicArtDetail = () => {
    const {id} = useParams()
    const [dataDetail, setDataDetail] = useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/new/${id}`)
        .then((data) => setDataDetail(data.data.data))
        .catch((err) => console.log(err))
    }, [id])

    const htmlString = dataDetail?.content

    return(
        <div className='container-detail mx-3'>
            <h3>{dataDetail?.title}</h3>
          <img
        className="w-100 h-100"
        src={`${process.env.REACT_APP_API}/${dataDetail?.avatar}`}
        alt=""
      />
            <p>{dataDetail?.createdAt}</p>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />

        </div>
    )
}

export default PublicArtDetail