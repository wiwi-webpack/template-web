import { cloneElement, addons } from 'react';
import { render } from 'react-dom';

import { Router, Link, hashHistory } from 'react-router';

import homeRoute from '../pages/home';
import demoRoute from '../pages/demo';
import errorRoute from '../pages/error';

const { CSSTransitionGroup } = addons;

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
const App = ({ children, location, routes }) => (
  <div>
    <Link to={'/home'} >首页</Link>
    <Link to={'/demo'} >DEMO</Link>
    <Link to={`/${Math.random().toString(32).slice(2)}`} >错误页面</Link>
    <div className="kuma-container kuma-container-1180">
      <CSSTransitionGroup transitionName="route" transitionEnterTimeout={500} transitionLeaveTimeout={100}>
        {cloneElement(children || 'div', {
          key: location.pathname,
        })}
      </CSSTransitionGroup>
    </div>
  </div>
);


const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    // 这里可以设置首页跳转的地址
    indexRoute: { onEnter: (nextState, replace) => replace('/home') },
    childRoutes: [
      // 新建页面时，请注意更新此处的路由
      homeRoute,
      demoRoute,
      // error因为是泛匹配，所以要放到下面
      // 不然会覆盖前面的
      errorRoute,
    ],
  }],
};

render((
  <Router history={hashHistory} routes={rootRoute} />
),
  document.getElementById('App'),
);