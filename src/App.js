import Main from './components/Main';
import Footer from "./components/Footer";
import './fonts/FredokaOne-Regular.ttf';
import './fonts/FredokaOne-Regular.woff2';
import './fonts/FredokaOne-Regular.woff';

function App() {
  return (
      <div>
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 h-screen text-white font-fredoka-one">
                     <Main />
                    <Footer />
            </div>
      </div>
  );
}

export default App;
