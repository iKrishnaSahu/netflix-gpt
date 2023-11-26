import { Provider } from 'react-redux';
import Body from './components/Body';
import './utils/firebase';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={ appStore }>
      <Body />
    </Provider>
  );
}

export default App;
