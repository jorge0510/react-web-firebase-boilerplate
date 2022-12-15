import { 
    Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import FormLogin from "../../components/FormLogin";



export interface ILoginPageProps {};

const Login = () => {
    const navigate= useNavigate();

    return (
        <Flex width="full" align="center" justifyContent="center" minH="100vh">
            <FormLogin onSuccess={() => navigate('/dashboard')} />
        </Flex>
    );
}

export default Login;