import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

function PhotoShow() {
  const { photoUrl } = useContext(PhotoContext)

  return (
    <div>
      <h2>Photo Show</h2>
      <img src={photoUrl} alt="Random pet" />
    </div>
  )
}

export default PhotoShow