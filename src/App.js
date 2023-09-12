import UserProfile from './Component/UserProfile'
import './App.css'

const userDetails = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Saurabh',
    role: 'Software Development Engineer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Shreya',
    role: 'Software Development Engineer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Shikha',
    role: 'Software Development Engineer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Mahesh D',
    role: 'Agent',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title"> Users List </h1>
    <ul>
      {userDetails.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
