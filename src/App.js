// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './pages/Register/Register';
import GetInTouch from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import './App.css';
import Blog from './pages/Blog/Blog';
import NewPost from './pages/Blog/NewPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<GetInTouch />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/new_post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
