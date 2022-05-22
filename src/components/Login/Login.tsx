import { LoginWrapper } from './Login.styled';

import { navigate } from 'gatsby';
import React, { useRef } from 'react';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useForm } from 'shared/hooks/useForm';
import { ILoginForm } from 'shared/interfaces/Auth';
import { IFormElements } from 'shared/interfaces/Form';
import useAppStore from 'shared/store';
import CommonUtil from 'shared/utils/Common';
import { loginValidator } from 'shared/validators/Login';

const Login: React.FC = () => {
  const login = useAppStore(state => state.login);

  const defaultValues: ILoginForm = {
    email: '',
    password: '',
  };

  const { values, handle } = useForm<ILoginForm>({
    defaultValues,
    validator: loginValidator,
  });

  const { current: memoizedHandle } = useRef((...args: [React.ChangeEvent<IFormElements>]) => {
    const [event] = args;
    event.persist();
    handle({ event });
  });

  const [, loginAsync] = useAsyncFn(async (...args: [ILoginForm]) => {
    const [] = args;

    const { error } = login();

    if (!error) return navigate(ROUTES.HOME);

    CommonUtil.logger({
      path: 'components/Login/Login.tsx',
      event: 'loginAsync',
      log: error,
    });
  });

  const loginSubmit = () => loginAsync(values);

  return (
    <LoginWrapper>
      <input id="email" defaultValue={values.email} onChange={memoizedHandle} />
      <input id="password" defaultValue={values.password} onChange={memoizedHandle} />
      <button onClick={loginSubmit}>Login</button>
    </LoginWrapper>
  );
};

export default Login;
