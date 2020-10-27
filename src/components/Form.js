import React from 'react';
import Select from 'react-select'

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        console.log(e);
        setStatus(e.value);
    };
    const hi = (e) => {
        console.log('HERE');
    }
    const options = [
        { value: 'all', label: 'All' },
        { value: 'completed', label: 'Completed' },
        { value: 'uncompleted', label: 'Uncompleted' }
      ]

      const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '2px dotted green',
            color: state.isSelected ? 'yellow' : 'black',
            backgroundColor: state.isSelected ? 'orange' : 'white'
          }),
          control: (provided) => ({
            ...provided,
            marginTop: "5%",
            width: 300,
          }),
          menu: (provided, state) => ({
            ...provided,
              width: 300,
          })
      }

    return (
        <div>
            <div className="todo-input">
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input-field" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>

            <Select onChange={statusHandler} options={options}
            name="todos"
            className="filter"
            styles={customStyles} />

        </div>
    );
};

export default Form;