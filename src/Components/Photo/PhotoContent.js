import React from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import styles from './PhotoContent.module.css'

const PhotoContent = ({data}) => {
    const {photo, comments} = data
    return (
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title} />
                <div className={styles.datails}>
                    <div>
                        <p>
                            <Link to={`/perfil/${photo.author}`}>
                                @{photo.author}
                            </Link>
                            <span className={styles.visualizacoes}>{photo.acessos}</span>
                            <h1 className='title'>
                                <Link to={`/foto/${photo.id}`}>
                                    {photo.title}
                                </Link>
                            </h1>
                            <ul>
                                <li>{photo.peso} kg</li>
                                <li>{photo.idade} anos</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <PhotoComments id={photo.id} comments={comments} />
            </div>
        </div>
    )
}

export default PhotoContent