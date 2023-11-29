import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map(el => {
        return ( 
            <button
                className={css.btn}
                key={el}
                onClick={() => onLeaveFeedback(el)}>
                {el}
            </button>                
        )
    })    
)