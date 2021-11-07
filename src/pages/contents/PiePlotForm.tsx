import React, { useState, useEffect } from 'react';
import { FormGroup, Input, Button } from 'reactstrap';
import { db } from '../../config/firebase';

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
      {tasks.map((task) => (
        <h1>{task.count},{task.inout}</h1>
      ))}
      <FormGroup>
        <label>select</label>
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
            input
          </option>
          <option>
            output
          </option>
        </Input>
      </FormGroup>

      <FormGroup>
        <label>Number</label>
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

      <Button disabled={!num} onClick={newData}>
        Submit
      </Button>

    </div>
  )
}

