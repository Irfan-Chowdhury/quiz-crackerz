import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Topic from "../components/Topic/Topic";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
            path:'/quiz/:id',
            loader: async ({ params }) =>{
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
            },
            element: <Quiz></Quiz>
        },
        {
          path: "statistics",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        }
      ]
    },
    { 
        path: '*', 
        element: <div>404 | This route is not found</div>
    }
  ]);
