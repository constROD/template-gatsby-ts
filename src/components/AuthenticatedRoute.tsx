import { navigate } from 'gatsby';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useAppSelector } from 'shared/hooks/useRedux';
import { isBrowser } from 'shared/utils/LocalStorage';

const AuthenticatedRoute: React.FC = ({ children }) => {
  const isAuth = useAppSelector(state => state.user.isAuth);

  if (!isAuth) {
    if (isBrowser) navigate(ROUTES.LOGIN);
    return null;
  }

  // useEffectOnce(() => {
  //   if (!LocalStorageUtil.get(AppLocalStorage.HostName)) {
  //     const protocol = window.location.protocol;
  //     const host = window.location.host;
  //     const hostName = `${protocol}//${host}`;
  //     setHostName({ hostName });
  //   }
  // });

  // useEffect(() => {
  //   if (run.current && isAuth && !profile) {
  //     getAllInfo();
  //     run.current = false;
  //   }
  // }, [getAllInfo, isAuth, profile]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
