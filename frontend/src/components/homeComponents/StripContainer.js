import React, { useState } from 'react'
import Show from './Show.js'

function StripContainer({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    

  }, []);

  return(
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default StripContainer