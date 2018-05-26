import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import data from './data';
import { ShowTitle, SubTitle } from './Article';

console.log(data.hn.topStories);

function Header() {
  return (
    <header className="App-header">
    <img src={logo} className="App-Logo" alt="Logo" />
    <h1 className="App-title">Welcome To Malmö</h1>
    </header>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><a className='maintitle' href='https://news.ycombinator.com/news'>Hacker News</a> | <a href='https://news.ycombinator.com/newcomments'>Comments</a> |
        <a href='https://news.ycombinator.com/show'>Show</a> | <a href='https://news.ycombinator.com/ask'>Ask</a> | <a href='https://news.ycombinator.com/jobs'>Jobs</a>
            | <a href='https://news.ycombinator.com/submit'>Submit</a> <a className='login' href='https://news.ycombinator.com/login?goto=news'>Login</a></p>
        </header>
        <div>
          <ol className='mine'>{data.hn.topStories.map((item) => {
            return (
              <div id='TitleBlock'>
                <ShowTitle title={item.title} key={item.id} url={item.url} />
                <SubTitle by={item.by} id={item.by.id} timeISO={item.timeISO} />
              </div>
            )
          })}
          </ol>
          }
        </div>
      </div>

    );
  }
}

export default App;
/* export default function App() {
  return (
    <div className="App">
    <Header>
      My Awesome Company
      </Header>
      <Content />
      </div>
  );
}
*/
