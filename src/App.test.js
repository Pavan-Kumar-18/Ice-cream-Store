import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"
import Card from './Card';
import OrderPage from './OrderPage';


describe("checking Card component",  ()=>{
    test('checking all images count',  () => {
      render(<OrderPage/>)
      const Data = screen.queryByTestId("order")
      expect(Data.innerHTML).toEqual("400")
    })
    
})