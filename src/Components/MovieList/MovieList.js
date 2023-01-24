import MovieListItem from '../MovieListItem/MovieListItem'
import './MovieList.css'

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <div className='movie-list list-group'>
      {data.map((item) => (
        <MovieListItem key={item.id} name={item.name} viewers={item.viewers} like={item.like} increase={item.increase} onDelete={() => onDelete(item.id)}
          onToggleProp={(e) => onToggleProp(item.id,e.currentTarget.getAttribute('data-toggle'))} />
      )
      )}
    </div>
  )
}

export default MovieList