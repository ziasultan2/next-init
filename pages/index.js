import App from '../components/App'
import {wrapper} from '../redux/Store';
import {getRooms} from '../redux/actions/RoomAction'
// import store from '../redux/Store'

export default function Index() {
  return (
    <App />
  )
}


export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
  await store.dispatch(getRooms(req, query.page, query.location, query.guests, query.category))
})
