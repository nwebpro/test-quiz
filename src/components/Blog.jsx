import React from 'react';

const Blog = () => {
    return (
        <div className="space-y-4 grid mx-auto grid-cols-1 md:max-w-screen-lg py-10 md:py-20 px-5 lg:px-0">
            <details className="group border-l-4 border-green-500 bg-gray-50 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                <h5 className="text-lg font-medium text-gray-900">
                    What is the purpose of the React Router?
                </h5>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    <br /><br />
                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </p>
            </details>
            <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                <h5 className="text-lg font-medium text-gray-900">
                    How does context api work?
                </h5>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="my-4 leading-relaxed text-gray-700">
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <span className='font-bold text-1xl'>How it works?</span>
                <p className="mt-4 leading-relaxed text-gray-700">
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </details>
            <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                <h5 className="text-lg font-medium text-gray-900">
                    What is useRef hook and how do you use it?
                </h5>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="my-4 leading-relaxed text-gray-700">
                    A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                    useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.
                </p>
                <span className='font-bold text-1xl'>What purpose does useRef hook serve?</span>
                <p className="mt-4 leading-relaxed text-gray-700">
                    Some of the use cases of useRef hook are:
                    <ul className='pl-5'>
                        <li>1. To access DOM elements</li>
                        <li>2. To persist values in successive renders</li>
                    </ul>
                </p>
            </details>
        </div>
    );
};

export default Blog;