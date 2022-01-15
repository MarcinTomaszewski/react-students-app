import RouterProvider from "./components/RouterProvider/RouterProvider";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import Footer from "./components/layout/footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app__wrapper}>
      <NavBar />
      <div className={styles.page__wrapper}>
        <RouterProvider />
      </div>
      <Footer />
    </div>
  );
}

export default App;
