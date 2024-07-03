import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(() => import("./App.jsx"))
import './index.css'
import { RecoilRoot } from 'recoil';
import Loader from './components/ui/Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
)
