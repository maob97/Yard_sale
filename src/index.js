import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

// Esto aplicaba a la version vieja de react:
ReactDOM.render(<App/>, document.getElementById('app'));

// Con las actualizaciones quedaria asi: 
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render (<Apptab= "home" />);
