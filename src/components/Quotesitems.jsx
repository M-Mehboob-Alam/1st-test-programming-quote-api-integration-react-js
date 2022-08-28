
import classes from './Quotesitems.module.css'
const Quotesitems = (props) => {
 
  return (
    <div className={classes.item}>
        <h1>{props.en}</h1>
        <p>{props.author}</p>
    </div>
  )
}

export default Quotesitems  