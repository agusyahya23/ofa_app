import Layout from "../components/Layout";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Services from "../components/Services";
import About from "../components/About";

const Index = () => {
  return (
    <Layout pageTitle="OFA App">
      <Header />
      <Landing id="landing"/>
      <Services id="service"/>
      <About id="about"/>
    </Layout>
  )
}

export default Index;