import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-amber-100'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
        <h1 className='font-bold'>360°MarkBench</h1>
    </Link>
        <ul className='flex gap-4'>
        <Link to='/'>
            <li>Home</li>
        </Link>
        <Link to='/About'>
            <li>Our Solution</li>
        </Link>
        <Link to='/Signin'>
            <li>Sign In</li>
        </Link>
            

        </ul>
    </div>
  </div>
  )
}
