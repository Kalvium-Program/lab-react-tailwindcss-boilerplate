import './App.css'
function App() {

  return (
    <>
        <nav className="fixed top-0 left-0 flex items-center p-5 bg-red-500 border-t-4 border-blue-800 w-full z-50 ">
      <div className="items-center mr-5">
        <div className="text-white text-2xl font-bold">KALVIAN</div>
      </div>
      <div className="flex flex-1 items-center justify-between ">
        <div className="text-lg flex flex-wrap">
          <a href=" " className="mr-4 text-white hover:text-gray-300">About us</a>
          <a href=" " className="mr-4 text-white hover:text-gray-300">Contacts</a>
          <a href=" " className="mr-4 font-bold text-white hover:text-gray-300">Courses</a>
        </div>
        <div>
          <button href=" " className="text-white border-white border rounded p-1 px-5 hover:bg-gray-800">Login</button>
        </div>
      </div>
    </nav> 
    <div className="p-7 px-16">
      <button className="text-white p-2 bg-green-500 text-sm font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700">BUTTON ONE</button>

      <div className="bg-yellow-200 border border-yellow-500 rounded-md text-yellow-700 px-6 py-4 my-5">
        <b className="text-lg font-bold text-red-600">Alert!</b>
        <p className="text-gray-800 mt-2">This is awesome!</p>
      </div>
    </div>
    <div className="p-5 max-w-md mx-auto rounded-lg shadow-md flex items-center space-x-6 bg-white">
      <div>
        <img className="h-12 w-20" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""/>
      </div>
      <div>
        <div className="text-xl font-bold text-blue-700">Kalvium Store</div>
        <p className="text-gray-600">Explore our latest courses!</p>
      </div>
    </div>
    <footer className="bg-blue-900 text-white text-center py-6">
      <div className="mx-auto">
        <p className="text-lg">&copy; 2024 All rights are reserved. Designed by Kritika Walia</p>
      </div>
    </footer>    </>
  )
}
export default App;