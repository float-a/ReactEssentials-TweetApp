var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

var inputStyle = {
    marginRight: '5px'
};

var CollectionRenameForm = React.createClass({

    getInitialState() {
        return {
            inputValue: CollectionStore.getCollectionName()
         };
    },

    setInputValue: function (inputValue) {
        this.setState({
            inputValue: inputValue
    });
    },

    handleInputValueChange(event) {
        var inputValue = event.target.value;
        this.setInputValue(inputValue);
    },

    handleFormSubmit(event) {
        event.preventDefault();

        var collectionName = this.state.inputValue;
        CollectionActionCreators.setCollectionName(collectionName);
        this.props.onChangeCollectionName(collectionName);
    },

    handleFormCancel(event) {
        event.preventDefault();

        var collectionName = CollectionStore.getCollectionName();
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },

    componentDidMount: function () {
        this.refs.collectionName.focus();
    },

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
            <Header text="Collection name:" />
            <div className="form-group">
                <input className="form-control"
                    style={inputStyle}
                    onChange={this.handleInputValueChange}
                    value={this.state.inputValue}
                    ref="collectionName" />
            </div>
            <Button label="Change" handleClick={this.handleFormSubmit} />
            <Button label="Cancel" handleClick={this.handleFormCancel} />
            </form>
        );
}
})