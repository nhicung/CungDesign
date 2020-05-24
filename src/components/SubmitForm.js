import React from 'react';
import { BreakLine } from './LineBreak'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const Style = styled.div`
.signup {
	color: #665544;
	padding-bottom: 70px;
	padding-left: 30%;
	text-align: left;
    
}
.form-group {
	width:60%;
}

.button {
	bacground-color: #665544;
}
`
const StyleButton = styled.button`
	color: white;
	background-color: #665544;
	padding: 8px;
	&:hover { background-color: #d4d0c6; color:#665544 }`

	const inputParsers = {
		date(input) {
			const split = input.split('/');
			const day = split[1]
			const month = split[0];
			const year = split[2];
			return `${year}-${month}-${day}`;
		},
		uppercase(input) {
			return input.toUpperCase();
		},
		number(input) {
			return parseFloat(input);
		},
	};
	

	
class SubmitForm extends React.Component {
	constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
    	this.setState({
        invalid: true,
        displayErrors: true,
      });
      return;
    }
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;
      console.log('parser name is', parserName);
      if (parserName) {
        const parsedValue = inputParsers[parserName](data.get(name))
        data.set(name, parsedValue);
      }
    }
    
    this.setState({
    	res: stringifyFormData(data),
      invalid: false,
      displayErrors: false,
		});
	}
	
	render() {
		return (
			<Style>
				<div className="title">
					<h1>Let's get painting!</h1>
					<p>Sign up for our workshop</p>
					<BreakLine w="50%" />
				</div>
				<div className="signup">
					<Form onSubmit={this.handleSubmit}>
						<Form.Group as={Row} controlId="formHorizontalEmail">
							<Form.Label column sm={2}>
								Your Name
                    </Form.Label>
							<Col sm={10}>
								<Form.Control placeholder="Name" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={2}>
								Event
                    </Form.Label>
							<Col sm={10}>
								<Form.Control placeholder="Event" />
							</Col>
						</Form.Group>
						<fieldset>
							<Form.Group as={Row}>
								<Form.Label as="legend" column sm={2}>
									Payment Type
                        </Form.Label>
								<Col sm={10}>
									<Form.Check
										type="radio"
										label="cash"
										name="formHorizontalRadios"
										id="formHorizontalRadios1"
									/>
									<Form.Check
										type="radio"
										label="credit card"
										name="formHorizontalRadios"
										id="formHorizontalRadios2"
									/>
								</Col>
							</Form.Group>
						</fieldset>
						<Form.Group as={Row} controlId="formHorizontalCheck">
							<Col sm={{ span: 10, offset: 2 }}>
								<p>By clicking confirmation you agree to our Terms & Condition</p>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Col sm={{ span: 10, offset: 2 }}>
								<StyleButton type="submit">Confirm</StyleButton>
							</Col>
						</Form.Group>
					</Form>
				</div>
			</Style>
		);
	}
}
function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

export default SubmitForm;