import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import {PHOTOS_GET}  from '../../api';
import styles from './FeedPhotos.module.css'
 
function FeedPhotos() {
    const {data, request} = useFetch()

    React.useEffect(()=>{ 
        async function fetchPhotos(){
            const {url, option} = PHOTOS_GET({page:1, total:6, user:0})
            const {json} = await request(url, option)
            console.log(json)
        }
        fetchPhotos()
    },[request]);
    if(data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
            {data.map((photos) =>(
                <FeedPhotosItem key={photos.id} photo={photos} />
                ))}
            </ul>
            );
    else return null
}

export default FeedPhotos;