import React, { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import { Link, useHistory } from 'react-router-dom';
import { LinePlotExample } from '../contents/LinePlotExample';
import { PiePlotExample } from '../contents/PiePlotExample';
import { BarPlotExample } from '../contents/BarPlotExample';
import { Card, CardBody, Container, CardHeader, CardFooter, CardTitle, CardText, Row, Col } from 'reactstrap';

const ForgotPasswordPage: React.FunctionComponent<IPageProps> = props => {
    const [sending, setSending] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const resetPasswordRequest = () => {
        if (error !== '') setError('');

        setSending(true);

        auth.sendPasswordResetEmail(email)
        .then(() => {
            logging.info('Email sent.');
            setSent(true);
            setSending(false);
        })
        .catch(error => {
            logging.error(error);
            setError(error.message);
            setSending(false);
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
                        <h2 className="text-dark text-center">パスワードのリセット</h2>
                        <CardTitle tag="h5" className="text-dark text-center">
                            メールアドレスを入力してください。
                        </CardTitle>

                        <br />

                        {sent ?
                            <p className="text-dark">A link has been sent to your email with instructions.</p>
                        :
                            <>
                                <p>Please enter your email.</p>
                                <FormGroup>
                                    <Input 
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        onChange={event => setEmail(event.target.value)}
                                        value={email}
                                    />
                                </FormGroup>
                                <Button
                                    disabled={sending}
                                    color="success"
                                    block
                                    onClick={() => resetPasswordRequest()}
                                >
                                    Send Reset Link
                                </Button>
                                <ErrorText error={error} />
                            </>
                        }

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
                        <LinePlotExample />
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

            <CardFooter tag="h5" className="text-center bg-dark">
                <small>
                    <p>登録は<Link to="/signup">こちら</Link></p>
                    <br />
                    <p className='m-1 text-center'>もうすでにアカウントを持っている場合は<Link to="/login">こちら</Link></p>
                </small>
                <ErrorText error={error} />
            </CardFooter>
            
        </div>
    );
}

export default ForgotPasswordPage;