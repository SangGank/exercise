import header from "../css/Header.module.css";

function Header() {
  return (
    <nav className={header.total}>
      <header className={header.header}>
        <ul className={header.left}>
          <li className={header.a}>
            <img src="./image/logo.png" alt="logo" className={header.logo} />
          </li>
          <ul className={header.left_right}>
            <li className={header.b}>
              <a href="" className={header.text}>
                프로필 탐색
              </a>
            </li>
            <li className={header.b}>
              <a href="" className={header.text}>
                인턴 채용공고
              </a>
            </li>
          </ul>
        </ul>
        <div className={header.right}>
          <button type="button" className={header.icons} onClick={""}>
            <img
              src="/image/glasses.svg"
              alt="glasses"
              className={header.icon}
            />
          </button>
          <button type="button" className={header.icons} onClick={""}>
            <img
              src="/image/speechBubble.png"
              alt="speechBubble"
              className={header.icon}
            />
          </button>
          <button type="button" className={header.icons} onClick={""}>
            <img src="/image/alarm.png" alt="alarm" className={header.icon} />
          </button>
          <button type="button" className={header.iconspeople} onClick={""}>
            <img
              src="/image/people.png"
              alt="people"
              className={header.iconpeople}
            />
          </button>
        </div>
      </header>
    </nav>
  );
}

export default Header;
