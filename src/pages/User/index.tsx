import styles from './index.less';

interface Props {}
const UserComponent = (props: Props) => {
  console.log('user props', props);
  return (
    <div>
      <h1 className={styles.title}>Page User</h1>
    </div>
  );
};
export default UserComponent;
