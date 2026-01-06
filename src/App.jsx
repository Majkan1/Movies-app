import './App.css'
export default function App() {
  return (
    <div className="app">
      <Photo/>
    </div>
  )
}

function Photo(){
  return (
    <div className = "Both">
      <div className = "Black">
        <p className = "Logo">My logo</p>
        <h2 className = "Title">Restaurant of your dreams<br/>Enjoy the best dishes in the world</h2>
        <div className = "underline"></div>
        <p className = "under-title">Here you can try the best dishes in the world</p>
        <button className = "Go-to-menu">Go to the menu →</button>
      </div>
      <div className = "Photo">
        <img src={`${import.meta.env.BASE_URL}Photo.jpg`} alt="Image of Pizza"/>
        <div className = "underline1"></div>
        <div className = "underline2"></div>
      </div>
    </div>
  )
}