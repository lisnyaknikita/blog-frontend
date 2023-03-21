import { TabList, TabPanels, Tab, TabPanel, Tabs } from '@chakra-ui/react';
import CommentsBlock from '../../components/comments-block/CommentsBlock';

import Post from '../../components/post/Post';
import TagsBlock from '../../components/tags-block/TagsBlock';

import classes from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <Tabs>
        <TabList className={classes.tabList}>
          <Tab className={classes.tabItem}>Найпопулярніші</Tab>
          <Tab className={classes.tabItem}>Нові</Tab>
        </TabList>
      </Tabs>
      <div className={classes.homeWrapper}>
        <div className={classes.homeLeft}>
          <Post />
          <Post />
        </div>
        <div className={classes.homeRight}>
          <TagsBlock />
          <CommentsBlock />
        </div>
      </div>
    </>
  );
};

export default Home;
