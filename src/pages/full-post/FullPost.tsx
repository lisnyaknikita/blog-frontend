import classes from './FullPost.module.scss';

import fullImg from '../../assets/images/article-full-img.png';
import avatar from '../../assets/images/avatar.svg';

import Post from '../../components/post/Post';
import CommentsBlock from '../../components/comments-block/CommentsBlock';

const FullPost = () => {
  return (
    <>
      <div className={classes.fullPost}>
        <Post />
        <CommentsBlock>
          <li className={classes.comment}>
            <div className={classes.userAvatar}>
              <img src={avatar} alt='avatar' />
            </div>
            <form className={classes.userInfoForm}>
              <p className={classes.userName}>Микита</p>
              <textarea
                className={classes.commentField}
                placeholder='Ваш коментар...'
              ></textarea>
            </form>
          </li>
        </CommentsBlock>
      </div>
    </>
  );
};

export default FullPost;
