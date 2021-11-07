import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import { auth, Providers } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import firebase from 'firebase';
import { SignInWithSocialMedia } from './modules';
import { CardBody, CardHeader, CardFooter, CardTitle, Row, Col } from 'reactstrap';

import { PiePlotExample } from '../contents/PiePlotExample';
import { BarPlotExample } from '../contents/BarPlotExample';



const Login: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            logging.info(result);
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
        .then(result => {
            logging.info(result);
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }

    return (
        <div>
            <CardHeader tag="h2" className="text-center bg-dark">
                Past Process
            </CardHeader>
            
            <br /><br />

            <Row>
                <Col
                className="bg-black"
                md={{
                    offset: 3,
                    size: 6
                }}
                sm="12"
                >
                {/* ログインコンテンツ */}
                    <CardBody>
                        <h2 className="text-dark text-center">ログイン</h2>
                        <CardTitle tag="h5" className="text-dark text-center">
                            メールアドレスまたはIDで、ログインしてください
                        </CardTitle>

                        <br />

                        {/* IDまたはアドレス */}
                        <FormGroup>
                        <Input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="メールアドレスまたはID"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                        </FormGroup>

                        {/* パスワード */}
                        <FormGroup>
                            <Input 
                                autoComplete="new-password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="パスワード"
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                            />
                        </FormGroup>

                        {/* ログインボタン */}
                        <Button
                            disabled={authenticating}
                            color="primary"
                            block
                            size="lg"
                            onClick={() => signInWithEmailAndPassword()}
                        >
                            ログイン
                        </Button>

                        <br /><br />
                    
                        <Row>
                            <Col
                            className="bg-white"
                            xs="6"
                            >
                                {/* googleのアカウントでログイン */}
                                <Button
                                    block
                                    size="lg"
                                    disabled={authenticating}
                                    onClick={() => signInWithSocialMedia(Providers.google)}
                                    style={{ backgroundColor:'#ea4335', borderColor:'#ea4335'}} 
                                >
                                    <i className="fab fa-google mr-2"></i> Sign in with Google
                                </Button>
                            </Col>

                            <Col
                            className="bg-white"
                            xs="6"
                            >
                                {/* Githubのアカウントでログイン */}
                                <Button
                                    block
                                    size="lg"
                                    disabled={authenticating}
                                    onClick={() => signInWithSocialMedia(Providers.github)}
                                    style={{ backgroundColor:'gray', borderColor:'gray'}} 
                                >
                                    <i className="fab fa-github mr-2"></i> Sign in with Github
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row>
            <Row>
                <Col
                className="bg-white"
                sm="3"
                xs="6"
                >
                </Col>

                <Col
                className="bg-white"
                sm="3"
                xs="6"
                >
                    <CardBody>
                        <PiePlotExample />
                    </CardBody> 
                </Col>

                <Col
                className="bg-white"
                sm="3"
                >
                    <CardBody>
                        <BarPlotExample/>
                    </CardBody>
                </Col>
            </Row>




            <br /><br />

            <CardFooter tag="h5" className="text-center bg-dark">
                {/* registerまたはforgotpasswordへ遷移 */}
                <small>
                    <p><Link to="/signup">登録はこちら</Link></p>
                    <br />
                    <p>パスワードを忘れた場合は<Link to="/forgotPassword">こちら</Link></p>
                </small>
            </CardFooter>
            
        </div>
    );
}

export default Login;