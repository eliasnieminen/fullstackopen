import { useState } from "react";

const Header = ({text}) => (<h1>{text}</h1>);
const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>
    {text}
  </button>
);

const StatisticsLine = ({type, number}) => (
  <tr>
    <td>
      {type}
    </td>
    <td>
      {number}
    </td>
  </tr>
);

const Statistics = ({stats}) => {

  const tot = stats[0] + stats[1] + stats[2];
  const avg = tot !== 0 ? ((stats[0] - stats[1]) / tot).toFixed(2) : 0;
  const positiveShare = tot !== 0 ? (100 * (stats[0] / tot)).toFixed(2).toString() : 0;

  return tot === 0 ? (<p>No feedback given!</p>) : (
    <table>
      <tbody>
        <StatisticsLine type="Good" number={stats[0]} />
        <StatisticsLine type="Bad" number={stats[1]} />
        <StatisticsLine type="Neutral" number={stats[2]} />
        <StatisticsLine type="Feedback received in total" number={tot} />
        <StatisticsLine type="Average score" number={avg} />
        <StatisticsLine type="Positive feedback" number={positiveShare + " %"} />
      </tbody>
    </table>
  );

};

const App = () => {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const stats = [good, bad, neutral];

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  return (
    <>
      <Header text="Give feedback!" />

      <Button text="Good" clickHandler={handleGood} />
      <Button text="Bad" clickHandler={handleBad} />
      <Button text="Neutral" clickHandler={handleNeutral} />

      <Header text="Statistics" />

      <Statistics stats={stats} />
    </>
  );

}

export default App;
