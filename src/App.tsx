import './assets/styles/global.scss';

import Header from './components/header/Header';
import AddPost from './pages/add-post/AddPost';
import FullPost from './pages/full-post/FullPost';
import Home from './pages/home/Home';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Home />
        {/* <FullPost /> */}
        {/* <AddPost /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
      </div>
    </>
  );
}

export default App;
