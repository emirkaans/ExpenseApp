import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;

/* 
<App/>
goalItem = 'Finish!'+

<CourseGoalItem/>
<li>{goalItem}</li>

Components can't just use data stored in other components. That's why we use props. We can pass data to the custom component by adding a attribute. And inside of that component, we can then get access to all these attributes which might have been set on our custom component. Props simply stands for properties. We can set properties of our own custom components.


This title here, which changes when the clickHandler executes is actually data that should result in the component(return parantezleri içindeki component) being re-evaluated and re-drawn on the screen when its changes, when thats title data changes. And by default, regular variables like "let title= props.title" are not triggering such a re-evaluation. React doesn't care about that.

Bu yüzden bir library daha import etmemiz lazım. "import React, { useState } from "react";" şeklinde useState eklemeliyiz. This function allows us to define values as state where changes to these values should reflect in the component function being called again, which is a key difference to the regular variable we're using here. Bunu kullanmak için, component function içinde çağırmalıyız;


function ExpenseItem(props) {
  useState()
}

And useState is a so-called React hook. There are other hooks as well. Bu hooklar use ön eki ile başlar. Bütün hooklar React component function içinde çağrılmalıdır. Component içindeki başka bir function içinde de çağrılmamalıdır. Küçük bir istisna var, sonra değinilecek.

Bu örneğimizde, useState içine argüman olarak props.title vericez;

useState(props.title)

Now this special variables is created. useState actually returns an array where the first value is the variable itself, and the second element is that updating function. array destructuring ile separate variables olarak store edicez.

const [title, setTitle] = useState(props.title)

Ardından ise;

  const clickHandler = () => {
    setTitle('Updated!')
  };

şeklinde yapıyoruz. Peki neden doğrudan değiştirmek yerine böyle? The reason for that is, that calling this function does not just assing a new value to some variable, but that instead it is a special variable to begin with. Its managed by React somewhere in memory. And when we call this state updating function, this special variable will not just receive a new value but the component function will be executed again! That is exactly what we need. We want to call this component function again when our state changes. Because by calling setTitle function, you're telling React that you wanna assing a new value to this state, and that then also tells React that the component in which this state was registered with useState should be re-evaluated. Therefore, React will go ahead and executed component function again, and also evaluate JSX code again.

The reason for this is that calling this state updating function actually doesn't change the value right away, but instead schedules this state update. So in the very next line thereafter, this new value isn't available yet. Thats why we see the old value being logged even though we updated it before logging. But you do see that eventually this component is called again and is evaluated again, and that therefore we see our updated value on the screen. 

This is how React works. If you have data, which might change, and where changes to that data should be reflected on the user interface then you need state. Because regular variables will not do the trick. With state, you can set and change values. And when they do change, React will re-evaluate the component in which the state was registered. And only that component, by the way, not any other components.

*/
