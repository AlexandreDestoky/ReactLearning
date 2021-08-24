

export default function Item(props) {
  // console.log(props);
  // console.log("charge");
  // console.log(props);
  return (
    <li className="border justify-content-between align-items-center d-flex p-2 m-2">
      <div className="p-3">{props.txt}</div>
      <button className="btn btn-danger p-2 h-50" onClick={()=> props.delFunc(props.id)}>Supprimer</button>
    </li>
  );
}

