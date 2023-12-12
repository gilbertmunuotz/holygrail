import { BrowserRouter, NavLink } from 'react-router-dom'
import image from './Images/roti-composition.jpg'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1 className='font-serif text-4xl border-b-2 border-gray-300 max-w-full mobile:text-center py-2 tablet:text-center laptop:text-center'>The last Of Us</h1>
        </header>
        <div className="grid grid-cols-[1fr_3fr_1fr] gap-4">
          <nav className="mobile:col-span-3 w-full mt-4 px-6 tablet:col-span-3 border-b-2 border-gray-300 max-w-full pb-4">
            <p className='mobile:text-lg font-bold'>Categories</p>
            <div className='mobile:flex  tablet:flex justify-around laptop:grid'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Books</NavLink>
              <NavLink to="/">Games</NavLink>
              <NavLink to="/">Drinks</NavLink>
              <NavLink to="/">World News</NavLink>
            </div>
          </nav>
          <article className='mobile:col-span-3 block w-full tablet:col-span-2 gap-4'>
            <h2 className='font-serif mobile:text-center text-2xl my-3 tablet:text-center laptop:text-6xl'>Your Favourate Cousine</h2>
            <img src={image} alt="Chapati With Beef Stew" className='mobile:rounded-3xl object-cover px-3 tablet:object-cover rounded-2xl' />
            <p className='mobile:px-6 tablet:mx-4 laptop:font-serif first-letter:text-4xl mb-6'>Voluptatem perferendis ea reiciendis impedit similique cupiditate explicabo necessitatibus! Minima velit, praesentium rerum sed delectus excepturi, ducimus ipsum repudiandae suscipit ullam at consequuntur aliquid fuga iure dicta nisi ex sequi. Porro ipsum laborum ut velit nulla fugit officiis omnis, eos repudiandae saepe veniam molestiae. Enim officia aut nemo voluptatum ratione sapiente ipsa obcaecati cum, quas veritatis debitis quis odit quasi minus explicabo incidunt!</p>
          </article>
          <aside className='mobile:col-span-2 px-6 mb-2 justify-items-center tablet:col-span-1 laptop:col-span-1 mt-10'>
            <ul>
              <li>
                <p><strong>Published on:</strong></p>
                <p>May 15th 2019</p>
                <br />
              </li>
              <li>
                <p><strong>In the category:</strong></p>
                <p>Games</p>
                <br />
              </li>
              <li>
                <p><strong>Writted by:</strong></p>
                <p>Alpha</p>
                <br />
              </li>
            </ul>
            <footer className='mobile:col-span-2 justify-items-center'>
              <p>Copyright 1997:<strong>The Last Of Us.</strong></p>
            </footer>
          </aside>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
