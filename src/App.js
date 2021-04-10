import React, { Component } from 'react' ;
import Customer from './components/Customer'
import './App.css';


const customers =[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1' ,
  'name' : '곽훈정',
  'birthday' : '930305',
  'gender' : '남자' ,
  'job' : '백수'

},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2' ,
  'name' : '서상철',
  'birthday' : '930329',
  'gender' : '남자' ,
  'job' : '백수'

},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3' ,
  'name' : '김시호',
  'birthday' : '931020',
  'gender' : '남자' ,
  'job' : '요리사'

},
{
  'id' : 4,
  'image' : 'https://placeimg.com/64/64/4' ,
  'name' : '장준영',
  'birthday' : '940216',
  'gender' : '남자' ,
  'job' : '치기공사'

}
]

class App extends Component {
  render() {
    return (
      <div>
        {
        customers.map(c=> {
          return (
          <Customer
           key={c.id}
           id ={customers.id} 
           image={c.image}
           name={c.name}
           birthday={c.birthday}
           gender={c.gender}
           job={c.job}
          />
          )
          }
        )
        }
      </div>
        )
  }
}


export default App;
