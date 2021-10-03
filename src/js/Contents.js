import contents from "../css/Contents.module.css";

function Contents() {
  return (
    <ul className={contents.contents}>
      <li className={contents.profile}>
        <button type="button" className={contents["profile-btn"]} onClick={""}>
          <img
            src="/image/hama.jpg"
            alt="glasses"
            className={contents["profile-img"]}
          />
        </button>
        <ul className={contents["profile-right"]}>
          <li className={contents.li}>
            <ul className={contents["profile-r"]}>
              <li className={contents["profile-id"]}>박2</li>
              <li className={contents["profile-character"]}>3인턴 구직자</li>
            </ul>
          </li>
          <li className={contents["profile-date"]}>하루전</li>
        </ul>
      </li>
      <li className={contents.text}>
        아마존의 검색광고 시장 진입 vs 구글 ‘쇼핑검색’ 기능 강화
        <br /> 🌝 아마존이 전자상거래를 넘어 검색 광고 시장으로 영역을 확대하자
        이번엔 구글이
        <br />
        <br />
        <br />
        아마존이 장악한 전자상거래 시장에 도전 ... 더 보기
      </li>
      <li className={contents.site}></li>
      <li className={contents.like}>
        <div className={contents["like-pro"]}>
          <img
            src="/image/people.png"
            alt=""
            className={contents["like-profile1"]}
          />
          <img
            src="/image/people.png"
            alt=""
            className={contents["like-profile2"]}
          />
          <img
            src="/image/people.png"
            alt=""
            className={contents["like-profile3"]}
          />
        </div>

        <div className={contents["like-text"]}>
          <div className={contents["like-text1"]}>76명</div>이 추천했어요.
        </div>
      </li>
      <li className={contents.footer}>
        <div className={contents["footer-total"]}>
          <div className={contents["footer-pad"]}>
            <img
              src="/image/light.png"
              alt=""
              className={contents["footer-icon"]}
            />
            추천해요
          </div>
        </div>
        <div className={contents["footer-total"]}>
          <div className={contents["footer-pad"]}>
            <img
              src="/image/share.png"
              alt=""
              className={contents["footer-icon"]}
            />
            공유하기 <div className={contents["footer-num"]}>3</div>
          </div>
          <div className={contents["footer-pad"]}>
            <img
              src="/image/comment.png"
              alt=""
              className={contents["footer-icon"]}
            />
            댓글 <div className={contents["footer-num"]}>2</div>
          </div>
        </div>
      </li>
    </ul>
  );
}
export default Contents;
