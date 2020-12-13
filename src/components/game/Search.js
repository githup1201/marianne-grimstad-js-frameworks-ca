import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search({ conductSearch }) {
	return (
		  <InputGroup className="search">
			  <FormControl placeholder="Search by name..." onChange={event => conductSearch(event)} />
		  </InputGroup>
	);
}

Search.propTypes = {
	conductSearch: PropTypes.func.isRequired
};

export default Search;