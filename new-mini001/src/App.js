import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 1. JSX Syntax: Functional component demonstrating JSX syntax
const JSXExample = () => {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is an example of JSX syntax.</p>
    </div>
  );
};

// 2. Functional and Class Components: Class component example
class ClassComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Class Component!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This is a class component example.</p>
      </div>
    );
  }
}

// 3. Props and State: Functional component receiving props and having internal state
const PropsAndStateExample = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This component receives props.</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// 4. Conditional Rendering: Functional component with conditional rendering
const ConditionalRenderingExample = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      {showMessage ? <p>This message is shown conditionally.</p> : null}
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
    </div>
  );
};

// 5. Lists and Keys: Functional component rendering a list with keys
const ListAndKeysExample = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

//6. Functional component fetching data from an API
const APIIntegrationExample = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers(); // Call the function to fetch data when the component mounts
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <JSXExample />
      <ClassComponentExample />
      <PropsAndStateExample name="John" />
      <ConditionalRenderingExample />
      <ListAndKeysExample />
      <APIIntegrationExample />
    </div>
  );
};

export default App;

