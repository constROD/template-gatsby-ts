import { navigate } from 'gatsby';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useAppSelector } from 'shared/hooks/useRedux';

const AuthenticatedRoute: React.FC = ({ children }) => {
  const isAuth = useAppSelector(state => state.user.isAuth);

  useEffectOnce(() => {
    if (!isAuth) navigate(ROUTES.LOGIN);
    // if (!LocalStorageUtil.get(AppLocalStorage.HostName)) {
    //   const protocol = window.location.protocol;
    //   const host = window.location.host;
    //   const hostName = `${protocol}//${host}`;
    //   setHostName({ hostName });
    // }
  });

  // useEffect(() => {
  //   if (run.current && isAuth && !profile) {
  //     getAllInfo();
  //     run.current = false;
  //   }
  // }, [getAllInfo, isAuth, profile]);

  if (!isAuth) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
