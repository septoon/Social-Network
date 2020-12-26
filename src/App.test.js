import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import SocialNetworkApp from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SocialNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
