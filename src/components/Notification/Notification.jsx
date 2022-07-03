import * as S from './Notification.style';

const Notification = ({ children }) => {
  return <S.Message>{children}</S.Message>;
};

export default Notification;
