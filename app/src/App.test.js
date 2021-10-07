import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import scanSampleJson from './resources/scan_sample.json';
import FoodItemForm from './components/FoodItemForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('form receives json product data correctly', () => {
    const history = createMemoryHistory();
    history.push("/manual", { data: scanSampleJson })
    const result = render(
      <Router history={history}>
        <FoodItemForm />
      </Router>
    )
    expect(result.container.querySelector("#scanned-image").getAttribute("src")).toBe("https://images.openfoodfacts.org/images/products/761/328/725/4429/front_en.3.400.jpg")
    expect(result.container.querySelector("#product-name").getAttribute("value")).toBe("Milkybar");
})