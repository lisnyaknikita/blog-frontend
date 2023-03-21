import classes from './Post.module.scss';

import { FiEye } from 'react-icons/fi';
import { TfiComments } from 'react-icons/tfi';

import postImg from '../../assets/images/article-img.png';

import UserInfo from '../user-info/UserInfo';

const Post: React.FC = () => {
  return (
    <div className={classes.post}>
      <div className={classes.img}>
        <img src={postImg} alt='Post image' />
      </div>
      <div className={classes.postInfo}>
        <UserInfo />
        <h3 className={classes.postTitle}>
          Як інтегрувати typescript до js-проекту?
        </h3>
        <ul className={classes.tagsList}>
          <li>#js</li>
          <li>#ts</li>
          <li>#react</li>
        </ul>
        <ul className={classes.postDetails}>
          <li>
            <FiEye />
            <span>234</span>
          </li>
          <li>
            <TfiComments />
            <span>15</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
