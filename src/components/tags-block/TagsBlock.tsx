import classes from './TagsBlock.module.scss';

const TagsBlock: React.FC = () => {
  return (
    <div className={classes.tagsBlock}>
      <h4 className={classes.tagsBlockTitle}>Сортувати за тегами:</h4>
      <ul className={classes.tagsBlockList}>
        <li className={classes.tagsItem}>
          <button>#js</button>
        </li>
        <li className={classes.tagsItem}>
          <button>#react</button>
        </li>
        <li className={classes.tagsItem}>
          <button>#redux</button>
        </li>
      </ul>
    </div>
  );
};

export default TagsBlock;
