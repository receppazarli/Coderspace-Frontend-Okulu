import PropTypes from 'prop-types'

function ListItem(props) {
  return <li>{props.student}</li>;
}

ListItem.PropTypes={
  student: PropTypes.string.isRequired,
};

export default ListItem;
