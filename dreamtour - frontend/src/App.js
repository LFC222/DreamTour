import React,{lazy,Suspense} from "react";

const Rotas = lazy(() => import('./Rotas'));
const Footer = lazy(() => import('./Footer'));

function App() {
    return(
      <div>
        <Suspense fallback={<p>Carregando ... </p>}>
          <Rotas/>
        </Suspense>
        <Suspense fallback={<p>Carregando ... </p>}>
          <Footer/>
        </Suspense>
      </div>
    );
  }
export default App;