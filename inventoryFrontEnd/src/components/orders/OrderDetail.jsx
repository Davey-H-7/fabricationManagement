

const OrderDetail = ({order, handleDelete}) => {

    const detailItems = order.items.map((item) => {
      return <li key = {item.id}> {item.model} {item.status}</li>
    })

    const orderCompletion = statusCheck(order.items);
  

    return(
        <div className="detail">
            <div className="detailInfo">
                <h1>Order Number: {order.id}</h1>
                <h2>Client: {order.client}</h2>
                <h3>Due on: {order.dueDate}</h3>
                {orderCompletion? <h3>Order Ready to Ship</h3>: <h3>Order in Progress</h3>}
            </div>
            <ul className="detailItemList">
                <h3> Items in order:</h3>
                {detailItems}
            </ul>
            <form>
            <button onClick = {()=> window.location="/orders"}>Return to Orders</button>
                <button onClick = {() => handleDelete(order)}>Delete order</button>
            </form>
        </div>
        
    )

}

const statusCheck = function(itemArray){
  
    const isOrderCompleted =itemArray.every((value) => value.status =="COMPLETE")

    console.log(itemArray);
    console.log(isOrderCompleted);
    return isOrderCompleted;
    };

export default OrderDetail