import classes from './UserInfo.module.scss';

import avatar from '../../assets/images/avatar.svg';

const UserInfo: React.FC = () => {
  return (
    <div className={classes.userInfo}>
      <div className={classes.userImg}>
        <img src={avatar} alt='avatar' />
      </div>
      <div className={classes.userDetails}>
        <p className={classes.userName}>Микита</p>
        <p className={classes.additional}>14.03.2023</p>
      </div>
    </div>
  );
};

export default UserInfo;
