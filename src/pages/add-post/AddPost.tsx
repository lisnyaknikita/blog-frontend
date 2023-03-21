import classes from './AddPost.module.scss';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import { useCallback, useMemo, useState } from 'react';

const AddPost: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((value: any) => {
    setValue(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <>
      <h2 className={classes.title}>Створіть власну статтю</h2>
      <div className={classes.wrapper}>
        <button className={classes.uploadBtn}>Завантажити зображення</button>
        <input
          className={classes.titleInput}
          type='text'
          placeholder='Заголовок статті...'
        />
        <input
          className={classes.tagsInput}
          type='text'
          placeholder='Теги...'
        />
        <SimpleMDE
          className={classes.editor}
          value={value}
          onChange={onChange}
          //@ts-ignore
          options={options}
        />
        <button className={classes.createBtn}>Створити</button>
      </div>
    </>
  );
};

export default AddPost;
