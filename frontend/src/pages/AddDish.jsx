import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Input,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { toast } from "react-toastify";


function AddDish(){
return(
<>
<Container>
       
            <Card>
              <CardBody>
                <CardTitle>
                  <h4> Add New Dish</h4>
                </CardTitle>
                <CardText>
                  <Form >
                    {/* School Id section*/}
                    <FormGroup>
                      <Label for="Dish Name">Dish Name</Label>
                      <Input
                        id="dishname"
                        placeholder="Enter the Dish Name"
                       // onChange={(e) => handleChange(e, "")}
                        //value={data.schoolId}
                        required
                      />
                    </FormGroup>

                    {/* Password Section  */}
                    <FormGroup>
                      <Label for="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="Enter Price "
                        //onChange={(e) => handleChange(e, "password")}
                        //value={data.password}
                        required
                      />
                    </FormGroup>
                    
                    <Button color="success" type="submit">
                      Add
                    </Button>
                  </Form>
                  <br></br>
                  
                </CardText>
              </CardBody>
            </Card>
         
      </Container>

</>
  
);

}
export default AddDish;