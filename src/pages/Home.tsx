import "../App.css";
import Left from "../components/left";
import Right from "../components/right";
function Home() {
  return (
    <div className=" h-screen w-full  flex">
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default Home;
