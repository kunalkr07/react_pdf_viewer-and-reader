import React,{useState} from 'react'
import Navbar from './components/Navbar'
import PDFList from './components/PDFList'
import Footer from './components/Footer'

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query updates
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <Navbar  onSearch={handleSearch}/>
      <PDFList searchQuery={searchQuery}/>
      <Footer/>
    </div>
  )
}
