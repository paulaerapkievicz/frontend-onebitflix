import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import PageSpinner from "@/src/components/common/spinner";
import SearchCard from "@/src/components/searchCard";
import { Container } from 'reactstrap'
import Footer from "@/src/components/common/footer";


const Search = function () {
  const router = useRouter();
  const searchName = router.query.name;
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(false);

  const searchCourses = async () => {
    if (typeof searchName === 'string' && searchName.trim() !== '') { 
      setLoading(true);
      const res = await courseService.getSearch(searchName);
      setSearchResult(res.data.courses);
      setLoading(false);
      // if (res.data.courses.length === 0) {
      //   setSearchRender(false);
      // }
    }
  };
  

  useEffect(() => {
    searchCourses();
  }, [searchName]);

  return (
    <>
      <Head>
        <title>Onebitflix - {searchName}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
      <div className={styles.headerFooterBg}>
        <HeaderAuth/>
      </div>
      <div className={styles.searchContainer}>
        {loading ? (
          <PageSpinner/>
        ) : searchResult.length >= 1 ? (
          <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
          {searchResult?.map((course) => (
            <SearchCard key={course.id} course={course} />
          ))}
        </Container>
        ) : (
          <div className={styles.searchContainer}>  
            <p className={styles.noSearchResult}>Nenhum resultado encontrado!</p>
          </div>
        )}
      </div>
      <div className={styles.headerFooterBg}>
        <Footer/>
      </div>
      </main>
    </>
  );
};

export default Search;