import { Header } from './components/Header';
import { Message } from './components/Message';

import './styles/style.scss';

export function App() {
    return (
        <div id='app'>
          <Header />
          <Message text="Hello World!" />
          <Message text="Bye-bye!" />
        </div>
      );
}