import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";

export const Accordion = (): JSX.Element => {
  useState;
  const [isClick, setIsClick] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setIsClick((prev) => !prev);
    console.log(isClick);
  }, [isClick]);
  return (
    <div>
      <h2>テストでアコーディオンを作成</h2>
      <ul className={styles.accordionArea}>
        <li className={isClick ? styles.close : undefined}>
          <section>
            <h3 className={styles.title} onClick={handleClick}>
              お見積りの目安を教えてください
            </h3>
            <div className={styles.box}>
              <p>
                内容によって変化いたしますのでまずはお問合せフォームよりご相談ください
              </p>
            </div>
          </section>
        </li>
        <li>
          <section>
            <h3>お見積りの目安を教えてください</h3>
            <div>
              <p>
                内容によって変化いたしますのでまずはお問合せフォームよりご相談ください
              </p>
            </div>
          </section>
        </li>
      </ul>
    </div>
  );
};
