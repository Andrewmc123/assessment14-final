import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

function TogglePhotoType() {
  const { photoType, setPhotoType } = useContext(PhotoContext)

  return (
    <div>
      <h2>Cat or Dog?</h2>
      <label>
        <input
          type="radio"
          checked={photoType === 'cat'}
          onChange={() => setPhotoType('cat')}
        />
        Cat
      </label>
      <label>
        <input
          type="radio"
          checked={photoType === 'dog'}
          onChange={() => setPhotoType('dog')}
        />
        Dog
      </label>
    </div>
  )
}

export default TogglePhotoType