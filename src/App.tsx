import './assets/styles/global.scss';

import Header from './components/header/Header';
import AddPost from './pages/AddPost';
import FullPost from './pages/FullPost';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Home />
        {/* <FullPost />
         */}
        {/* <AddPost /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
      </div>
    </>
  );
}

export default App;
