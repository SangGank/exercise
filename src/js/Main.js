import main from "../css/Main.module.css";
import Contents from "./Contents";

function Main() {
  return (
    <div className={main.main}>
      <body className={main.total}>
        <Contents />
      </body>
    </div>
  );
}

export default Main;
