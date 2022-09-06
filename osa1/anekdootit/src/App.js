import { useState } from 'react'

const Anecdote = ({anecdote, votes}) => (
  <>
  <p>{anecdote}</p>
  <p>Votes: {votes}</p>
  </>
  
);

const Header = ({text}) => (<h1>{text}</h1>);
const Button = ({clickHandler, text}) => (<button onClick={clickHandler}>{text}</button>);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...Array(anecdotes.length)].map(x => 0));
  const [mostVotes, setMostVotes] = useState(0);

  const nextAnecdote = () => {
    const next = Math.floor(Math.random() * anecdotes.length);
    console.log("Selected anecdote: ", next);
    setSelected(next);
  }

  const voteAnecdote = () => {

    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    const newMostVotes = newVotes.indexOf(Math.max(...newVotes));
    console.log("Most votes: ", newMostVotes);

    setMostVotes(newMostVotes);

    console.log("Voted ", selected);
    console.log(newVotes);

  }

  return (
    <div>
      <Header text="Anecdotes" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button clickHandler={nextAnecdote} text="Next" />
      <Button clickHandler={voteAnecdote} text="Vote this" />
      <Header text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[mostVotes]} votes={votes[selected]} />
    </div>
  )
}

export default App