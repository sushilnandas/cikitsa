import  React, {useState} from 'react'
import '../CSS/Header.css'

const Header  =  ()=>{
    
    const[open, setOpen] = useState(false);
    const[selected, setSelected] = useState('English');
      
    const languages = [{code:'en', label:'English'},{code:'es', label:'Espanol'},{code:'fr', label:'Francais'},{code:'de', label:'Deutsch'}]

const handleSelect = (langLabel)=>{

  setOpen(false);
  setSelected(langLabel);
}

	function clicked(){

setOpen(!open)

	}

return(

	<div className='header'>

{ /* Child 1 Title and image*/}
    <div className='title'>
    	<h1>CIKITSA </h1>

       <img src="/CikitsaLogo.png" alt="hospital logo"/>
       
   </div>

   {/* Child 2 Call Button*/}
       <div className='butto'>
       	<button>
       		<span className = 'icon'>📞 </span>
       		<span className = 'Number'> +91 9890667854</span>
       	</button> 
       </div>

{/* Child 3 Drop Down button*/}
      
      <div className ='dropDownContainer'>
        <span id='language'>Select language <span id='emoji'>👉</span></span>
   <button onClick={clicked}>{selected}V</button>
    {open && (<ul className='dropdown-list'>{languages.map((lang)=>(<li
    key={lang.code}
    onClick={()=> handleSelect(lang.label)}
    className='dropdown-item'>{lang.label}</li>))}</ul>)}
    </div>


     

	</div>
	)
}



export default Header;