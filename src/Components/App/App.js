import AppFilter from '../AppFilter/AppFilter'
import AppInfo from '../AppInfo/AppInfo'
import MovieList from '../MovieList/MovieList'
import MoviesAddForm from '../MoviesAddForm/MoviesAddForm'
import SearchPanel from '../SearchPanel/SearchPanel'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Matrix', viewers: 555, increase: false, like: false, id: 1 },
        { name: 'Spider-Man', viewers: 444, increase: true, like: true, id: 2 },
        { name: 'X-Men', viewers: 3323, increase: false, like: false, id: 3 }
      ],

      terim: '',
      filter: 'all'
    }
  }

  onDelete = id => {
    this.setState(({ data }) => ({ data: data.filter(c => c.id !== id) }))
  }

  addForm = (item) => {
    const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), increase: false, like: false }
    this.setState(({ data }) => ({ data: [...data, newItem] }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
      return { data: newArr }
    })
  }

  serachHandler = (arr, terim) => {
    if (terim.length === 0) return arr

    return arr.filter(item => item.name.toLowerCase().indexOf(terim) > -1)
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular': return arr.filter(c => c.like)
      case 'mostView': return arr.filter(c => c.viewers >= 1000)
      default: return arr
    }
  }

  upDateTerim = terim => this.setState({ terim })

  updataFilter = filter => this.setState({ filter })

  render() {
    const { data, terim, filter } = this.state
    const allFilm = data.length
    const sevimli = data.filter(item => item.increase).length
    const visibleData = this.filterHandler(this.serachHandler(data, terim), filter)

    return (
      <div className='app font-monospace' >
        <div className='content'>
          <AppInfo allFilm={allFilm} sevimli={sevimli} />
          <div className='search-panel'>
            <SearchPanel upDateTerim={this.upDateTerim} />
            <AppFilter filter={filter} updataFilter={this.updataFilter} />
          </div>
          <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }
}

export default App
