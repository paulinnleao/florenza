import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './pages/App'
import './index.css'
import { StoreProvider, action, createStore } from 'easy-peasy'


const store = createStore({
    pedido: [],  
    adicionar: action((state :any, payload) => {
        state.pedido.push(payload);
    }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider store={store}>
        <App/>
    </StoreProvider>
)
