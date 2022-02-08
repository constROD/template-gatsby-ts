/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageProps } from 'gatsby';
import React from 'react';

const AuthenticatedRoute: React.FC<any> = ({ children }: PageProps) => {
  // const isAuth = useAppSelector(state => state.user.isAuth);
  // const profile = useAppSelector(state => state.user.profile);
  // const { setHostName, getAllInfo } = UserActions();

  // const queryParam = new URLSearchParams(location.search);

  // const code = queryParam.get('code')

  // const run = useRef(true);

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
