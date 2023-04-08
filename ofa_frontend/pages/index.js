export async function getServerSideProps() {
    const {name, uni} = await fetch("http://ofa-backend:8080/founder").then(x => x.json());
    console.log(name)
    console.log(uni)
    return {
      props: {
        name: name ,
        uni: uni 
      }
    }
  }

export default function Home({name, uni}){
    return (
        <main>
            <h1>Welcome to OFA</h1>
            <h4>Created by {name}</h4>
        </main>
    )
}