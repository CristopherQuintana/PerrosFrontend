import FormPerro from "./Components/FormPerro";
import Navbar from "./Components/Navbar";

function CreatePerro() {
    return( 
    <>
        <Navbar />
        <FormPerro formType="create" initialValues=''/>
    </>
    )
}

export default CreatePerro;
