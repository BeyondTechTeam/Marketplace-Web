import styles from './Categories.module.css'

function ProductCat(props) {
    return ( <div className={CategoryBox}>
        <img src={props.image} alt="" />
        <h3>{props.boxHeader}</h3>
        <button>See more products</button>
    </div> );
}

export default ProductCat;