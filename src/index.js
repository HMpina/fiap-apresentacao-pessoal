import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {App} from './App';
import { Colors } from './shared/DesignTokens';
import reportWebVitals from './reportWebVitals';

const Container = styled.header`
	background-color: ${Colors.BG_BLACK};
`;

ReactDOM.render(
  <React.StrictMode>
    <Container>
    <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
