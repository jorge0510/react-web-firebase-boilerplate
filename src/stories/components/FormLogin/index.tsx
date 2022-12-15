import React, { useState, FormEvent } from "react";
import { 
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import ErrorMessage from "../ErrorMessage";

export interface IFormLoginProps {
    onSuccess: any,
    onError?: any
};

const FormLogin = ({onSuccess, onError}: IFormLoginProps) => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event: FormEvent ) => {
        event.preventDefault();
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setIsLoading(false);
                onSuccess();
            })
            .catch(e => {
                setError("Email & Password does not match");
                setIsLoading(false);
                onError();
            });
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} minWidth="md" maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Log In</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="john@gmail.com" value={ email } onChange={ e => setEmail(e.currentTarget.value) } />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                pr='4.5rem'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='****'
                                value={ password }
                                onChange={ e => setPassword(e.currentTarget.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button type="submit" variant="outline" colorScheme="teal" width="full" mt={4}>
                            { isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}

export default FormLogin;