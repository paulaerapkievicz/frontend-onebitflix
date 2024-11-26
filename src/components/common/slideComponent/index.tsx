import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../slideCard";

interface props {
  course: CourseType[]
}

const SlideComponent = function ({course}: props) {
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
          {course?.map((course)=>(
            <SplideSlide key={course.id}>
              <SlideCard course={course}/>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className={styles.slide}>
          <img src="" alt="" className={styles.slideImg} />
          <p className={styles.slideTitle}></p>
          <p className={styles.slideDescription}></p>
        </div>
    </>
  )
}

export default SlideComponent;