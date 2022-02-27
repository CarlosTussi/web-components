import me from './me.jpg'
import {Routes, Route} from "react-router-dom";
import {
    Home,
    Products,
    FeaturedProducts,
    About,
    Contact,
    Whoops404
} from "./pages"

// function TopNav()
// {
//     return(
//         <><ul>
//             <li>MyCompany</li>
//             <li>
//                 <ul>
//                     <li><a href="">Home</a></li>
//                     <li><a href="">Products</a></li>
//                     <li><a href="">Reviews</a></li>
//                     <li><a href="">About</a></li>
//                     <li><a href="">Contact</a></li>
//                 </ul>
//             </li>
//             <li>Social</li>
//         </ul>
//         <img src={me} height={200} /></>
//     )
// }

// function MiddleContent()
// {
//     return(
//         <main id="testing">
//           <section class="top-banner">Top Banner</section>
//           <section class="middle-banner">Middle Banner</section>
//           <section class="bottom-banner">Bottom Banner</section>
//       </main>
//     )
// }

function Main()
{
    return(
        // <header>
        // <TopNav />
        // <MiddleContent />
        // </header>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<Products/>}>
                    <Route path="featured" element={<FeaturedProducts/>}/>
                </Route> 
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Whoops404/>}/>
            </Routes>
        </div>
    )
}

    export default Main;
