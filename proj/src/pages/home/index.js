<% if (SPA) { %>
export default {
  path: 'home',
  title: 'home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageHome.jsx'));
    }, 'home');
  },
};

<%}else{%>
export default from './PageHome.jsx';

<% } %>
