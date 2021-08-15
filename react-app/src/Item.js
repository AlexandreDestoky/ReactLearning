function Item(props) {

  console.log("item chargé " + props.prenom);
  return (
    <h1>Salut {props.prenom} je viens de l'item {props.age ? `et j'ai ${props.age} ans`:""}</h1>
  )
}

export default Item;