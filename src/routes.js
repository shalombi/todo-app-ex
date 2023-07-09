import { HomePage } from './pages/home-page.jsx'
import { TodoApp } from './pages/todo-app.jsx'
import { UserName } from './pages/user-name';


const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: '/todo',
        component: <TodoApp />,
        label: 'Todo App'
    },
    {
        path: '/username',
        component: <UserName />,
        label: 'User Name'
    },
]

export default routes