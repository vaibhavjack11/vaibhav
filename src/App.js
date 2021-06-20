
import hcbgImage from "./hcbg.jpg";
const App = () =>{
    return(
        <div
        className="bg_image"
        style={{
          backgroundImage: 'url('+hcbgImage+')',
          backgroundSize: "contain",
          backgroundRepeat:"no-repeat",
          height: "5000px",
          width: "1600px",
          color: "#f5f5f5"
        }}
      >
        

        </div>
    )
}
export default App;