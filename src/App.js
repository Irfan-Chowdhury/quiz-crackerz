import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/route';

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

// https://github.com/programming-hero-web-course2/b6-quiz-crackerz-Irfan-Chowdhury

export default App;
