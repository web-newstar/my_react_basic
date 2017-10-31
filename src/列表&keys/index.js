import React from "react";


function NumberList(props){
    const numbers=props.numbers;
    const listItems = numbers.map((ele,index) =>(
        // <li key={ele.toString()}>{ele}</li>
        /*一个元素的key最好是这个元素在列表中的一个独一无二的字符串
            也可是使用序列号索引index作为key
            如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢
        */
        <ListItem key={ele.toString()} value={ele}/>
    ))
    return (
        <div>
            <ul>{listItems}</ul>
            <Blog posts={posts}/>
        </div>    
    )
}
// 用keys提取组件
// 元素的key只有在它和它的的元素节点对比时才有意义
/*提取出一个ListItem组件，
你应该把key保存在数组中的这个<ListItem />元素上，而不是放在ListItem组件中的<li>元素上。*/
function ListItem(props){
    return <li>{props.value}</li>
}

// 元素的key在他的的兄弟元素之间应该唯一
function Blog(props){
    const sidebar=(
        <ul>
            {
                props.posts.map((post)=>(
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
    const content=props.posts.map((post)=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ))
    return (
        <div>
          {sidebar}
          <hr />
          {content}
        </div>
      );
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
export default NumberList;