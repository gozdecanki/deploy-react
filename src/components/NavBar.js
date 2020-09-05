import React from 'react'
//rfc tabtab şeklince oluşturma
export default function NavBar() {
    return (
        <div>
            <h3>User App</h3>
        </div>
    )
}





//function olarak component tanımlama
//sabit olacak componentler için kullanılması daha uygun
//state almayacaksa
{/*function Navbar(){
    return(
        <div>
            <h3>user app</h3>
        </div>
    )
}
export default Navbar;*/}

//bu şekilde de tanımlanabilir
{/*const  Navbar=() => {
    return(
        <div>
            <h3>user app</h3>
        </div>
    )
}
export default Navbar;*/}
