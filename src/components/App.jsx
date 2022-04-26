import {ContactList} from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm'
import ContactFilter from './ContactFilter/ContactFilter'
//import {TestPokemon} from '../components/TestPokemon/TestPokemon'

function App() {
   return (
       <section>
        <ContactForm/>
        <ContactFilter />
        <ContactList/>
        </section>
    )
};
    
export default App;

