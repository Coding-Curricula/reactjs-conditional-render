import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';
import Button from './Button';

import ProductContext from '../context/ProductContext';
import ModeContext from '../context/ModeContext';
import Toggle from './Toggle';

function Product() {
  const ctx = useContext(ProductContext);
  const modeCtx = useContext(ModeContext);
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [showItem, setShowItem] = useState(false);

  // let listComponent = null;

  // // as a switch case statement
  // switch (showItem) {
  //   case true:
  //     listComponent = <ViewList list={list} sum={sumTotal} handlerDeleteProduct={handlerDeleteProduct} />;
  //     break;
  //   case false:
  //     listComponent = null;
  //     break;
  //   default:
  //     listComponent = null;
  //     break;
  // }

  const handlerAddProduct = () => {

    // Create new list item
    const newItem = {
      id: uuid(),
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: ctx.count * ctx.price * (100 - ctx.discount) / 100,
    }

    // Copy previous list and append new item to its end
    const newList = [...list, newItem];
    //  console.log('  newList:', newList);
    setList(newList);

    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    //  console.log('  sumTotal:', sumTotal);
    setSumTotal(sum);
  }

  const handlerDeleteProduct = (id) => {
    // create a new item list with everything except the item with matching ID
    const newList = list.filter(item => item.id!== id);
    setList(newList);

    // update new total
    let newTotal = 0;
    newList.forEach(item => {
      newTotal += item.quantity * item.price * (100 - item.discount) / 100;
    });
    setSumTotal(newTotal);
  }

  const handleShowItem = () => {
    setShowItem(!showItem);
  }

  return (
    <div className={`${styles.container} ${!modeCtx.isLight && styles.dark}`}>
      <Toggle />
      <Card
        handlerAddProduct={handlerAddProduct}
      />
      {/* Add if statement here */}
      <Button label="Show Cart" onClick={handleShowItem} />
      {/* {listComponent} */}
      {/* {showItem ? <ViewList list={list} sum={sumTotal} /> : null} */}
      {showItem && <ViewList list={list} sum={sumTotal} handlerDeleteProduct={handlerDeleteProduct} />}
      {/* <ViewList list={list} sum={sumTotal}  /> */}
    </div>
  );
}
export default Product;
