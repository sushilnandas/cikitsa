import  React, {useState} from 'react'
import '../CSS/Header.css'

const Header  =  ()=>{
    
    const[open, setOpen] = useState('');



	function clicked(){

setOpen("Select your language")

	}

return(

	<div className='header'>

{/*Title and image*/}
    <div className='title'>
    	<h1>CIKITSA </h1>

       <img src="/CikitsaLogo.png" alt="hospital logo"/>
       
   </div>

   {/*Call Button*/}
       <div className='butto'>
       	<button>
       		<span className = 'icon'>📞 </span>
       		<span className = 'Number'> +91 9890667854</span>
       	</button> 
       </div>

{/*Drop Down button*/}
      
      <div className ='dropDownContainer'>
       <button onClick={clicked}> Open the language menu 😶
         {open && <p>{setOpen}</p>}           
       </button>

        <div className="dropdown-menu">
      <ul>
        <li><a href="#">Tamil</a></li>
        <li><a href="#">Kannada</a></li>
        <li><a href="#">Telugu</a></li>
        <li><a href="#">English</a></li>
        <li><a href="#">Gujarati</a></li>
        <li><a href="#">Hindi</a></li>
        <li><a href="#">Urudu</a></li>
      </ul>
    </div>


      </div>

	</div>
	)
}



export default Header;