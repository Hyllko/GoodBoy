import GoodHeader from './views/GoodHeader';
import GoodFooter from './views/GoodFooter';
import GoodForm from './views/GoodForm';

import 'animate.css';
import './assets/SCSS/App.scss';
const App = () => {
   return (
      <div className="App">
         <GoodHeader />
         <GoodForm />
         <GoodFooter />
      </div>
   );
};

export default App;
