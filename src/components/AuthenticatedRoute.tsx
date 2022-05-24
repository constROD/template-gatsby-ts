import { navigate } from 'gatsby';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC = ({ children }) => {
  const { isSignedIn } = useUserStore(state => state.computed);

  useEffectOnce(() => {
    if (!isSignedIn) navigate(ROUTES.LOGIN);
    // if (!LocalStorageUtil.get(AppLocalStorage.HostName)) {
    //   const protocol = window.location.protocol;
    //   const host = window.location.host;
    //   const hostName = `${protocol}//${host}`;
    //   setHostName({ hostName });
    // }
  });

  // useEffect(() => {
  //   if (run.current && isSignedIn && !profile) {
  //     getAllInfo();
  //     run.current = false;
  //   }
  // }, [getAllInfo, isSignedIn, profile]);

  if (!isSignedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
