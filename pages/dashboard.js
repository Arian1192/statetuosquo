import Aside from '../components/Aside'
import RrssForm from '../components/RrssForm'

export default function dashboard() {
    return (
        <div className='flex'>
            <Aside />
            <RrssForm />
        </div>
    )
}