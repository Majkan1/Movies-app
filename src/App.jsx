export default function App() {
  return (
    <div className="app">
      <Photo/>
    </div>
  )
}

function Photo(){
  return (
    <div>
      <div className = "Black"></div>
      <div className = "Photo">
        <img src="/Photo.jpg" alt="Image of Pizza" />
      </div>
    </div>
  )
}