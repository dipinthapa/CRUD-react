import { useNavigate } from 'react-router-dom'

const Home = () => {

const navigate = useNavigate()

  return (
    <>
      <section>
        <div className='text-center'>
            <ul>
                <li onClick={() => navigate('/')} className='p-5 text-xl hover:bg-indigo-600 hover:text-white rounded-2xl cursor-pointer'>Create User </li>
                <li onClick={() => navigate('/view')} className='p-5 text-xl hover:bg-indigo-600 hover:text-white rounded-2xl cursor-pointer'>View User</li>
            </ul>
        </div>
      </section>
    </>
  )
}

export default Home
