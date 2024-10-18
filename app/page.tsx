import { Button } from "@/components/ui/button";


const Home = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "flex-end" , padding: "10px" }} className="me-20">
      <Button className="me-10">Entrar</Button>
      <Button>Cadastrar</Button>
      </div>
    </div>
  )
}
 
export default Home;
