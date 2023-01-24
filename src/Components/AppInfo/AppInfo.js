import './AppInfo.css'

const AppInfo = (props) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {props.allFilm}</p>
      <p className='fs-4 text-uppercase'>Sevimli kinolar: {props.sevimli}</p>
    </div>
  )
}

export default AppInfo