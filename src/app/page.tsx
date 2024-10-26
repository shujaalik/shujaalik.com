import Navbar from "@/components/Navbar/page"

const App = () => {
  return <div className="w-screen h-screen flex justify-center items-center">
    <Navbar />
    <p className="text-7xl font-medium text-center tracking-wide">
      Muhammad <strong>Shuja</strong> Ali
      <br />
      Full Stack Developer
      <br />
      Based in Pakistan
    </p>
  </div>
}

export default App