import React, { useEffect, useState } from 'react'
import classes from './QuotesContainer.module.css'
import axios from 'axios';
import Quotesitems from './Quotesitems'
const QuotesContainer =  () => {
    const [quote, setQuote] = useState([]);
    const [newQuote, setNewQuote] = useState(false);
    useEffect(()=>{
        const fetchQuotehandler = async ()=>{
            const response =await  axios( "https://programming-quotes-api.herokuapp.com/quotes/random");
            
            setQuote(response.data);
            // console.log(response.data);

        };
        fetchQuotehandler();
      
    }, [newQuote]);

  return (
    <div className={classes.container}>
       {quote && <Quotesitems en={quote.en} author={quote.author}/> }
       {!quote && (<svg class="spinner" viewBox="0 0 50 50">
  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
</svg>)}
    <button  className={classes.btn} onClick={()=>
        setNewQuote( (preValue) => !preValue)
    }>Fetch New Quote</button>
    </div>
 
  )
}

export default QuotesContainer   