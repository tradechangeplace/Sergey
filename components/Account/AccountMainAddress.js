import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMainAddress = () => (
  <div className={`${styles.accountMainAddress}`}>
    <h3>Основная информация</h3>
    <div className={`${styles.flex}`} style={{ flexWrap: "wrap" }}>
      <div className={`${styles.accountMainAddressInput}`}>
        <p>Страна</p>
        <select name="" id="">
          <option value="">Украина</option>ъ
        </select>
      </div>
      <div className={`${styles.accountMainAddressInput}`}>
        <p>Город</p>
        <select name="" id="">
          <option value="">Харьков</option>ъ
        </select>
      </div>
      <div className={`${styles.accountMainAddressInput}`}>
        <p>Улица</p>
        <input type="text" />
      </div>
      <div className={`${styles.accountMainAddressInput}`}>
        <p>Дом</p>
        <input type="text" />
      </div>
      <div className={`${styles.accountMainAddressInput}`}>
        <p>Квартира</p>
        <input type="text" />
      </div>
    </div>
  </div>
);

export default AccountMainAddress;
