import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
import BusquedaView from './views/BusquedaView'
import TotalView from './views/TotalView'
import TableGames from './components/TableGames'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/inicio',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: BusquedaView
        },
        {
            path: '/total',
            name: 'total',
            component: TotalView
        },
        {
            path: '/table',
            name: 'table',
            component: TableGames
        }         

    ]
})


