import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import ErrorText from '../../components/ErrorText';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import { CardBody, CardHeader, CardFooter, CardTitle, Row, Col } from 'reactstrap';

// import { LinePlotExample } from '../contents/LinePlotExample';
import { PiePlotExample } from '../contents/PiePlotExample';
import { BarPlotExample } from '../contents/BarPlotExample';


const ChangePasswordPage: React.FunctionComponent<IPageProps> = props => {
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [old, setOld] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const passwordChangeRequest = () => {
        if (password !== confirm)
        {
            setError('Make sure your passwords are matching');
            return;
        }

        if (error !== '') setError('');

        setChanging(true);

        auth.currentUser?.updatePassword(password)
        .then(() => {
            logging.info('Password change successful.');
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setChanging(false);
            setError(error.message);
        });
    }

    if (auth.currentUser?.providerData[0]?.providerId !== 'password')
        return <Redirect to="/" />;

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
                        <h2 className="text-dark text-center">パスワードの変更</h2>
                        <CardTitle tag="h5">
                            メールアドレスまたはIDで、ログインしてください
                        </CardTitle>

                        <FormGroup>
                            <Input 
                                autoComplete="new-password"
                                type="password"
                                name="oldPassword"
                                id="oldPassword"
                                placeholder="現在のパスワード入れてください"
                                onChange={event => setOld(event.target.value)}
                                value={old}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                autoComplete="new-password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="新たなパスワードを入れてください"
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                autoComplete="new-password"
                                type="password"
                                name="confirm"
                                id="confirm"
                                placeholder="新たなパスワードの確認"
                                onChange={event => setConfirm(event.target.value)}
                                value={confirm}
                            />
                        </FormGroup>
                        <Button
                            disabled={changing}
                            color="primary"
                            block
                            onClick={() => passwordChangeRequest()}
                        >
                            パスワードを変更
                        </Button>
                        <ErrorText error={error} />
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
                        <BarPlotExample />
                    </CardBody>
                </Col>
            </Row>


            <br /><br />
            <CardFooter tag="h5" className="text-center bg-dark">
                {/* registerまたはforgotpasswordへ遷移 */}
                <small>
                    <p><Link to="/signup">登録はこちら</Link></p>
                    <p><Link to="/forgotPassword">パスワードを忘れた場合はこちら</Link></p>
                </small>
            </CardFooter>
        </div>
    );
}

export default ChangePasswordPage;