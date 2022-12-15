import { Box, Text, Button } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    return (
        <Box>
            <Text>Hello Dashboard!</Text>
            <Button onClick={() => {signOut(auth); navigate('/login')}}>Log Out</Button>
        </Box>
    );
}

export default Dashboard;