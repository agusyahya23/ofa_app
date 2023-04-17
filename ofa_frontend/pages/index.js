import Layout from "../components/Layout";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Service from "../components/Services";

const Index = () => {
  return (
    <Layout pageTitle="OFA App">
      <Header />
      <Landing/>
      <Service/>
    </Layout>
  )
}

export default Index;