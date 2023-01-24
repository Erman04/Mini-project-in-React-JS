import './AppFilter.css'

const AppFilter = ({ updataFilter, filter }) => {
  return (
    <div className='btn-group'>
      {
        btns.map(btn => (
          <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-info' : 'btn-dark'}`} type='button' onClick={(e) => updataFilter(btn.name)}>
            {btn.label}
          </button>
        ))
      }
    </div>
  )
}

const btns = [
  { name: 'all', label: 'Barcha kinolar' },
  { name: 'popular', label: 'Mashhur kinolar' },
  { name: 'mostView', label: 'Mashhur kinolar' },
]

export default AppFilter