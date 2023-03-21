import classes from './CommentsBlock.module.scss';

import avatar from '../../assets/images/avatar.svg';

interface ICommentsBlockProps {
  // children?: React.PropsWithChildren;
  children?: React.ReactNode;
}

const CommentsBlock: React.FC<ICommentsBlockProps> = ({ children }) => {
  return (
    <>
      <div className={classes.comments}>
        <h4 className={classes.commentsTitle}>Коментарі</h4>
        <ul className={classes.commentsList}>
          <li className={classes.commentsItem}>
            <div className={classes.userAvatar}>
              <img src={avatar} alt='avatar' />
            </div>
            <div className={classes.userInfo}>
              <p className={classes.userName}>Олена</p>
              <p className={classes.comment}>
                Чи буде це працювати з строковим...
              </p>
            </div>
          </li>
          <li className={classes.commentsItem}>
            <div className={classes.userAvatar}>
              <img src={avatar} alt='avatar' />
            </div>
            <div className={classes.userInfo}>
              <p className={classes.userName}>Олена</p>
              <p className={classes.comment}>
                Чи буде це працювати з строковим...
              </p>
            </div>
          </li>
          <li className={classes.commentsItem}>
            <div className={classes.userAvatar}>
              <img src={avatar} alt='avatar' />
            </div>
            <div className={classes.userInfo}>
              <p className={classes.userName}>Олена</p>
              <p className={classes.comment}>
                Чи буде це працювати з строковим...
              </p>
            </div>
          </li>
          {children}
        </ul>
      </div>
    </>
  );
};

export default CommentsBlock;
