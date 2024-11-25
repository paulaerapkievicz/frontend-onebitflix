import styles from "./styles.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const SlideComponent = function () {
  return (
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            pagination: false,
          }}
        >
          <SplideSlide></SplideSlide>
        </Splide>
      </div>
      <div className={styles.slide}>
          <img src="" alt="" className={styles.slideImg} />
          <p className={styles.slideTitle}></p>
          <p className={styles.slideDescription}></p>
        </div>
    </>;
  );
};

export default SlideComponent;