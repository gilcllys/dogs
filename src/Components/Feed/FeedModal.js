import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_GET} from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

function FeedModal({photo}) {
  const {data, error, loadinng, request} = useFetch()

  React.useEffect(()=>{
    const {url, option} = PHOTO_GET(photo.id)
    request(url,option)
  },[photo, request])
  return (
    <div className={styles.modal}>
      {error && <Error error={error}/>}
      {loadinng && <Loading />}
      {data && <PhotoContent data={data} />}
      
    </div>
  )
}

export default FeedModal