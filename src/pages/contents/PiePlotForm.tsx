import React, { useState, useEffect } from 'react';
import { FormGroup, Input, Button } from 'reactstrap';
import { db } from '../../config/firebase';
import { Col, Row, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export const PiePlotForm: React.FC = () => {
  const [tasks, setTasks] = useState([{ id: "", inout: "", count: 0 }]);
  const [input, setInput] = useState<string>("input");
  const [num, setNum] = useState<number>();

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, inout: doc.data().inout, count: doc.data().count }))
      );
    });
    return () => unSub();
  }, []);

  const newData = (e: React.MouseEvent<HTMLButtonElement>)=>{
    console.log("a");
    console.log(num);
    console.log(input);
    // db.collection("tasks").add({ count: num, inout: input });
    db.collection("tasks").add({
      inout: input,
      count: num
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    setNum(0);
    setInput("input");
    }

  return (
    <div>
      <Row>
        <Col
          sm="6"
          xs="6"
        >
          <h2 className="text-dark text-center">登録</h2>
          <br />
          <Row>
            <Col 
            sm="12" 
            md={{ size: 6, offset: 3 }}
            text-dark
            >
              <FormGroup>
                <h5 className="text-dark">InputかOutputか選択してください。</h5>
                <Input
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="select"
                  type="select"
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInput(e.target.value)
                  }
                >
                  <option>
                    Input
                  </option>
                  <option>
                    Output
                  </option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col 
              sm="12" 
              md={{ size: 6, offset: 3 }}
            >
              <FormGroup>
                <h5 className="text-dark">Number</h5>
                <Input
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="number"
                  placeholder="回数"
                  type="number"
                  value={num}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNum(Number(e.target.value))
                  }
                >
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col 
              sm="12" 
              md={{ size: 5, offset: 5 }}
              >

              <Button 
                disabled={!num} 
                onClick={newData}
                color="success"
                size='lg'
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Col>



        {/* <Col
          className="bg-light"
          sm="2"
          xs="6"
        >
        </Col> */}



        <Col
          sm="6"
          className="text-center"
        >
          <br />
          <h3 className="text-center text-dark">履歴</h3>
          <br />
          {tasks.map((task) => (
            <h5 className="text-dark">"{task.inout}"の時間を{task.count}時間分追加しました！</h5>
          ))}
          <br />
        </Col>
      </Row>
      
    </div>
  )
}

