import { navigate } from 'gatsby';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import useAppStore from 'shared/store';

const AuthenticatedRoute: React.FC = ({ children }) => {
  const isAuth = useAppStore(state => state.isAuth);

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
