import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_GET} from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

function FeedModal({photo, setModalPhoto}) {
  const {data, error, loadinng, request} = useFetch()

  React.useEffect(()=>{
    const {url, option} = PHOTO_GET(photo.id)
    request(url,option)
  },[photo, request])

  function handleOutSideClick(event){
    if(event.target === event.currentTarget){
      setModalPhoto(null)
    }
  }


  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <Error error={error}/>}
      {loadinng && <Loading />}
      {data && <PhotoContent data={data} />}  
    </div>
  )
}

export default FeedModal