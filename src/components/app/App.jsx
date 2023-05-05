import { Component } from 'react';
import { FormPhB } from "components/form/FormPhB";
import { Title } from "components/title/Title";
import { GlobalStyle } from "./Global.styled";
import { ContactList } from 'components/contact-list/ContactList';
import { Filter } from 'components/filter/Filter';
import { nanoid } from 'nanoid'
import { Layout } from 'components/layout/Layout';

export class App extends Component {
  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
 
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
 
    if (contacts) {
      this.setState({contacts: JSON.parse(contacts)})
    } else {console.log('no contacts');}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  //обробник подій всих input (за input:name заповнює відповідне значення state, name в input і в state мають бути однакові) 
  onChangeInput = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  addContact = ({name, number}) => {
    if (this.state.contacts.some(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      alert(`${name} is already in contacts`)
    } else {
      const idd = {id: nanoid()};
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {...idd, name, number}]
      }))
    }
  };
  
  delContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id!== id);
    this.setState({contacts: newContacts});
  }

  filterContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Title title="Phonebook" />
        <FormPhB addContact={this.addContact}/>
        <Title title="Contacts" />
        <Filter filter={this.state.filter}
          onChangeInput={this.onChangeInput}/>
        <ContactList contacts={this.filterContacts()}
        delContact={this.delContact}/>
      </Layout>
    );
  }
};
