import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import QuizTest from "./components/QuizTest";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/quiz/:quizId',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizTest />
            },
            {
                path: '/statistics',
                element: <Statistics />
            }
        ]
    }
])