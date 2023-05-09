import { useSelector } from 'react-redux';
import Card from './Card';

function CardStack(){
    const cards = useSelector((state)=> {return state.cards})
    const storedCards = cards.map((card)=>{
        return( <Card card= {card} key={card.id}/>)
    })

    return(
        
        <section className='e-wallet'>
            <ul className='e-wallet__cardstack'>{storedCards}</ul>
        </section>
    )
}

export default CardStack;