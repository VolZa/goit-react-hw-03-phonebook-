import { Component } from 'react';
import { FormPhBS, AddContact, Label } from './FormPhB.styled';

export class FormPhB extends Component {
    state = {
        name: '',
        number: ''
    }
    resetForm = () => {
        this.setState({ name: '', number: '' });
      };
    handleNameChange = e => {
        this.setState({ name: e.currentTarget.value });
    }
    handleNumberChange = e => {
        this.setState({ number: e.currentTarget.value });
    }

    render() {
        return (
            <FormPhBS onSubmit={e => {
                e.preventDefault();
                this.props.addContact(this.state);
                this.resetForm();
            }}>
                <Label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Label>

                <Label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleNumberChange}
                    />
                </Label>

                <AddContact type="submit">Add contact</AddContact>
            </FormPhBS>
        );
    }
}

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         // setName(value);
//         break;

//       case 'number':
//         // setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(name, number);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},